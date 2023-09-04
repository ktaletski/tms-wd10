const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (template) => (env) => {
  const defaultConfig = new HtmlWebpackPlugin({
    hash: true,
    filename: 'index.html',
    template,
  });

  const plugin = {
    production: defaultConfig,
    development: defaultConfig,
  };

  return plugin[env];
};
