const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {
  await message.delete()
	if (message.author.id === '746007271259111534') {
		let member = message.mentions.members.first();
		const embed = new Discord.MessageEmbed()
			.setAuthor(
				`${member.user.tag}`,
				member.user.displayAvatarURL({ dynamic: true })
			)
			.setTitle('<a:estrelA:763043129892143115> Novo Pinguim VIP')
			.addField(
				'<:coroinha:761227142696402994>・Representante:',
				message.author
			)
			.addField('<:Users2:771715696635674674>・Usuário:', member)
			.addField(
				'<:vipzin:763043205611651092>・Tag Adicionada:',
				`<@&780422813148119100>`
			)
			.setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
			.setImage(
				'https://cdn.discordapp.com/attachments/761784704109379625/774301177902137344/tenor_3.gif'
			)
			.setColor('#FF11AC')
			.setTimestamp()
			.setFooter(
				`${message.guild.name}`,
				message.guild.iconURL({ dynamic: true })
			);
		message.channel.send(embed).then(msg => msg.delete({ timeout: 47000 }));
		await member.roles.add('780422813148119100');
	}else {
	   return message.channel.send(`:x: **|** ${message.author}, Você não é digno de usar este comando!`).then(msg => msg.delete({timeout: 17000}))
	} 
};
