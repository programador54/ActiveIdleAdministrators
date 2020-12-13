const Discord = require('discord.js');
const db = require('quick.db');
module.exports.run = async (client, message, args) => {
	await message.delete();
	if (
		message.member.roles.cache.some(
			a => a.name === '「📋」・Verificadores ¦  ★★★'
		)
	) {
		let user = message.mentions.users.first();
		if (!user) return message.channel.send(':x: Você não informou nenhum membro!').then(msg => msg.delete({timeout: 25000}))
		await db.delete(`prefix_${message.guild.id}_${user.id} `);
		await db.delete(`ID_${user.id}`);
		let embed = new Discord.MessageEmbed()
			.setTitle('<a:Ativo:772082275621666816> | Resete Realizado!')
			.setThumbnail(user.displayAvatarURL({ dynamic: true }))
	    .setImage('https://media1.tenor.com/images/5101184297bb23c330bfa7337ff94259/tenor.gif')
			.setTimestamp()
			.setFooter(
				`Requisitado por ${message.author.tag}`,
				message.author.displayAvatarURL({ dynamic: true })
			)
			.setDescription(
				`Os dados de registro de bot do membro ${user} foram zerados!`
			)
			.setColor('#FF11AC');
		message.channel.send(embed).then(msg => msg.delete({ timeout: 34000 }));
	}
};
