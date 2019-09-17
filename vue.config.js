module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/vue-to-do/" : "/",
  chainWebpack: config => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule.use("vue-svg-loader").loader("vue-svg-loader");
  },
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/colors.scss";`
      }
    }
  }
};
