const Discord = require('discord.js');
const cooldown = new Set();
const db = require('quick.db');

module.exports.run = async (client, message, args) => {
	if (message.channel.id === '773647449843171328') {
		message.delete();
		if (message.content.toLowerCase().includes(args[0]))
			return message.channel
				.send('Não escreva nada junto ao comando!')
				.then(msg => msg.delete({ timeout: 27000 }));
		const member = message.author.id;
		const espera = message.guild.channels.cache.get('773651158781788190');

		const log = message.guild.channels.cache.get('773831154989531166');
		let verificar = await db.get(`ID_${message.author.id}`);
		if (verificar === null) verificar = '4';
		if (10 > verificar) {
			const pergunta1 = new Discord.MessageEmbed()
			.setDescription(`<a:umL:775067435010228235> **|** Qual é o ID do seu Bot?`)
			.setColor('#FF11AC')
			.setFooter('Pergunta 1/4')
				message.channel.send(pergunta1).then(msg => {
					let cp = message.channel
						.createMessageCollector(x => x.author.id == message.author.id, {
							max: 1
						})

						.on('collect', a => {
							let id = a.content;
             if (isNaN(id)) return message.channel.send('Isso não é um número!')
              const pergunta2 = new Discord.MessageEmbed()
							.setColor('#FF11AC')
							.setDescription(
									`<a:doisL:775067480489852960> **|** Qual é a prefix do seu bot?`
								)
								.setFooter('Pergunta 2/4')
								message.channel.send(pergunta2).then(async msg2 => {
									msg.delete();
									a.delete();

									const user = await client.users.fetch(id, { cache: true });
									const userTag = `${user.username}#${user.discriminator}`;

									let cl = message.channel
										.createMessageCollector(
											x => x.author.id == message.author.id,
											{
												max: 1
											}
										)

										.on('collect', async d => {
											let desc = d.content;

							const pergunta3 = new Discord.MessageEmbed()
							.setDescription(
													'<a:tresL:775067534919467030> **|** Qual a biblioteca? `(dbd, js, dbs, py, dbm)`'
												)
												.setColor('#FF11AC')
												.setFooter('Pergunta 3/4')
												message.channel.send(pergunta3).then(async msg3 => {
													d.delete();
													msg2.delete();
													

													let ck = message.channel
														.createMessageCollector(
															x => x.author.id == message.author.id,
															{ max: 1 }
														)

														.on('collect', async c => {
															await c.delete();
															let title = c.content;
															let toggling = ['dbm', 'dbd', 'js', 'py', 'dbs'];
															if (!toggling.includes(`${title}`)) {
																message.delete();
																return message.channel
																	.send(
																		`<a:ping:772082378348036107> | ${
																			message.author
																		}, Biblioteca Inválida!\nFaça isso de novo e eu vou lhi colocar na rua!`
																	)
																	.then(msg => msg.delete({ timeout: 25000 }));
															}
															await db.set(
																`prefix_${message.guild.id}_${
																	message.author.id
																}`,
																desc
															);
								let fim = new Discord.MessageEmbed()						
								.setDescription(`Você realmente quer mandar seu bot para a verificação?\n Responda **sim** para confirmar o envio ou use **não** para cancelar!`)
								message.channel.send(fim).then(msg4 => {
								msg3.delete()
								let cn = message.channel
																	.createMessageCollector(
																		x => x.author.id == message.author.id,
																		{
																			max: 1
																		}
																	)

																	.on('collect', async z => {
																		let ok = z.content;

																		if (ok === 'sim') {
																			await db.set(
																				`ID_${message.author.id}`,
																				id
																			);
																			let embed = new Discord.MessageEmbed()

																				.setTitle(
																					'<a:atento:749663083676434593> | Pedido recebido!'
																				)
																				.setThumbnail(
																					message.author.displayAvatarURL()
																				)
																				.setColor('#FF11AC')
																				.setFooter(
																					`Comando efetuado por: ${
																						message.author.username
																					}`,
																					message.author.displayAvatarURL()
																				)
																				.addField(
																					'<:coroinha:761227142696402994> Criador do bot:',
																					`<a:flecha_branca:769145496639504428> **Tag**: \`${
																						message.author.tag
																					}\`\n<a:flecha_branca:769145496639504428> **ID**: \`${
																						message.author.id
																					}\``
																				)
																				.addField(
																					'<:Emoji78:773251170839167056>・Bot:',
																					`<a:flecha_branca:769145496639504428> **Tag**: \`${userTag}\`\n<a:flecha_branca:769145496639504428> **ID**: \`${id}\``
																				)
																				.setThumbnail(user.displayAvatarURL())
																				.addField(
																					'<:Cfn_Review:773835013006557195>・Prefixo:',
																					`\`${desc}\``
																				)

																				.addField(
																					'<:Cfn_config:774243915439669288>・Biblioteca:',
																					`\`${title}\``
																				)
																				.addField(
																					':link:・Link do Bot:',
																					`**[Clique aqui para adicionar o bot](https://discord.com/api/oauth2/authorize?client_id=${id}&permissions=65536&scope=bot)**`
																				);

																			espera.send(embed);
																			log.send(
																				`<a:certo:749385623823188092> | ${
																					message.author
																				}, Mandou seu bot \` ${user.username}#${
																					user.discriminator
																				}\` para verificação!\n\> <:Cfn_Identidade:773834083121627136>・ID DO BOT: \`${id}\``
																			);

																			const embed5 = new Discord.MessageEmbed();
																			embed5.setTitle(
																				'<a:certo:749385623823188092> | Pedido realizado!'
																			);
																			embed5.setDescription(
																				`Bot enviado para a verificação com sucesso ${
																					message.author
																				}!`
																			);
																			embed5.setThumbnail(
																				message.author.displayAvatarURL()
																			);
																			embed5.setColor('#8A2BE2');
																			message.channel
																				.send(embed5)
																				.then(msg =>
																					msg.delete({ timeout: 5000 })
																				);
																		}
																	});
															});
														});
												});
										});
								});
						});
				});
		} else {
			return message.channel
				.send(
					`<a:atento:749663083676434593> **|** ${
						message.author
					} Você já tem bot registrado na **Cafeteria ON**!\nNão insista ou você será \`Banido para sempre\`!`
				)
				.then(msg => msg.delete({ timeout: 18000 }));
		}
	} else {
		return message.channel
			.send(
				`<a:atento:749663083676434593> **|** ${
					message.author
				}, para manter este servidor organizado use este comando apenas no canal <#763895711791841280>`
			)
			.then(msg => msg.delete({ timeout: 19000 }));
	}
};
