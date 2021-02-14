import path from 'path'
import pluginTester from 'babel-plugin-tester'
import plugin from '.'

pluginTester({
  plugin,
  pluginName: 'perelandra-ui',
  snapshot: true,
  fixtures: path.join(__dirname, '__fixtures__'),
  babelOptions: require('../babel.config.js'),
})
