const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  devServer: {
    proxy: {
      '/api': {
        target: 'https://localhost:7012',
        changeOrigin: true,
        secure: false
      }
    }
  },
  transpileDependencies: true
});
