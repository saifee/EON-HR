import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CommunicationsService } from './communications.service';

@ApiTags('communications')
@Controller('communications')
export class CommunicationsController {
  constructor(private readonly communicationsService: CommunicationsService) {}

  @Post('send')
  send(@Body() body: { channel: 'sms' | 'email' | 'whatsapp'; recipient: string; message: string; employeeId?: string }) {
    return this.communicationsService.send(body.channel, {
      recipient: body.recipient,
      body: body.message,
      employeeId: body.employeeId,
    });
  }

  @Post('bulk')
  bulk(@Body() body: { channel: 'sms' | 'email' | 'whatsapp'; recipients: string[]; message: string }) {
    return this.communicationsService.bulk(body.channel, body.recipients, body.message);
  }

  @Get('log')
  log(@Query('employeeId') employeeId?: string) {
    return this.communicationsService.log(employeeId);
  }
}
