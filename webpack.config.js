var path = require('path');
module.exports = {
  entry: './src/main.js',
  //定义webpack输出的文件，我们在这里设置了 让打包后生成的文件放在dist文件夹下的build.js文件中
  output: {
    path: './public/js',
    publicPath: 'public/js/',
    filename: 'build.js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue': 'vue/dist/vue.common.js',
      'public': path.resolve(__dirname, '../public/images'),
    }
  },
  module: {
    loaders: [
      //转化ES6语法
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader'
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader'
      }
    ]
  }
};