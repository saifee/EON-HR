import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as argon from 'argon2';
import { User } from './user.entity';
import { LoginDto, RegisterDto } from './dto/auth.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly users: Repository<User>,
    private readonly jwtService: JwtService,
    private readonly config: ConfigService,
  ) {}

  async register(payload: RegisterDto) {
    const password = await argon.hash(payload.password);
    const user = this.users.create({ ...payload, password, roles: ['admin'], tenantId: payload.tenantId });
    await this.users.save(user);
    return this.buildTokens(user);
  }

  async validateUser(email: string, password: string) {
    const user = await this.users.findOne({ where: { email } });
    if (!user) throw new UnauthorizedException('Invalid credentials');
    const valid = await argon.verify(user.password, password);
    if (!valid) throw new UnauthorizedException('Invalid credentials');
    return user;
  }

  async login(payload: LoginDto) {
    const user = await this.validateUser(payload.email, payload.password);
    return this.buildTokens(user);
  }

  private buildTokens(user: User) {
    const payload = { sub: user.id, roles: user.roles, tenantId: user.tenantId, email: user.email };
    const accessToken = this.jwtService.sign(payload, {
      secret: this.config.get<string>('jwt.secret'),
      expiresIn: this.config.get<string>('jwt.expiresIn'),
    });
    const refreshToken = this.jwtService.sign(payload, {
      secret: this.config.get<string>('jwt.refreshSecret'),
      expiresIn: this.config.get<string>('jwt.refreshExpiresIn'),
    });
    return { accessToken, refreshToken, user };
  }
}
