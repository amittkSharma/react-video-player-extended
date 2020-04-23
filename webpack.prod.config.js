const pkg = require('./package.json')
const path = require('path')
const libraryName = pkg.name

module.exports = {
  devtool: 'eval-source-map',
  entry: {
    index: './src/index.tsx',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: './dist',
    filename: 'index.js',
    sourceMapFilename: 'index.map',
    library: libraryName,
    libraryTarget: 'umd',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.ts|.tsx|.js?$/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: ['url-loader'],
      },
    ],
  },
  plugins: [],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
  },
}
