const rollup = require('rollup');
const fs = require('fs');
const logger = require('./logger');
const path = require('path');
const babel = require('rollup-plugin-babel');
const globals = require('rollup-plugin-node-globals');

const packagesDir = path.join(__dirname, '..');
// const format = 'es';
const format = 'cjs';
// const format = 'iife';
// const format = 'umd';

function componentPath(fpath) {
  return path.join(packagesDir, fpath);
}

function ignoreModule(regex) {
  return {
    resolveId: (value) => {
      if (!value.match(regex)) return undefined;
      logger.info(`ignoreModule dependency ${value} for rollup`);
      return false;
    },
  };
}

function config() {
  const external = {};

  const presets = [
    [
      'env',
        {
          modules: false,
          //
          // loose: true,
          targets: {
            node: "6"
          },
          debug: true
        }
    ],
    // 'es2015',
    'es2015-rollup',
    'react',
    // 'stage-2',
  ];

  const plugins = [
    // 'add-module-exports',
    // 'transform-runtime',
    // 'transform-imports'
    'external-helpers',
    'transform-object-rest-spread',
    'babel-plugin-transform-class-properties'
  ];

  return {
    entry: componentPath(`src/index.js`),
    external,
    format: format,
    plugins: [
      ignoreModule(/@browsbox/),
      babel({
        exclude: ['node_modules/**'],
        babelrc: false,
        presets: presets,
        plugins: plugins,
      }),
      // globals(),
    ],
  };
}

function configOrig() {
 const external = {};
 return {
   entry: componentPath(`src/index.js`),
   external,
   format: format,
   plugins: [
     ignoreModule(/@browsbox/),
     babel({
       exclude: ['node_modules/**'],
       babelrc: false,
       presets: [['env', { modules: false }], 'react'],
       plugins: [
        'external-helpers',
        'transform-object-rest-spread'
       ],
     }),
     globals(),
   ],
 };
}

function componentRollup() {
  return new Promise((resolve, reject) => {
    const rollupConfig = config();
    logger.info('Bundle JS');

    if (!fs.existsSync(rollupConfig.entry)) {
      reject(`Missing entry file for tool ${rollupConfig.entry}`);
    }

    rollup.rollup(rollupConfig)
      .then(bundle =>
        bundle.write({
          dest: componentPath(`/build/index-rollup.js`),
          format: format,
        })
      )
      .then(() => resolve())
      .catch((err) => {
        reject(err);
      });
  });
}

module.exports = componentRollup;

componentRollup()
  .then(() => {
    console.log('all done...');
  })
  .catch((err) => {
    console.error(err);
  });

