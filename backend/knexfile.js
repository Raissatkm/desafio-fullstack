// Update with your config settings.
const { config } = require('./src/lib/query-builder/config')
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    ...config
  },

  staging: {
    ...config
  },

  production: {
    ...config
  }

};
