/* eslint-disable @typescript-eslint/no-var-requires */
const { execSync } = require('child_process');
const { resolve } = require('path');

const root = resolve(__dirname, '..');
const run = (cmd) => execSync(cmd, { stdio: 'inherit', cwd: root });

// Clean dist directory
run(`npx rimraf dist`);

// Generate type definitions
run(`npx tsc --emitDeclarationOnly --outDir dist/types`);

// Generate final JS and CSS
run(`npx webpack --mode production`);

// Copy tailwind preset
run(`npx cpy tailwind.preset.js dist`);

// Copy the uncompiled Tailwind directives to support advanced CSS configurations
run(`npx cpy src/css dist/css/tailwind --flat`);

// Copy the compiled CSS Modules styles separately
run(`npx cpy ./dist/lib.css dist/css --flat --rename=modules.css`);

// Remove any remaining unneeded 'lib' artifacts
run(`npx rimraf ./dist/lib.{js,css} --glob`);

// Copy prettier config
run(`npx cpy prettier.config.js dist`);

// Copy browserslist config
run(`npx cpy .browserslistrc dist`);
