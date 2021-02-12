/* eslint-disable @typescript-eslint/no-var-requires */
const { execSync } = require('child_process');
const { resolve } = require('path');

const root = resolve(__dirname, '..');
const run = (cmd) => execSync(cmd, { stdio: 'inherit', cwd: root });

// Clean dist directory
run(`yarn run rimraf dist`);

// Generate type definitions
run(`yarn run tsc --emitDeclarationOnly --outDir dist/types`);

// Generate final JS and CSS
run(`yarn run rollup -c --environment NODE_ENV:production`);

// Copy tailwind preset
run(`yarn run cpy tailwind.preset.js dist`);
