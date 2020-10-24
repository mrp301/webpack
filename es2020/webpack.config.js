module.exports = {
  // 圧縮する時はproductionにする。
  mode: 'development',
  entry: `./src/index.js`,
  output: {
    path: `${__dirname}/dist`,
    filename: "main.js"
  },
  devServer: {
    contentBase: `dist`,
    open: true,
  },
};