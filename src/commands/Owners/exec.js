const { Command, Stopwatch, util } = require('klasa')

module.exports = class ExecCommand extends Command {
  constructor (...args) {
    super(...args, {
      aliases: ['ex'],
      permLevel: 10,
      guarded: true,
      description: 'Executes code inside a Shell',
      usage: '<code:str>'
    })
  }

  async run (message, [...code]) {
    const stopwatch = new Stopwatch().start()
    const result = await util.exec(code.join(' '), { timeout: 30000 })
      .catch(error => ({ stdout: null, stderr: error && error.message ? error.message : error }))
    stopwatch.stop()
    const output = result.stdout ? `**\`OUTPUT\`**\n\`\`\`prolog\n${result.stdout}\n\`\`\`` : ''
    const outerr = result.stderr ? `**\`ERROR\`**\n\`\`\`prolog\n${result.stderr}\n\`\`\`` : ''

    return message.send([output, outerr].join('\n'))
  }
}
