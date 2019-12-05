/* eslint-disable */
const {
  override,
  fixBabelImports,
  addLessLoader,
  enableEslintTypescript,
  // addWebpackPlugin
} = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      // "@primary-color": "#1DA57A",
      'primary-color': '#2DA57A',
      'link-color': '#2DA57A',
      'border-radius-base': '2px',
    },
  }),
  enableEslintTypescript(),
);
