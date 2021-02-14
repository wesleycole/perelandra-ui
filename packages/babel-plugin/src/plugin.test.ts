import path from 'path'
import pluginTester from 'babel-plugin-tester'
import plugin from '.'

pluginTester({
  plugin,
  pluginName: '@perelandra-ui',
  filename: __filename,
  babelOptions: require('./babel.config.js'),
  fixtures: path.join(__dirname, '__fixtures__'),
})
