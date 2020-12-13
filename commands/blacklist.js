const Discord = require('discord.js');
const db = require('quick.db');
module.exports.run = async (client, message, args) => {
	await message.delete();
	if (
		message.member.roles.cache.some(
			a => a.name === '「👮」・Protetores Da Gellinho ★'
		)
	) {
		let toggling = ['add', 'remove'];
		if (!toggling.includes(args[0])) {
			return message.channel
				.send(
					`<a:erro_gelin:754787728104620182> **|** ${
						message.author
					}, **Uso incorreto si fazer fazer isso novamente eu vou lhi banir**!`
				)
				.then(m => m.delete({ timeout: 25000 }));
		}
		if (!args[0])
			return message.channel
				.send(
					`<a:erro_gelin:754787728104620182> **|** ${
						message.author
					} Uso incorreto. Use o formato:\n\> **Exemplo**: g-\`blacklist\` <add/remove> @user <motivo>`
				)
				.then(msg => msg.delete({ timeout: 25000 }));
		if (args[0] === 'add') {
			let member = message.mentions.users.first();
			if (!member)
				return message.channel
					.send(
						`<a:erro_gelin:754787728104620182>  **|** ${
							message.author
						} Você não mencionou nenhum usuário para eu bloquear!`
					)
					.then(msg => msg.delete({ timeout: 25000 }));
			if (member.id === '746007271259111534') {
				message.member.kick();
				message.channel
					.send('Tentando banir meu paizinho osh.')
					.then(m => m.delete({ timeout: 25000 }));
			}
			await db.set(`Lock_${message.guild.id}`, member.id);
			let reason = args.slice(2).join(' ');
			if (!reason)
				return message.channel
					.send(
						`<a:erro_gelin:754787728104620182> **|** ${
							message.author
						} Você não informou o motivo da punição.`
					)
					.then(m => m.delete({ timeout: 25000 }));
			let ad = new Discord.MessageEmbed()
				.setTitle('<a:Desligado:772083231528976385> | Usuário - Bloqueado!')
				.addField('<:Users2:771715696635674674> Membro:', member)
				.setThumbnail(member.displayAvatarURL({ dynamic: true }))
				.addField('<:Cfn_Review:773835013006557195> Motivo:', reason)
				.setImage(
					'https://cdn.discordapp.com/attachments/770213824519077920/776163307589337098/tenor.gif'
				)
				.setTimestamp()
				.setFooter(
					`Requisitado por ${message.author.tag}`,
					message.author.displayAvatarURL({ dynamic: true })
				)
				.setColor('#9400D3');
			message.channel.send(ad).then(msg => msg.delete({ timeout: 44000 }));
			let aviso = new Discord.MessageEmbed()
				.setTitle('<a:Desligado:772083231528976385> | Membro Punido!')
				.addField(
					'<:Users2:771715696635674674> Usuário:',
					`<a:flecha_branca:769145496639504428> **Tag**: \`${
						member.tag
					}\`\n<a:flecha_branca:769145496639504428> **ID**: \`${member.id}\``
				)
				.setThumbnail(member.displayAvatarURL({ dynamic: true }))
				.addField(
					'<:coroinha:761227142696402994> Operador :',
					`<a:flecha_branca:769145496639504428> **Tag**: \`${
						message.author.tag
					}\`\n<a:flecha_branca:769145496639504428> **ID**: \`${
						message.author.id
					}\``
				)
				.addField('<:Cfn_Review:773835013006557195> Descrição:', reason)
				.setColor('#FF00FF')
				.setFooter(`${client.user.tag}`, client.user.displayAvatarURL())
				.setTimestamp();
			client.channels.cache.get('773831154989531166').send(aviso);
			client.channels.cache.get('776192643738238996').send(aviso);
		}
		if (args[0] === 'remove') {
			let member = message.mentions.users.first();
			if (!member)
				return message.channel
					.send(
						`<a:erro_gelin:754787728104620182> **|** ${
							message.author
						} Você não informou o membro!`
					)
					.then(m => m.delete({ timeout: 25000 }));
			await db.set(`Lock_${message.guild.id}`, member.id);
			let reason = args.slice(2).join(' ');
			if (!reason)
				return message.channel
					.send(
						`<a:erro_gelin:754787728104620182> **|** ${
							message.author
						} Qual o motivo dessa revira volta no caso, você não me disse hein!`
					)
					.then(m => m.delete({ timeout: 25000 }));
			let ad = new Discord.MessageEmbed()
				.setTitle('<a:Ativo:772082275621666816> | Usuário - Desbloqueado!')
				.addField('<:Users2:771715696635674674> Membro:', member)
				.setThumbnail(member.displayAvatarURL({ dynamic: true }))
				.addField('<:Cfn_Review:773835013006557195> Motivo:', reason)
				.setImage(
					'https://cdn.discordapp.com/attachments/770213824519077920/776163307589337098/tenor.gif'
				)
				.setTimestamp()
				.setFooter(
					`Requisitado por ${message.author.tag}`,
					message.author.displayAvatarURL({ dynamic: true })
				)
				.setImage(
					'https://cdn.discordapp.com/attachments/770213824519077920/776167327129272330/tenor_1.gif'
				)
				.setColor('#FF11AC');
			message.channel.send(ad).then(msg => msg.delete({ timeout: 44000 }));
			client.channels.cache.get('776192643738238996').send(ad);
		}
	}
};
