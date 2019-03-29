var path = require('path')

module.exports = {
  entry: path.join(__dirname, './app/index.js'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader?cacheDirectory=true'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(jpg|jpeg|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'app/components/'),
      pages: path.resolve(__dirname, 'app/pages/'),
      utils: path.resolve(__dirname, 'app/utils/'),
      models: path.resolve(__dirname, 'app/models/'),
      images: path.resolve(__dirname, 'app/assets/images/'),
      styles: path.resolve(__dirname, 'app/styles/'),
    },
    extensions: ['.js', '.scss', '.css'],
  },
  devServer: {
    port: 8080,
    contentBase: path.join(__dirname, './dist'),
    historyApiFallback: true,
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: { '^/api': '' },
      },
    },
  },
  devtool: 'source-map',
}