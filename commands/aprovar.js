const Discord = require('discord.js');
const db = require('quick.db');
module.exports.run = async (client, message, args) => {
	await message.delete();

	if (
		message.member.roles.cache.some(
			a => a.name === '「📋」・Verificadores ¦  ★★★'
		)
	) {
		if (message.channel.id === '780422989710884874') {
			let dono = await message.mentions.members.first(2)[0];
			if (!dono)
				return message.channel.send(
					`<a:Ve_ErradoTKF:754787728104620182> **|** ${
						message.author
					} Uso impróprio, utilize no formato abaixo:\n\> <a:flecha_branca:769145496639504428> **Exemplo**: g-aprovar \`@user\` \`@bot\``
				);
			let bot3 = await message.mentions.members.first(2)[1];
			if (!bot3)
				return message.channel.send(
					`<a:Ve_ErradoTKF:754787728104620182> **|** ${
						message.author
					} Uso impróprio, utilize no formato abaixo:\n\> <a:flecha_branca:769145496639504428> **Exemplo**: g-aprovar \`@user\` \`@bot\``
				);
			let Nick = await db.fetch(`prefix_${message.guild.id}_${dono.user.id}`);

			let usuário = await client.users.fetch(bot3.user.id, { cache: true });
			const userTag = `${usuário.username}#${usuário.discriminator}`;
			if (Nick === null) Nick = '$';
			let reason = args.slice(2.3).join(' ');
			if (!reason) reason = 'Nada informado';
			const staff = message.author;
			let dbd = message.guild.roles.cache.get('780422884421402654');
			let js = message.guild.roles.cache.get('780422882391359528');
			let desenvolvedor = message.guild.roles.cache.get('780422832253042738');
			let py = message.guild.roles.cache.get('780422881498234920');
			let dbs = message.guild.roles.cache.get('780422880789659659');
			const logs = client.channels.cache.find(
				channel => channel.id === '787028257677377606'
			);
			let dbm = message.guild.roles.cache.get('780422883209117707');
			const random = message.guild.roles.cache.get('780422885411913738');
			const embed = new Discord.MessageEmbed()
				.setTitle('📋 ¦ Registro De Bots!')
				.setThumbnail(message.author.displayAvatarURL({ dynamic: true }))

				.setColor('#B452CD')
				.setDescription(
					`<a:rx_1:773842443299717140>| Use para Bot \`JS\`<:Cfn_js:773668472907497503>\n<a:rx_2:773842763077910548> | Use para bot \`DBD\`<:Cfn_dbd:773666898659115028>\n<a:rx_3:773842802873466900> | Use para bot \`PY\`<:Cfn_Python:773666143164563456>\n<a:rx_4:773842879059460107> | Use para bot \`DBS\` <:dbs:770226566227034142>\n<a:rx_5:773842931563233280> | Use para bot \`DBM\` <:dbm:770228359103774740>`
				)
				.addField(
					'<:coroinha:761227142696402994> Dono:',
					`<a:flecha_branca:769145496639504428> **Tag**: \`${
						dono.user.tag
					}\`\n<a:flecha_branca:769145496639504428> **ID**: \`${dono.user.id}\``
				)
				.addField(
					'<:Emoji78:773251170839167056> | Bot:',
					`<a:flecha_branca:769145496639504428> **Tag**:\`${
						bot3.user.tag
					}\`\n<a:flecha_branca:769145496639504428> **ID**: \`${bot3.user.id}\``
				)
				.addField(
					'<:Cfn_Identidade:773834083121627136> | Prefixo:',
					`\`${Nick}\``
				)
				.addField('<:Cfn_Review:773835013006557195> | Nota:', reason)
				.setTimestamp()
				.setFooter(
					`Requisitado por ${message.author.tag}`,
					message.author.displayAvatarURL({ dynamic: true })
				);

			client.channels.cache
				.get('780423011865067540')
				.send(
					`🔍 **|** O bot ${bot3} está sendo analisado por ${message.author}`
				);

			message.channel.send(embed).then(async function(message) {
				message
					.react('773842443299717140')
					.then(() => message.react('773842763077910548'))
					.then(() => message.react('773842802873466900'))
					.then(() => message.react('773842879059460107'))
					.then(() => message.react('773842931563233280'));
				const filter = (reaction, user) => {
					return (
						[
							'773842443299717140',
							'773842763077910548',
							'773842802873466900',
							'773842879059460107',
							'773842931563233280'
						].includes(reaction.emoji.id) && user.id !== message.author.id
					);
				};

				message
					.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
					.then(collected => {
						const reaction = collected.first();

						if (reaction.emoji.id === '773842443299717140') {
							bot3.roles.add(js);
							dono.roles.add(desenvolvedor);
							bot3.roles.remove(random);

							const embed5 = new Discord.MessageEmbed()
								.setTitle('<a:Ativo:772082275621666816> | Bot aprovado!')
								.addField('<:coroinha:761227142696402994>・Dono:', dono)
								.addField(
									'<:Emoji78:773251170839167056>・Bot:',
									`\`${bot3.user.tag}\``
								)
								.addField('<:Cfn_Review:773835013006557195>・Nota:', reason)
								.setImage(
									'https://cdn.discordapp.com/attachments/770213824519077920/777281956844011530/52c.gif'
								)
								.setThumbnail(bot3.user.displayAvatarURL())
								.addField(
									'<:EmojiStaff:773256326104743956>・Moderador:',
									`<@${staff.id}>`
								)
								.setFooter(
									`Requisitado por ${staff.tag}`,
									staff.displayAvatarURL()
								)
								.setColor('#8A2BE2')
								.setTimestamp();
							logs.send(embed5);

							bot3.setNickname(`${bot3.user.username} {${Nick}}`);
							message.channel
								.send(
									`<a:certo:749385623823188092> | <@${
										staff.id
									}>, o bot foi adicionado com sucesso!`
								)
								.then(msg => msg.delete({ timeout: 5000 }));
						} else if (reaction.emoji.id === '773842763077910548') {
							message.delete();
							bot3.roles.add(dbd);
							bot3.setNickname(`${bot3.user.username} {${Nick}}`);
							dono.roles.add(desenvolvedor);
							bot3.roles.remove(random);
							db.delete(`prefix_${message.guild.id}_${dono.user.id}`);
							db.set(`boT_${bot3.user.id}`, 100);

							const embed5 = new Discord.MessageEmbed()
								.setTitle('<a:Ativo:772082275621666816> | Bot aprovado!')
								.addField('<:coroinha:761227142696402994>・Dono:', dono)
								.setImage(
									'https://cdn.discordapp.com/attachments/770213824519077920/777281956844011530/52c.gif'
								)
								.setThumbnail(bot3.user.displayAvatarURL())
								.addField(
									'<:Emoji78:773251170839167056>・Bot:',
									`\`${bot3.user.tag}\``
								)
								.addField(
									'<:EmojiStaff:773256326104743956>・Moderador:',
									`<@${staff.id}>`
								)
								.addField('<:Cfn_Review:773835013006557195>・Nota:', reason)
								.setFooter(
									`Requisitado por ${staff.tag}`,
									staff.displayAvatarURL()
								)
								.setColor('#8A2BE2')
								.setTimestamp();
							logs.send(embed5);
							message.channel
								.send(
									`<a:certo:749385623823188092> | <@${
										staff.id
									}>, o bot foi adicionado com sucesso!`
								)
								.then(msg => msg.delete({ timeout: 25000 }));
						} else if (reaction.emoji.id === '773842802873466900') {
							bot3.roles.add(py);
							dono.roles.add(desenvolvedor);
							bot3.roles.remove(random);

							const embed5 = new Discord.MessageEmbed()
								.setTitle('<a:Ativo:772082275621666816> | Bot aprovado!')
								.addField('<:coroinha:761227142696402994>・Dono:', dono)
								.setImage(
									'https://cdn.discordapp.com/attachments/770213824519077920/777281956844011530/52c.gif'
								)
								.addField(
									'<:Emoji78:773251170839167056>・Bot:',
									`\`${bot3.user.tag}\``
								)
								.setThumbnail(bot3.user.displayAvatarURL())
								.addField(
									'<:EmojiStaff:773256326104743956>・Moderador:',
									`<@${staff.id}>`
								)
								.addField('<:Cfn_Review:773835013006557195>・Nota:', reason)
								.setFooter(
									`Requisitado por ${staff.tag}`,
									staff.displayAvatarURL()
								)
								.setColor('#8A2BE2')
								.setTimestamp();
							logs.send(embed5);

							bot3.setNickname(`${bot3.user.username} {${Nick}}`);
							message.channel
								.send(
									`<a:certo:749385623823188092> | <@${
										staff.id
									}>, o bot foi adicionado com sucesso!`
								)
								.then(msg => msg.delete({ timeout: 5000 }));
						} else if (reaction.emoji.id === '773842879059460107') {
							message.delete();
							bot3.roles.add(dbs);
							bot3.setNickname(`${bot3.user.username} {${Nick}}`);
							dono.roles.add(desenvolvedor);
							bot3.roles.remove(random);
							db.delete(`prefix_${message.guild.id}_${dono.user.id}`);
							db.set(`boT_${bot3.user.id}`, 100);

							const embed5 = new Discord.MessageEmbed()
								.setTitle('<a:Ativo:772082275621666816> | Bot aprovado!')
								.addField('<:coroinha:761227142696402994>・Dono:', dono)
								.setImage(
									'https://cdn.discordapp.com/attachments/770213824519077920/777281956844011530/52c.gif'
								)
								.setThumbnail(bot3.user.displayAvatarURL())
								.addField(
									'<:Emoji78:773251170839167056>・Bot:',
									`\`${bot3.user.tag}\``
								)
								.addField(
									'<:EmojiStaff:773256326104743956>・Moderador:',
									`<@${staff.id}>`
								)
								.addField('<:Cfn_Review:773835013006557195>・Nota:', reason)
								.setFooter(
									`Requisitado por ${staff.tag}`,
									staff.displayAvatarURL()
								)
								.setColor('#8A2BE2')
								.setTimestamp();
							logs.send(embed5);
							message.channel
								.send(
									`<a:certo:749385623823188092> | <@${
										staff.id
									}>, o bot foi adicionado com sucesso!`
								)
								.then(msg => msg.delete({ timeout: 25000 }));
						} else if (reaction.emoji.id === '773842931563233280') {
							message.delete();
							bot3.roles.add(dbm);
							bot3.setNickname(`${bot3.user.username} {${Nick}}`);
							dono.roles.add(desenvolvedor);
							bot3.roles.remove(random);
							db.delete(`prefix_${message.guild.id}_${dono.user.id}`);
							db.set(`boT_${bot3.user.id}`, 100);

							const embed5 = new Discord.MessageEmbed()
								.setTitle('<a:Ativo:772082275621666816> | Bot aprovado!')
								.addField('<:coroinha:761227142696402994>・Dono:', dono)
								.setImage(
									'https://cdn.discordapp.com/attachments/770213824519077920/777281956844011530/52c.gif'
								)
								.setThumbnail(bot3.user.displayAvatarURL())
								.addField(
									'<:Emoji78:773251170839167056>・Bot:',
									`\`${bot3.user.tag}\``
								)
								.addField(
									'<:EmojiStaff:773256326104743956>・Moderador:',
									`<@${staff.id}>`
								)
								.addField('<:Cfn_Review:773835013006557195>・Nota:', reason)
								.setFooter(
									`Requisitado por ${staff.tag}`,
									staff.displayAvatarURL()
								)
								.setColor('#8A2BE2')
								.setTimestamp();
							logs.send(embed5);
							message.channel
								.send(
									`<a:certo:749385623823188092> | <@${
										staff.id
									}>, o bot foi adicionado com sucesso!`
								)
								.then(msg => msg.delete({ timeout: 25000 }));
						}
					});
			});
		} else {
			return message.channel
				.send(
					`<a:atento:749663083676434593> **|** ${
						message.author
					}, para manter este servidor organizado utilize este comando apenas no canal <#780422989710884874>`
				)
				.then(msg => msg.delete({ timeout: 25000 }));
		}
	} else {
		return message.channel
			.send(
				`<a:atento:749663083676434593> **|** ${
					message.author
				}, Você não tem **permissão suficiente** para usar este comando!`
			)
			.then(msg => msg.delete({ timeout: 28000 }));
	}
};
