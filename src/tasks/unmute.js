/* eslint-disable no-tabs */
const { Task } = require('klasa')

/*

	This is to be used with the mute command located in
	/commands/Moderation/mute.js

*/

module.exports = class extends Task {
  async run ({ guild, user }) {
    const _guild = this.client.guilds.cache.get(guild)
    if (!_guild) return
    const member = await _guild.members.fetch(user).catch(() => null)
    if (!member) return
    await member.roles.remove(_guild.settings.roles.muted)
  }
}
