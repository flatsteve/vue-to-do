module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/vue-to-do/" : "/",
  chainWebpack: (config) => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule.use("vue-svg-loader").loader("vue-svg-loader");
  },
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        additionalData: `@import "@/styles/colors.scss"; @import "@/styles/responsive.scss";`,
      },
    },
  },
  pwa: {
    workboxOptions: {
      skipWaiting: true,
    },
  },
};
