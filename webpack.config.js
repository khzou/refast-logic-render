var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index.js',
    library: 'LogicRender',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        include: __dirname + '/src'
      }
    ]
  },
  externals: {
    react: {
      root: 'React',
      var: 'React',
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
    }
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
  resolve: {
    extensions: ["", ".js", ".jsx"]
  }
};
