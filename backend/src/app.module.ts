import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleModule } from '@nestjs/schedule';
import { JwtModule } from '@nestjs/jwt';
import { LoggerModule } from 'nestjs-pino';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TenantModule } from './tenants/tenant.module';
import { EmployeeModule } from './employees/employee.module';
import { PayrollModule } from './payroll/payroll.module';
import { AttendanceModule } from './attendance/attendance.module';
import { LeaveModule } from './leave/leave.module';
import { RecruitmentModule } from './recruitment/recruitment.module';
import { PerformanceModule } from './performance/performance.module';
import { DocumentModule } from './documents/document.module';
import { NotificationModule } from './notifications/notification.module';
import { SettingsModule } from './settings/settings.module';
import { SelfServiceModule } from './self-service/self-service.module';
import { AnalyticsModule } from './analytics/analytics.module';
import { WorkflowModule } from './workflow/workflow.module';
import { TrainingModule } from './training/training.module';
import { ComplianceModule } from './compliance/compliance.module';
import { ChatModule } from './chat/chat.module';
import { CommunicationsModule } from './communications/communications.module';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    LoggerModule.forRoot({ pinoHttp: { level: process.env.NODE_ENV === 'production' ? 'info' : 'debug' } }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        host: config.get<string>('database.host'),
        port: config.get<number>('database.port'),
        username: config.get<string>('database.user'),
        password: config.get<string>('database.password'),
        database: config.get<string>('database.name'),
        autoLoadEntities: true,
        synchronize: false,
      }),
    }),
    JwtModule.register({}),
    ScheduleModule.forRoot(),
    TenantModule,
    AuthModule,
    EmployeeModule,
    PayrollModule,
    AttendanceModule,
    LeaveModule,
    RecruitmentModule,
    PerformanceModule,
    DocumentModule,
    NotificationModule,
    SettingsModule,
    SelfServiceModule,
    AnalyticsModule,
    WorkflowModule,
    TrainingModule,
    ComplianceModule,
    ChatModule,
    CommunicationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
