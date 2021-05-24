const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: `./src/index.js`,
  output: {
    path: `${__dirname}/public/dist/`,
    filename: 'main.js'
  },
  module: {
    rules: [
      // sass
      {
        test: /\.scss/,
         // ローダーの処理対象から外すディレクトリ
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false,
            }
          },
          'sass-loader',
        ],
      },
      // 指定なしの場合es5に変換される
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
  target: ['web', 'es5'],
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
