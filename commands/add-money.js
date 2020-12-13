const db = require('quick.db')
module.exports.run = async (client, message, args) => {
  await message.delete()
  if (message.author.id === '746007271259111534') {
    let money = args.slice(1).join(" ")
  const member = message.mentions.users.first()
  
  db.add(`money_${message.guild.id}_${member.id}`, `${money}`)


  message.channel.send(`<a:meninadoente:759439979864391712> | ${member} Você recebeu **${money}** <:lua_dy:762067671402938388> do desenvolvedor!`).then(msg => msg.delete({timeout: 10000}))
}} 