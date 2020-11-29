const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: `./src/index.js`,
  output: {
    path: `${__dirname}/dist`,
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.scss/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: false,
            }
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
        $: 'jquery',
    }),
  ],
  devServer: {
    publicPath: `/dist/`,
    contentBase: path.join(__dirname, 'public'),
    watchContentBase: true,
    open: true,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
};