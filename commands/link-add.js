const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
	if (!message.member.hasPermission('KICK_MEMBERS'))
		return message.channel
			.send(
				`<a:alertA:727101012174962838> | <@${
					message.author.id
				}>, Você precisa ter a permissão de **EXPULSAR_MEMBROS** para poder utilizar este comando.`
			)
			.then(msg => msg.delete({ timeout: 15000 }));

	message.delete().catch();

	let titulo = args.join(' ');

	let embed = new Discord.MessageEmbed()
		.setColor('#FF11AC')
		.setTitle('<a:creio:757383684436394124> | Novo Link Gerado!')
		.setThumbnail(message.author.displayAvatarURL({ dynamic: true }))

		.addField('💻 ID do Bot:', `\`\`${titulo}\`\``)
		.addField(
			':link: Link do Bot:',
			`**[Clique aqui para adicionar o bot](https://discord.com/api/oauth2/authorize?client_id=${titulo}&permissions=65536&scope=bot)**`
		)
		.setFooter(
			`Enviado por: ${message.author.tag}`,
			message.author.displayAvatarURL()
		)
		.setTimestamp();

	message.channel.send(embed);
};
