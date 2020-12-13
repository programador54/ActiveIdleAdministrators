const Discord = require('discord.js');
const db = require('quick.db');
module.exports.run = async (client, message, args) => {
	await message.delete();
	let member = await db.fetch(`money_${message.guild.id}_${message.author.id}`);
	if (member < 10) {
		return message.channel.send(':x: **Saldo insuficiente**!');
	}

	let embed = new Discord.MessageEmbed()
		.setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
		.setTitle('<a:grana:762830762189127720> | Depósito Realizado')
		.setTimestamp()
		.setColor('#FF69B4')
		.setFooter(
			`Requisitado por ${message.author.tag}`,
			message.author.displayAvatarURL({ dynamic: true })
		)
		.setDescription(
			`Você depositou <:lua_dy:762067671402938388> **${
				args[0]
			}** luas em seu potinho.`
		);
	message.channel.send(embed);
	db.subtract(`money_${message.guild.id}_${message.author.id}`, args[0]);
	db.add(`cofre_${message.author.id}`, args[0]);
};
