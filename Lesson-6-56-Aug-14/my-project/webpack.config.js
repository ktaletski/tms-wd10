const path = require('path');
const rules = require('./webpack/rules');
const plugins = require('./webpack/plugins');

const PROJECT_JS_ENTRY = 'src/app/app.js';
const PROJECT_HTML_ENTRY = './src/index.html';

module.exports = (env, options) => {
  const modes = {
    development: 'development',
    production: 'production',
  };

  const environment = modes[options.mode] || modes.development;

  return {
    mode: environment,
    entry: {
      app: path.resolve(__dirname, PROJECT_JS_ENTRY),
    },
    output: {
      filename: '[name].js',
    },
    module: {
      rules: [
        ...rules.files(),
        rules.scripts(environment),
        rules.styles(environment),
      ],
    },
    plugins: [
      plugins.html(PROJECT_HTML_ENTRY)(environment),
      // plugins.images(environment),
      plugins.extractStyles(environment),
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      open: true,
      port: 3000,
      hot: true,
      historyApiFallback: true,
    },
    optimization: {
      minimizer: [plugins.uglify],
      splitChunks: {
        cacheGroups: {
          vendor: {
            chunks: 'all',
            test: path.resolve(__dirname, 'node_modules'),
            name: 'vendor',
            enforce: true,
          },
        },
      },
    },
    resolve: {
      alias: {
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@': path.resolve(__dirname, 'src/app'),
      },
    },
  };
};
