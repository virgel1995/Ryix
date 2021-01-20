const { Client } = require('klasa')

module.exports = () => {
  Client.defaultGuildSchema.add('minAccAge', 'integer', { default: 1800000 })
  Client.defaultUserSchema.add('TODOs', 'any', { array: true })
}
