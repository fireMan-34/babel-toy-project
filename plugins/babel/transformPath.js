
/**
 * 简易转换 babel 导入路径插件
 * @param {import('@babel/core')} babel 
 * @returns {import('@babel/core'.PluginObj)}
*/
module.exports = function (babel) {
  /**
   * types is a createNode
  */
 const { types } = babel;
 
 const { join } = require('path');
  const fs = require('fs');
  const node_modulePackages =  fs.readdirSync(join(__dirname, '../../node_modules'));

  return {
    visitor: {
      ImportDeclaration (path, state) {
        if (!path.node.loc) {
          return;
        }
        
        if (path.node.source.type === 'StringLiteral' && node_modulePackages.includes(path.node.source.value)) {
          path.node.source.value = `../node_modules/${path.node.source.value}/umd/${path.node.source.value}.production.min.js`;

          path.replaceWith(
            types.importDeclaration(
              path.node.specifiers,
              path.node.source,
            )
          );
        }
      },
    }
  }
};