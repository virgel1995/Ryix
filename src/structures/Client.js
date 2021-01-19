const { KlasaClient } = require('klasa')
require('dotenv/config')
const { join } = require('path')
const { version } = require(join(__dirname, '..', '..', 'package.json'))
const permissionLevels = require(join(__dirname, 'PermissionLevels.js'))
const defaultSchema = require(join(__dirname, 'defaultSchema.js'))
const {
  bottoken: bot,
  prefix,
  wolf
} = process.env

class RyixClient extends KlasaClient {
  constructor (ops) {
    super({
      ...ops,
      prefix,
      permissionLevels,
      owners: ['697377187808149564'],
      providers: { default: 'sqlite' },
      commandEditing: true,
      readyMessage: readyClient => [
        '-----------------------------------------------------------------------------',
        `Shard ID:              ${readyClient.shard.id}`,
        `Server Count:          ${readyClient.guilds.cache.size}`,
        `Channel Count:         ${readyClient.channels.cache.size}`,
        `User Count:            ${readyClient.users.cache.size}`,
        '-----------------------------------------------------------------------------'
      ],
      presence: { activity: { name: 'Loading...', type: 'PLAYING' } }
    })

    defaultSchema()

    this.version = version
    this.config = {
      token: {
        bot,
        wolf
      },
      constants: {
        prefix
      }
    }
  }
}

module.exports = RyixClient
