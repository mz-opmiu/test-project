const path = require('path');
const webpack = require('webpack');
const PrerenderSpaPlugin = require('prerender-spa-plugin');

const productionPlugins = [
  new PrerenderSpaPlugin({
    staticDir: path.join(__dirname, 'dist'),
    routes: ['/mimaskstick'],
    renderer: new PrerenderSpaPlugin.PuppeteerRenderer({
      renderAfterElementExists: '#app'
    })
  })
];

module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        data: `
              @import '@/scss/mixin/_background.scss';
              `
      }
    }
  },
  devServer: {
    port: 3000,
    proxy: {
      '^/api': {
        target: 'http://localhost:8080',
        secure: false
      }
    }
  },
  configureWebpack: config => {
    // 공통환경
    config.resolve.extensions = [...config.resolve.extensions, '*', '.js'];
    config.resolve.alias = {
      ...config.resolve.alias,
      jquery: 'jquery/dist/jquery.js',
      '@assets': '@/assets/',
      // '@components': path.resolve('@/components'),
      // '@views': path.resolve('@/views'),
      // '@styles': path.resolve('@/styles'),
      '@vendor': '@/js/vendor/',
      '@utils': '@/js/utils/',
      '@mixin': '@/mixin/'
    };

    if (process.env.NODE_ENV === 'production') {
      // 운영환경일때
      config.plugins.push(...productionPlugins);
    } else {
      // 기타환경 (ex: 개발,테스트..)
    }
  }
};
