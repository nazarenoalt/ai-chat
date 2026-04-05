import { Body, Controller, Post, Sse } from '@nestjs/common';
import { ChatService } from './chat.service';
import { Observable } from 'rxjs';
import { MessageDto } from './dto/message.dto';
import { MessageEvent } from '@nestjs/common';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post('stream')
  @Sse('stream')
  stream(@Body() dto: MessageDto): Observable<MessageEvent> {
    return new Observable((subscriber) => {
      this.chatService
        .stream(dto)
        .on('text', (text) => {
          subscriber.next({ data: text });
        })
        .on('finalMessage', () => {
          subscriber.complete();
        })
        .on('error', (error) => {
          subscriber.error(error);
        });
    });
  }
}
