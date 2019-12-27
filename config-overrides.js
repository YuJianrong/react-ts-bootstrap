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
  config => {
    function look4localIdentName(node) {
      if ('localIdentName' in node) {
        return node;
      }
      for (const key in node) {
        if (node[key] instanceof Object) {
          const n = look4localIdentName(node[key]);
          if (n) {
            return n;
          }
        }
      }
    }
    const node = look4localIdentName(config);
    node.modules = { localIdentName: node.localIdentName };
    delete node.localIdentName;
    return config;
  },
  enableEslintTypescript(),
);
