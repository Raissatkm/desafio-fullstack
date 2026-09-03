const knex = require('knex');
const { config } = require('./config.js');

exports.conn = knex(config)
