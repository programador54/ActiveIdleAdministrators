const db = require('quick.db')
module.exports.run = async (client, message, args) => {
  const id = db.fetch(`Bot_${message.author.id}`)
  message.channel.send(`${id}`)
} 