const Discord = require("discord.js");

module.exports = {
  async run (client, message, args) {
  //!say Hi!
  //Hi
const channel = client.channels.cache.find(channel => channel.id === '780423004924411944')

  let botmessage = args.join(" ");
if(!botmessage) return message.channel.send(`<a:Ve_ErradoTKF:754787728104620182> | Você não informou nenhum texto para ser enviado ${message.author}!`).then(msg => msg.delete({timeout: 5000}));
  message.delete().catch();
  let emb = new Discord.MessageEmbed() 
  .setAuthor(`➕ | Novo wiki, feito por: ${message.author.tag}`)
  .setDescription(`\`\`\`${botmessage}\`\`\``) 
  .setThumbnail(message.author.avatarURL) 
  .setColor("#9370DB") 
 .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
  .setFooter(`(🔼) Gostou | (🔽) Não gostou`)
  
  const embed2 = new Discord.MessageEmbed()
  embed2.setTitle('<a:Ativo:772082275621666816> | Sua wiki foi adicionada!') 
  embed2.setDescription(`Olá ${message.author}, Sua wiki foi enviada no canal <#780423004924411944> com sucesso!`)
 embed2.setThumbnail(message.author.displayAvatarURL({dynamic: true}))
 embed2.setTimestamp() 
  embed2.setFooter(`Requisitado por ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))
 embed2.setColor('#8A2BE2')
  message.channel.send(embed2).then(msg => msg.delete(15000))
  channel.send(emb).then(async function (message) {
		await message.react("🔼")
		await message.react("🔽")
  }) 
                        
}
}
module.exports.help = {
  name: "say"
}
