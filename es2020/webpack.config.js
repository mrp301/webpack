const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: `./src/index.js`,
  output: {
    path: `${__dirname}/public/dist/`,
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.scss/,
        // ローダーの処理対象から外すディレクトリ
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
       {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
              ]
            }
          }
        ]
      }
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
        $: 'jquery',
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    publicPath: '/dist/',
    watchContentBase: true,
    open: true,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
};
