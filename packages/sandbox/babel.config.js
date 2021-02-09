module.exports = function (api) {
  api.cache(true)

  const presets = ['@babel/preset-env', '@babel/preset-typescript']
  const plugins = [
    '@babel/plugin-proposal-optional-chaining',
    '@perelandra-ui/babel-plugin',
  ]

  return {
    presets,
    plugins,
  }
}
