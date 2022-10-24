const path = require("path");
// const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    // {
    //   plugin: CracoLessPlugin,
    //   options: {
    //     lessLoaderOptions: {
    //       lessOptions: {
    //         modifyVars: { '@primary-color': 'red' },
    //         javascriptEnabled: true,
    //       },
    //     },
    //   },
    // },
  ],
  webpack: {
    alias: {
      "@": path.resolve("src")
    }
  }
};