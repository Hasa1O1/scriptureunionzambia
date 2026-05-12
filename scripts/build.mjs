import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';

const root = process.cwd();
const node = process.execPath;
const tsc = join(root, 'node_modules', 'typescript', 'bin', 'tsc');
const vite = join(root, 'node_modules', 'vite', 'bin', 'vite.js');

for (const file of [tsc, vite]) {
  if (!existsSync(file)) {
    throw new Error(`Missing build dependency: ${file}. Run npm ci before npm run build.`);
  }
}

execFileSync(node, [tsc], { stdio: 'inherit' });
execFileSync(node, [vite, 'build'], { stdio: 'inherit' });
