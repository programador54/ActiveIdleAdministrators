const Discord = require('discord.js');
const db = require('quick.db');
module.exports.run = async (client, message, args) => {
  await message.delete()
	let user = message.mentions.users.first();
	if (!user) return message.channel.send(':x: **Usuário não informado**!').then(msg => msg.delete({timeout: 17000}));
	let valor = args.slice(1).join(' ');
	if (!valor) return message.channel.send(':x: **Valor não informado**!').then(msg => msg.delete({timeout: 17000}));
	const saldo = await db.fetch(
		`money_${message.guild.id}_${message.author.id}`
	);
	if (valor < 10) {
		return message.channel.send(`:x: **Saldo insuficiente**!`);
	}
	let embed = new Discord.MessageEmbed()
		.setTitle('<:Grana:772064017232953357> | Dinheiro Enviado')
		.setColor('#FF69B4')
		.setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
		.setDescription(
			`${
				message.author} pagou o membro ${user} com <:lua_dy:762067671402938388> **${valor}** Luas.`
		)
		.setTimestamp()
		.setFooter(
			`Requisitado por ${message.author.tag}`,
			message.author.displayAvatarURL({ dynamic: true })
		);
	message.channel.send(embed);
	db.add(`money_${message.guild.id}_${user.id}`, valor);
	db.subtract(`money_${message.guild.id}_${message.author.id}`, valor);
};
