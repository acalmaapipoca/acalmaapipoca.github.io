module.exports = {
  outputDir: 'acalmaapipoca.github.io',
  // publicPath: 'minblogdemo',
  devServer: {
    disableHostCheck: true
  },
  pwa: {
    workboxOptions: {
      skipWaiting: true
    }
  }
}