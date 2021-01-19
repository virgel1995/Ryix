const { Event } = require('klasa')
const wait = require('wait')

module.exports = class ReadyEvent extends Event {
  constructor (...args) {
    super(...args, {
      name: 'ready',
      enabled: true,
      event: 'ready',
      once: false
    })
  }

  async run () {
    await wait(5000)
    this.client.user.setActivity(`${this.client.config.constants.prefix}help || Version: ${this.client.version}`)
  }
}
