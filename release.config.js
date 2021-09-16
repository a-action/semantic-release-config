const config = require('./index')

const { plugins } = config

// publish to npm
plugins.splice(3, 0, '@semantic-release/npm')

module.exports = {
  plugins,
}
