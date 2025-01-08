/* eslint-disable @typescript-eslint/no-var-requires */
const { execSync } = require('child_process');
const { resolve } = require('path');

const root = resolve(__dirname, '..');
const run = (cmd) => execSync(cmd, { stdio: 'inherit', cwd: root });

// Clean output directory
run(`npx rimraf src/icons`);

// Run SVGR to convert raw icon SVGs to react components
run(`npx svgr --config-file svgr.config.js -d src/icons icons`);

// Run prettier on automatically generated index.tsx
run(`npx prettier --write src/icons/**/index.tsx`);
