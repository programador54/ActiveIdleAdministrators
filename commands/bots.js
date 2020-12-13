const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {
	message.delete();
	const staff = message.author;
	if (
		message.member.roles.cache.some(
			a => a.name === '「📋」・Verificadores ¦  ★★★'
		)
	) {
		const p = message.guild.roles.cache.get('780422865216077855');
		let member = message.mentions.members.first();
		member.roles.add('780422885411913738');
		member.roles.remove(p);
		let embed = new Discord.MessageEmbed()
			.setTitle('<a:Cfn_a_carregar:775316350163615764> | Listando Bots')
			.addField('🤖 Bot:', member)
			.addField('🔨 Moderador:', staff)
			.addField('Cargo Removido:', `\`${p.name}\``)
			.addField('Cargo Adicionado:', '<@&780422865216077855> ')
			.setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
			.setColor('#FF0000');
		message.channel.send(embed).then(message => {
			setTimeout(function() {
			let embed2 = new Discord.MessageEmbed()
				embed2.setColor('#FF11AC');
				embed2.setDescription(
					`<a:certo:749385623823188092>  **|** Ação realizada com sucesso.`
				);
				message.edit(embed2).then(msg => msg.delete({ timeout: 25000 }));
			}, 5000);
		});
	}
};
