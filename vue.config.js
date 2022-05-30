module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://120.157.126.114/'
      },
      '^/jpeg/': {
        target: 'http://120.157.126.114/'
      }
    }
  }
}
