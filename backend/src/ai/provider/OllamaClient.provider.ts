import { Provider } from '@nestjs/common';
import { Ollama } from 'ollama';

export const OLLAMA_CLIENT = 'OLLAMA_CLIENT';

export const OllamaProvider: Provider = {
  provide: OLLAMA_CLIENT,
  useFactory: async () => {
    const ollama = new Ollama({
      host: process.env.OLLAMA_HOST || 'http://localhost:11434',
    });
    console.log('Fetching deepseek-r1');

    await ollama.pull({ model: 'deepseek-r1' });

    console.log('Initialized deepseek-r1');

    return ollama;
  },
};
