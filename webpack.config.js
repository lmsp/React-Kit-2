const path = require('path')
const webpack = require('webpack')
const HappyPack = require('happypack')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const isDebug = !process.argv.includes('-p')

// Development
const webpackDevServerPort = 8080
const browserSyncProxyPort = 3000
const publicPathDev = '/'

// Production
const publicPathProd = '/'

let config = {
  plugins: [
    new HappyPack({
      id: 'images',
      cache: true,
      loaders: [
        {
          loader: 'url-loader'
        }
      ],
      threads: 4
    }),
    new HappyPack({
      id: 'jsx',
      cache: true,
      loaders: [
        {
          loader: 'react-hot-loader!babel-loader'
        }
      ],
      threads: 4
    }),
    new HtmlWebpackPlugin({
      template: './dist/index.template.html',
      inject: true
    })
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        use: 'happypack/loader?id=images'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'happypack/loader?id=jsx'
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: isDebug ? publicPathDev : publicPathProd,
    filename: isDebug ? 'bundle.js' : 'bundle.[hash].js'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  devtool: isDebug ? 'source-map' : false
}

if (isDebug) {
  config.entry = [
    'webpack-dev-server/client?http://localhost:' + webpackDevServerPort,
    'webpack/hot/only-dev-server',
    './src/index.js'
  ]
  config.plugins.push(
    new BrowserSyncPlugin(
      {
        port: browserSyncProxyPort,
        proxy: 'localhost:' + webpackDevServerPort
      },
      // plugin options
      {
        // prevent BrowserSync from reloading the page
        // and let Webpack Dev Server take care of this
        reload: false
      }
    )
  )
  config.module.rules.push({
    test: /\.js$/,
    use: ['source-map-loader'],
    enforce: 'pre'
  })
} else {
  config.entry = './src/index.js'
  config.plugins.push(
    new CleanWebpackPlugin(['dist'], {
      root: __dirname,
      exclude: ['index.template.html', 'bundle.js', 'bundle.js.map']
    })
  )
  config.plugins.push(new webpack.optimize.UglifyJsPlugin())
}

module.exports = config
