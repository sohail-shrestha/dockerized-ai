import { Body, Controller, Post } from '@nestjs/common';

import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { PromptDto } from './dto';
import { AiService } from './service';

@ApiTags('AI')
@Controller('ai')
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @Post()
  @ApiOperation({ summary: 'Generate AI response' })
  async generateResponse(@Body() promptDto: PromptDto) {
    return this.aiService.generateResponse(promptDto);
  }
}
