// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import pkg from './package.json';

// TODO: standardize this with getLocalIdent in .storybook/main.js
const generateScopedName = (name, filename) => {
    const file = path.basename(filename, '.module.css');
    return `Playbook-${file}__${name}`;
};

export default {
    input: 'src/index.ts',
    output: {
        file: pkg.module,
        format: 'esm',
        sourcemap: true
    },
    external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
    plugins: [
        postcss({ autoModules: true, modules: { generateScopedName: generateScopedName }, extract: true }),
        typescript()
    ]
};
