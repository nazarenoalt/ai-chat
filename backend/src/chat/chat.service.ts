import { Injectable } from '@nestjs/common';
import { AiService } from '../ai/ai.service';
import { resolveSystemPrompt } from './helpers/resolve-system-prompt.helper';
import { MessageDto } from './dto/message.dto';

@Injectable()
export class ChatService {
  systemPrompt: string;

  constructor(private readonly aiService: AiService) {
    this.systemPrompt = resolveSystemPrompt();
  }

  stream(dto: MessageDto) {
    return this.aiService.stream(dto.messages, this.systemPrompt);
  }
}
