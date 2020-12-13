const Discord = require('discord.js');
const db = require('quick.db');
module.exports.run = async (client, message, args) => {
  await message.delete()
const coins = await db.fetch(`money_${message.guild.id}_${message.author.id}`);
	if (coins < 1200) return message.channel.send(`<a:atento:749663083676434593> | ${message.author}, Seu saldo de luas não é suficiente para essa requisição!`).then(msg => msg.delete({timeout: 10000}));
	const name = args.join(" ")
	if (!name) return message.channel.send(`<a:erro_gelin:754787728104620182>| ${message.author}, Uso correto:\n\>  **Exemplo**: g-comprar-nick <novo apelido>`).then(msg => msg.delete({timeout: 10000}))
	
	message.member.setNickname(`${name}`);
	const embed = new Discord.MessageEmbed()
	.setTitle('<a:creio:757383684436394124> | Seu apelido foi alterado!')
	.addField('👥・Usuário:', `${message.author}`)
	.addField('📝・Novo apelido:', `\`${name}\``)
	.setThumbnail(message.author.displayAvatarURL())
	.setFooter(`${message.guild.name}`, client.user.displayAvatarURL())
	.setColor("#FF11AC")
	.setTimestamp()
	message.channel.send(embed).then(msg => msg.delete({timeout: 15000}))
	db.subtract(`money_${message.guild.id}_${message.author.id}`, 1200)
       
};
