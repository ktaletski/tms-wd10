const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
  const styleLoaders = {
    production: MiniCSSExtractPlugin.loader,
    development: 'style-loader',
  };

  return {
    test: /\.module.css$/,
    exclude: /node_modules/,
    use: [
      {
        loader: styleLoaders[env], // Creates style nodes from JS strings
      },
      {
        loader: 'css-loader', // Translates CSS into CommonJS
        options: {
          modules: {
            localIdentName: '[name]__[local]___[hash:base64:5]',
          },
        },
      },
    ],
  };
};
