import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ChatService } from './chat.service';

@ApiTags('chat')
@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Get('history')
  history(@Query('channel') channel = 'general') {
    return this.chatService.history(channel);
  }

  @Post('send')
  send(
    @Body()
    body: { sender: string; channel?: string; message: string; attachments?: string[]; emoji?: string },
  ) {
    return this.chatService.send({ sender: body.sender, channel: body.channel || 'general', body: body.message, attachments: body.attachments, emoji: body.emoji });
  }
}
