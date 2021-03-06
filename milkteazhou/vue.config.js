const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

module.exports = {
  outputDir: 'dist',
  publicPath: './',//process.env.NODE_ENV === 'production' ? '/vant-demo/' : '/',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          // autoprefixer(),
          pxtorem({
            rootValue: 37.5,
			minPixelValue:1,
            propList: ['*']
          })
        ]
      }
    }
  }
};