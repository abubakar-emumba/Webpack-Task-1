const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = (_env, argv) => {
  const { mode } = argv

  let devtool
  let favicon

  if (mode === 'development') {
    devtool = 'source-map'
    favicon = 'src/assets/cog.png'
  }

  if (mode === 'production') {
    devtool = false
    favicon = 'src/assets/webpack.png'
  }

  return {
    entry: {
      bundle: path.resolve(__dirname, 'src/index.tsx'),
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js',
      clean: true,
      assetModuleFilename: '[name][ext]',
    },
    devtool,
    mode,
    devServer: {
      port: 8080,
      static: { directory: path.resolve(__dirname, 'dist') },
      hot: true,
      open: true,
      compress: true,
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.(ts|tsx)$/,
          loader: 'ts-loader',
        },
        {
          test: /.(s[ac]|c)ss$/i,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.ts', '.tsx'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'React TypeScript via Webpack',
        template: 'public/index.html',
        favicon,
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: 'public',
            to: '.',
            globOptions: {
              ignore: ['**/index.html'],
            },
          },
        ],
      }),
    ],
  }
}
