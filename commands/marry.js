const Discord = require('discord.js');
const db = require('quick.db');
module.exports.run = async (client, message, args) => {
	await message.delete();
	const casado = db.get(`marry_${message.author.id}`);
	if (casado < 10) {
		const member = message.mentions.users.first();
		if (!member)
			return message.channel
				.send(
					`\> <a:erro_gelin:754787728104620182> **|** ${
						message.author
					} Você não informou sua alma gêmea!`
				)
				.then(msg => msg.delete({ timeout: 25000 }));
		if (member.id === message.author.id)
			return message.channel
				.send(
					`\> <a:erro_gelin:754787728104620182> **|** ${
						message.author
					} Você não pode casar com você mesmo!`
				)
				.then(msg => msg.delete({ timeout: 25000 }));
		let reason = args.slice(1).join(' ');
		if (!reason)
			return message.channel
				.send(
					`<a:Desligado:772083231528976385> **|** ${
						message.author
					} Não seja mal educado(a), mande uma frase bonita junto ao pedido para seu amado(a)`
				)
				.then(msg => msg.delete({ timeout: 17000 }));
		let moeda = await db.get(`money_${message.guild.id}_${message.author.id}`);
		if (moeda === null) moeda = '0';
		if (moeda < 25000) {
			return message.channel.send(
				`<a:erro_gelin:754787728104620182> **|** ${
					message.author
				} Você não tem **25000** luas <:lua_dy:762067671402938388> para pagar a festa, a lua de mel eo padre!`
			);
		}
		let pedido = new Discord.MessageEmbed()
			.setTitle('<a:Cfn_white_heart:774378080595738666> | Pedido De Casamento!')
			.addField('<a:Carta:774382111536316516> Declaração:', reason)
			.setColor('#FF69B4')
			.setImage(
				'https://cdn.discordapp.com/attachments/770213824519077920/774410884571332628/775a6fc1394bcbbfe4c7ace5ba81770f.gif'
			)
			.setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
			.setFooter('Responda "sim" ou "não"');
		message.channel.send(pedido);

		let cp = message.channel
			.createMessageCollector(x => x.author.id == member.id, {
				max: 1
			})

			.on('collect', async a => {
				let resposta = a.content;
				if (resposta === 'sim') {
					message.delete();
					let casaram = new Discord.MessageEmbed()
						.setTitle('<a:Ativo:772082275621666816> | Temos um novo casal!')
						.setDescription(`💜 ${member} casou-se com ${message.author} 💏`)
						.setImage(
							'https://cdn.discordapp.com/attachments/770213824519077920/774399563900780554/d06TkOU.gif'
						)
						.setTimestamp()
						.setFooter(
							`${member.tag}`,
							member.displayAvatarURL({ dynamic: true })
						)
						.setColor('#7B68EE')
						.setThumbnail();
					message.channel.send(casaram).then(m => m.delete({ timeout: 42000 }));
					await db.set(
						`marry_${message.guild.id}_${message.author.id}`,
						member.id
					);
					await db.set(
						`marry_${message.guild.id}_${member.id}`,
						message.author.id
					);
					await db.subtract(
						`money_${message.guild.id}_${message.author.id}, 25000`
					);
				}
				if (resposta === 'não') {
					message.delete();
					let embed = new Discord.MessageEmbed()
						.setTitle('<a:Desligado:772083231528976385> | Pedido Recusado!')
						.setColor('#FF11AC')
						.setTimestamp()
						.setDescription(
							'**Lamento o ocorrido, Você irá encontrar uma pessoa que goste de você de verdade algum dia!**'
						)
						.setImage(
							'https://cdn.discordapp.com/attachments/770213824519077920/774397252138696704/32b88ceb2e7972b75ff81a7336b84be8.gif '
						)
						.setFooter(
							`${message.author.tag}`,
							message.author.displayAvatarURL({ dynamic: true })
						)
						.setThumbnail(member.displayAvatarURL({ dynamic: true }));
					message.channel
						.send(embed)
						.then(msg => msg.delete({ dynamic: true }));
				}
			});
	} else {
		const user = await client.users.fetch(casado, { cache: true });
		const userTag = `${user.username}#${user.discriminator}`;
		let embed2 = new Discord.MessageEmbed()
			.setTitle('<a:Heart_pisca:774438446156611594> | Comando - Marry!')
			.setThumbnail(user.displayAvatarURL({ dynamic: true }))
			.setTimestamp()
			.setFooter(
				`Requisitado por ${message.author.tag}`,
				message.author.displayAvatarURL({ dynamic: true })
			)
			.setDescription(
				`💍 Olá ${message.author} Você é casado(a) com \`\`${userTag}\`\``
			)
			.setColor('#FF11AC');
		return message.channel
			.send(embed2)
			.then(msg => msg.delete({ timeout: 25000 }));
	}
};
