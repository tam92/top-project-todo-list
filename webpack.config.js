const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        { // images
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
    ],
  },
  plugins: [  // añadimos el nodo con la configuración que queramos
      new HtmlWebpackPlugin({
          template: './src/index.html',
          inject: 'body',
      }),
    ],
};