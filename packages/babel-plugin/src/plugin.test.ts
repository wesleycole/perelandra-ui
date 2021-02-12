import pluginTester from 'babel-plugin-tester'
import plugin from '.'

pluginTester({
  plugin: plugin,
  pluginName: 'perelandra-ui',
  snapshot: true,
  tests: [{ code: '"hello";' }],
})
