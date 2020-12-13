const Discord = require('discord.js');
const db = require('quick.db');
const ms = require('parse-ms');

module.exports.run = async (bot, message, args) => {
	if (!message.content.startsWith('g-')) return;

	let user = message.author;

	let timeout = 86400000;
	let amount = 200;

	let daily = await db.fetch(`daily_${message.guild.id}_${user.id}`);

	if (daily !== null && timeout - (Date.now() - daily) > 0) {
		let time = ms(timeout - (Date.now() - daily));

		let timeEmbed = new Discord.MessageEmbed()
			.setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
			.setTitle('<a:gelinbug:773531406000455700> | Coleta Indisponível!')
			.setColor('#FF69B4')
			.setDescription(
				`Uma nova coleta estará liberada às **${time.hours}h ${time.minutes}m ${
					time.seconds
				}s**`
			);
		message.channel.send(timeEmbed).then(msg => msg.delete({ timeout: 21000 }));
	} else {
		var Num = Math.floor(Math.random() * 2200);
		let moneyEmbed = new Discord.MessageEmbed()
			.setTitle('☀️ | Coleta - Diária!')
			.setColor('#8A2BE2')
			.setThumbnail(message.author.displayAvatarURL())
			.setTimestamp()
			.setFooter(
				`Requisitado por: ${message.author.tag}`,
				message.author.displayAvatarURL({ dynamic: true })
			)
			.setImage(
				'https://cdn.discordapp.com/attachments/725763275752603652/776144710363775016/20201111_150124.gif'
			)
			.setDescription(
				`${
					message.author
				} Você coletou **${Num}** <:lua_dy:762067671402938388> luas.`
			);
		message.channel
			.send(moneyEmbed)
			.then(msg => msg.delete({ timeout: 37000 }));
		db.add(`money_${message.guild.id}_${user.id}`, `${Num}`);
		db.set(`daily_${message.guild.id}_${user.id}`, Date.now());
	}
};

module.exports.help = {
	name: 'daily',
	aliases: ['day']
};
