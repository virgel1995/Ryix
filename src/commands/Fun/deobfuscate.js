/* eslint-disable no-tabs */
const { Command } = require('klasa')
const { remove } = require('confusables')

module.exports = class extends Command {
  constructor (...args) {
    super(...args, {
      usage: '<str:str{1,2000}>',
      description: 'Deobfuscate a string which has confusable unicode characters.'
    })
  }

  async run (msg, [str]) {
    return msg.send(remove(str))
  }
}
