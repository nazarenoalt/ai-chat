import { Message } from "../message/message.interface";

export interface AiRequest {
  model: string;
  max_tokens: number;
  messages: Message;
}
