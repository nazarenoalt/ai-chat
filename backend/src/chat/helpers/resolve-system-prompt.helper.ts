import fs from 'fs';
import path from 'path';

export const resolveSystemPrompt = (): string => {
  const systemPrompt = fs.readFileSync(
    path.join(process.cwd(), 'src', 'system-prompt.md'),
    'utf-8',
  );
  return systemPrompt;
};
