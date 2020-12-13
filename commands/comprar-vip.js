const Discord = require('discord.js');
const db = require('quick.db');

module.exports.run = async (client, message, args) => {
	await message.delete();
	const money = await db.fetch(
		`money_${message.guild.id}_${message.author.id}`
	);

	if (money < 2200)
		return message.channel
			.send(
				`<a:atento:749663083676434593> | ${
					message.author
				}, Seu saldo de luas não é suficiente para essa requisição!`
			)
			.then(msg => msg.delete({ timeout: 10000 }));

	const vip = message.guild.roles.cache.get('780422813148119100');

	message.member.roles.add(vip);

	const embed = new Discord.MessageEmbed()
		.setTitle('<a:star:763043129892143115> | VIP - ADQUERIDO')
		.addField('💳・Usuário:', message.author)
		.setColor('#FF1493')
		.setTimestamp()
		.setThumbnail('https://cdn.discordapp.com/attachments/758040540351824002/763046201628819456/20201006_113237.gif')
		.setFooter(`${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))
		.addField(
			'<:vipzin:763043205611651092>・Cargo VIP:',
			`<@&780422813148119100>`
		);
	message.channel.send(embed).then(msg => msg.delete({ timeout: 10000 }));
	db.subtract(`money_${message.guild.id}_${message.author.id}`, 2200)
       
};
