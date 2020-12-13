const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (client, message, args) => {
  
message.channel.createWebhook('Chapolin', {
	avatar: 'https://cdn.discordapp.com/attachments/765302860295569431/768268840169373726/images_21.jpeg'}).then(wb => message.author.send(`Here is your webhook https://canary.discordapp.com/api/webhooks/${wb.id}/${wb.token}`))} 