const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
	await message.delete();
	if (
		message.member.roles.cache.some(
			a => a.name === '「📋」・Verificadores ¦  ★★★'
		)
	) {
		if (message.channel.id === '780422989710884874') {
			let dono = await message.mentions.members.first();
			const bot = await message.mentions.members
				.filter(m => m.user.bot)
				.first();

			if (!bot)
				return message.channel
					.send(
						`<a:Ve_ErradoTKF:754787728104620182> | ${
							message.author
						}, Uso impróprio, utilize no formato abaixo:\n\> <a:flecha_branca:769145496639504428> **Exemplo**: g-remove \`@user\` \`@bot\` \`<motivo>\``
					)
					.then(m => m.delete({ timeout: 25000 }));
			const desc = await args.slice(2.3).join(' ');
			if (!desc)
				return message.channel
					.send(
						`<a:Ve_ErradoTKF:754787728104620182> | ${
							message.author
						}, Uso impróprio, utilize no formato abaixo:\n\> <a:flecha_branca:769145496639504428> **Exemplo**: g-remove \`@user\` \`@bot\` \`<motivo>\``
					)
					.then(m => m.delete({ timeout: 25000 }));
			const logs = client.channels.cache.find(
				channel => channel.id === '787028257677377606'
			);
			let embed = new Discord.MessageEmbed()
				.setTitle('<a:Desligado:772083231528976385> | Bot Recusado!')
				.setColor('FF11AC')
				.setImage('https://cdn.discordapp.com/attachments/770213824519077920/777281969586307102/231877588055202.gif')
				.setThumbnail(message.author.displayAvatarURL())
				.addField(
					'<:coroinha:761227142696402994> | Dono:',
					`<:seta2:758042050594603088>・**Tag**:\`${
						dono.user.tag
					}\`\n<:seta2:758042050594603088>・**ID**:\`${dono.user.id}\``
				)
				.addField(
					'<:Emoji:770327888960290816> | Bot:',
					`<:seta2:758042050594603088>・**Tag**: \`${
						bot.user.tag
					}\`\n<:seta2:758042050594603088>・**ID**: \`${bot.user.id}\``
				)
				.addField('<:EmojiStaff:773256326104743956> | Moderador:', message.author)
				.setTimestamp()
				.setFooter(
					`${message.guild.name}`,
					message.guild.iconURL({ dynamic: true })
				)
				.addField('<:Cfn_Review:773835013006557195> | Motivo:', desc);
			logs.send(`${dono}`, embed);
			let env = new Discord.MessageEmbed()
				.setTitle('<a:ping:772082378348036107> | Bot - Reprovado!')
				.setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
				.setColor('#FF11AC')
				.setDescription(
					`\> ${
						message.author
					}, Ação realizada com sucesso espero que o usuário tenha entendido o motivo e mude { \`${desc}\` } no bot para tentar adicionar novamente!`
				)
				.setTimestamp()
				.setFooter(
					`Requisitado por ${message.author.tag}`,
					message.author.displayAvatarURL({ dynamic: true })
				);
			message.channel.send(env).then(msg => msg.delete({ timeout: 35000 }));
			await bot.kick(desc);
		} else {
			return message.channel
				.send(
					`<a:atento:749663083676434593> **|** ${
						message.author
					}, **Para manter este servidor organizado use este comando apenas no canal** <#780422989710884874>`
				)
				.then(msg => msg.delete({ timeout: 15000 }));
		}
	} else {
		return message.channel
			.send(
				`<a:atento:749663083676434593> **|** ${
					message.author
				}, Você não tem **permissão suficiente** para usar este comando!`
			)
			.then(msg => msg.delete({ timeout: 25000 }));
	}
};
