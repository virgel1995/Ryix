/* eslint-disable no-undef */
const { PermissionLevels } = require('klasa')

module.exports = new PermissionLevels()
  .add(0, () => true)
  .add(6, ({ guild, member }) => guild && member.permissions.has(['MANAGE_GUILD', 'ADMINISTRATOR']), { fetch: true })
  .add(7, ({ guild, member }) => guild && member === guild.owner, { fetch: true })
  .add(9, ({ author, client }) => client.owners.has(author), { break: true })
  .add(10, ({ author, client }) => client.owners.has(author))
