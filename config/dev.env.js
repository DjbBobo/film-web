'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  ADMIN_ROOT: '"/admin"',
  AUTH_ROOT: '"/auth"'
})
