import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatModule } from './chat/chat.module';
import { AiModule } from './ai/ai.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), ChatModule, AiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
