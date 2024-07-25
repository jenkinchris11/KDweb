const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      fallback: {
        util: require.resolve("util/"),
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve("stream-browserify")
      },
    },
  },
})
