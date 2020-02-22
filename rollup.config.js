import path from 'path';
import { readdirSync } from 'fs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { eslint} from 'rollup-plugin-eslint';

const rootPath = path.resolve('./');
const libPath = `${rootPath}/lib`;
const toolsPath = `${rootPath}/src/tools`;

export default [
  ...readdirSync(toolsPath).map(filepath => ({
    input: `${toolsPath}/${filepath}/index.js`,
    output: [
      { file: `${libPath}/${filepath}/index.js`, format: 'es' }
    ],
    plugins: [
      resolve({ jail: `${__dirname}/src` }),
      // eslint(),
      babel({
        include: [`${toolsPath}/${filepath}/*.js`],
      }),
    ],
  })),
  {
    input: 'src/index.js',
    output: [
      { file: `index.js`, format: 'es' },
    ],
    plugins: [
      resolve({ jail: `${__dirname}/src` }),
      // eslint(),
      babel({
        include: ['src/**/*.js', 'src/*.js'],
      }),
    ],
  },
];
