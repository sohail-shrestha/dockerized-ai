import { Module } from '@nestjs/common';
import { AiController } from './ai.controller';

import { OllamaProvider } from './provider';
import { AiService } from './service/ai.service';

@Module({
  controllers: [AiController],
  providers: [AiService, OllamaProvider],
})
export class AiModule {}
