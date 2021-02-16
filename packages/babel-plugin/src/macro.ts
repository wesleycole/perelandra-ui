const { createMacro } = require('babel-plugin-macros')

function myMacro({ references, state, babel }) {
  // `state` is the second argument you're passed to a visitor in a
  // normal babel plugin. `babel` is the `@babel/core` module.
  // do whatever you like to the AST paths you find in `references`.
  // open up the console to see what's logged and start playing around!
  const { types: t } = babel
  console.log({ babel })
  // references.default refers to the default import (`myMacro` above)
  // references.JSXMacro refers to the named import of `JSXMacro`
  const { JSXMacro = [], default: defaultImport = [] } = references

  defaultImport.forEach((referencePath) => {
    console.log(referencePath)
    if (referencePath.parentPath.type === 'TaggedTemplateExpression') {
      console.log(
        'template literal contents',
        referencePath.parentPath.get('quasi')
      )
    } else if (referencePath.parentPath.type === 'CallExpression') {
      if (referencePath === referencePath.parentPath.get('callee')) {
        console.log(
          'function call arguments (as callee)',
          referencePath.parentPath.get('arguments')
        )

        referencePath.parentPath.traverse({
          // import traversal from non-macro plugin
          Identifier(path) {
            if (path !== referencePath) {
              console.log(path.node.name)
            }
          },
        })

        referencePath.parentPath.replaceWith(
          t.stringLiteral('todo replace with object value')
        )
      } else if (
        referencePath.parentPath.get('arguments').includes(referencePath)
      ) {
        console.log(
          'function call arguments (as argument)',
          referencePath.parentPath.get('arguments')
        )
      }
    } else {
      // throw a helpful error message
    }
  })

  JSXMacro.forEach((referencePath) => {
    if (referencePath.parentPath.type === 'JSXOpeningElement') {
      console.log('jsx props', {
        attributes: referencePath.parentPath.get('attributes'),
        children: referencePath.parentPath.parentPath.get('children'),
      })
    } else {
      // throw a helpful error message
    }
  })
}

export default createMacro(myMacro)
