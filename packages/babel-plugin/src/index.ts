import * as t from '@babel/types'

export default function (babel) {
  const varReplaceRegex = /(?<!var\(\s*)--([a-zA-Z\-_\d]+)/gm

  const replaceVars = {
    StringLiteral(path) {
      if (path.node.value.includes('--') && !path.node.value.includes('var')) {
        path.node.value = path.node.value.replaceAll(
          /--([a-zA-Z\-_\d]*)/g,
          'var(--$1)'
        )
      }
    },
  }

  const attributesToHoist = ['sx', 'variants', 'css', 'style']

  return {
    name: 'perelandra-ui',
    visitor: {
      JSXAttribute(path) {
        if (attributesToHoist.includes(path.node.name.name)) {
          path.traverse(replaceVars)
        }
      },
    },
  }
}
