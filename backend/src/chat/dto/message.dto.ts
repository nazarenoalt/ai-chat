import { IsArray, IsIn, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { MessageParam } from '@anthropic-ai/sdk/resources';

export class MessageParamDto implements MessageParam {
  @IsIn(['user', 'assistant'])
  role: 'user' | 'assistant';

  @IsString()
  content: string;
}
export class MessageDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MessageParamDto)
  messages: MessageParamDto[];
}
