const sassResourcesLoader = require('craco-sass-resources-loader');
const path = require('path');

module.exports = {
  mode: "development",
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, 'src/components/'),
      "@pages": path.resolve(__dirname, 'src/pages/'),
      "@assets": path.resolve(__dirname, 'src/assets/'),
    }
  },
  output: {
    path: __dirname
  },
  plugins: [
    {
      plugin: sassResourcesLoader,
      options: {
        resources: './src/scss/style.scss',
      },
    },
  ]
};