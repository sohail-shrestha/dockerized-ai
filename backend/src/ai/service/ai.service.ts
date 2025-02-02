import { Inject, Injectable } from '@nestjs/common';
import { PromptDto } from '../dto';
import { Ollama, OLLAMA_CLIENT } from '../provider';

@Injectable()
export class AiService {
  constructor(
    @Inject(OLLAMA_CLIENT)
    private readonly ollamaClient: Ollama,
  ) {}

  async generateResponse(promptDto: PromptDto) {
    const response = await this.ollamaClient.generate({
      model: 'deepseek-r1',
      prompt: promptDto.prompt,
    });

    return response;
  }
}
