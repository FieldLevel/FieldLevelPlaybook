// import typescript from 'rollup-plugin-typescript2';

import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';

import del from 'rollup-plugin-delete';
import pkg from './package.json';

const production = !process.env.ROLLUP_WATCH;

// TODO: Better custom class names?
const generateScopedName = (name, filename) => {
    const path = require('path');
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
        production && del({ targets: ['dist/*'] }),
        postcss({ autoModules: true, modules: { generateScopedName: generateScopedName }, extract: true }),
        typescript()
    ]
};
