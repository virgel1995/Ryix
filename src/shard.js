require('dotenv/config')
const { ShardingManager } = require('discord.js')
const { join } = require('path')

const manager = new ShardingManager(join(__dirname, 'main.js'), {
  token: process.env.bottoken,
  totalShards: 'auto'
})

manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`))
manager.spawn()
