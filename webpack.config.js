const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  entry: {
    path: './src/main.js',
  },
  devServer: {
    port: 7002,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/img/[hash][ext]',
        },
      },
      {
        test: /\.svg/,
        type: 'asset/inline',

        // webpack5 以下版本才支持这个写法
        // use:['svg-inline-loader']
      }
    ],
  },
  output: {
    filename: 'assets/js/[name].[contenthash:6].js',
    path: path.resolve(__dirname, './dist'),
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html'),
    }),
    new DefinePlugin({
      __VUE_PROD_DEVTOOLS__: false,
      __VUE_OPTIONS_API__: false,
    }),
    new ModuleFederationPlugin({
      name: "AppTwo", // 暴露出去的模块名
      filename: "remoteEntry.js", // 构建出来的文件名
      remotes: {
        AppOne: 'AppOne@http://192.168.3.61:7001/remoteEntry.js' // 引用
      }
    }),
  ],
}