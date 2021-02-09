import * as t from '@babel/types'

export default function (babel) {
  return {
    name: 'perelandra-ui',
    visitor: {
      JSXAttribute(path) {
        if (!path.node || path.node.name.name !== 'sx') return

        if (t.isJSXExpressionContainer(path.node.value)) {
          if (t.isObjectExpression(path.node.value.expression)) {
            console.log(path)
          }
        }
      },
    },
  }
}
