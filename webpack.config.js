const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlguins = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = (env, argv) => ({
  entry: {
    main: { import: ['./src/main.ts'], dependOn: 'vendors' },
    vendors: { import: ['vue', 'vue-router'] }
  },
  mode: argv.mode,
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        include: path.resolve(__dirname, 'src'), // 缩小ts编译范围，提高构建速度
        use: [
          {
            loader: 'babel-loader',

          },
          {
            loader: 'ts-loader',
            options: {
              appendTsxSuffixTo: [/\.vue$/], // 支持vue中使用tsx语法
            },
          },
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader',
      },
      {
        test: /\.(css|less)$/,
        use: [
          argv.mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'less-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.(png|jpg|svg|gif)$/i,
        type: 'asset/resource',
        parser: {
          dataUrlCondition: {
            maxSize: 100 * 1024,
          },
        },
        generator: {
          filename: 'images/[name][ext]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlguins({
      template: './public/index.html',
      title: 'popular application in Apple',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    new VueLoaderPlugin(),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all' // 支持同步与异步代码分割
    },
    runtimeChunk: true, // 减少entry chunk体积，提高页面加载速度
  },
  devServer: {
    port: 8080,
    host: 'localhost',
    allowedHosts: 'all',
    open: true,
    historyApiFallback: true,
    proxy: {
      '/hk': {
        target: 'https://itunes.apple.com',
        changeOrigin: true,
        pathRewrite: {
          '^/hk': '/hk',
        },
      },
    },
  },
});
