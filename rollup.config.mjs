import sass from 'rollup-plugin-sass';
import { babel } from '@rollup/plugin-babel';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      strict: false
    }
  ],
  plugins: [babel({ exclude: 'node_modules/**', babelHelpers: 'bundled' }), sass({ insert: true })],
  external: ['react', 'react-dom']
}
