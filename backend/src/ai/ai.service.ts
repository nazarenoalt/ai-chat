import Anthropic from '@anthropic-ai/sdk';
import { Injectable } from '@nestjs/common';
import { MessageParamDto } from 'src/chat/dto/message.dto';

@Injectable()
export class AiService {
  private readonly client: Anthropic;

  constructor() {
    this.client = new Anthropic();
  }

  stream(messages: MessageParamDto[], systemPrompt: string) {
    return this.client.messages.stream({
      model: 'claude-haiku-4-5',
      max_tokens: 2048,
      system: systemPrompt,
      messages: messages,
    });
  }
}
