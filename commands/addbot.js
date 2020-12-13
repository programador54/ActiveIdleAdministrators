const Discord = require('discord.js');
const cooldown = new Set();
const db = require('quick.db');
module.exports.run = async (client, message, args) => {
	if (message.channel.id === '780422988817235968') {
		message.delete();
		let ag = new Discord.MessageEmbed()
			.setTitle('<a:Desligado:772083231528976385> | Uso Incorreto!')
			.setTimestamp()
			.setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
			.setColor('#FF00FF')
			.setDescription('**Não escreva nada junto ao comando.**')
			.setFooter('Sistema - addbot™', client.user.displayAvatarURL());
		if (message.content.toLowerCase().includes(args[0]))
			return message.channel
				.send(ag)
				.then(msg => msg.delete({ timeout: 27000 }));
		const member = message.author.id;
		const don = message.author;
		const espera = message.guild.channels.cache.get('780422990570586113');

		const log = message.guild.channels.cache.get('787028257677377606');
		let verificar = await db.get(`ID_${message.author.id}`);
		if (verificar === null) verificar = '4';
		if (8 < verificar) {
			db.set(`ban_${message.author.id} `, 3);
			return message.channel
				.send('Você já tem bot registrado na minha memória não insista.')
				.then(msg => msg.delete({ timeout: 25000 }));
		}
		let kick = await db.get(`ban_${message.author.id}`);

		if (kick === null) kick = '1';
		if (kick === '3') {
			message.member.kick();
		}

		const pergunta1 = new Discord.MessageEmbed()
			.setDescription(
				`<a:umL:775067435010228235> **|** Qual é o ID do seu Bot?`
			)
			.setColor('#FF11AC')
			.setFooter('Pergunta 1/4');
		message.channel.send(pergunta1).then(msg => {
			let cp = message.channel
				.createMessageCollector(x => x.author.id == message.author.id, {
					max: 1
				})

				.on('collect', a => {
					let id = a.content;
					let falha1 = new Discord.MessageEmbed()
						.setTitle('<a:Desligado:772083231528976385> | Uso Incorreto!')
						.setTimestamp()
						.setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
						.setColor('#FF00FF')
						.setDescription(
							'**O que você mandou eu não sei o que é mais tenho certeza absoluta de que não é um número.**'
						)
						.setFooter('Sistema - addbot™', client.user.displayAvatarURL());
					let falha2 = new Discord.MessageEmbed()
						.setTitle('<a:Desligado:772083231528976385> | Uso Incorreto!')
						.setTimestamp()
						.setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
						.setColor('#FF00FF')
						.setDescription('**Esse número é muito curto para ser um ID.**')
						.setFooter('Sistema - addbot™', client.user.displayAvatarURL());

					let falha3 = new Discord.MessageEmbed()
						.setTitle('<a:Desligado:772083231528976385> | Uso Incorreto!')
						.setTimestamp()
						.setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
						.setColor('#FF00FF')
						.setDescription(
							'**Esse número é muito longo para ser um ID.\nSerá que você mandou o número do saldo do Bill Gates?**'
						)
						.setFooter('Sistema - addbot™', client.user.displayAvatarURL());
					if (isNaN(id))
						return message.channel
							.send(falha1)
							.then(msg => msg.delete({ timeout: 25000 }));

					if (id.length < 18) {
						a.delete();
						msg.delete();
						return message.channel
							.send(falha2)
							.then(msg => msg.delete({ timeout: 25000 }));
					}

					if (id.length > 18) {
						a.delete();
						msg.delete();
						return message.channel
							.send(falha3)
							.then(msg => msg.delete({ timeout: 25000 }));
					}

					const pergunta2 = new Discord.MessageEmbed()
						.setColor('#FF11AC')
						.setDescription(
							`<a:doisL:775067480489852960> **|** Qual é a prefix do seu bot?`
						)
						.setFooter('Pergunta 2/4');
					message.channel.send(pergunta2).then(async msg2 => {
						msg.delete();
						a.delete();

						const user = await client.users.fetch(id, { cache: true });
						const userTag = `${user.username}#${user.discriminator}`;

						let cl = message.channel
							.createMessageCollector(x => x.author.id == message.author.id, {
								max: 1
							})

							.on('collect', async d => {
								let desc = d.content;

								let falha4 = new Discord.MessageEmbed()
									.setTitle('<a:Desligado:772083231528976385> | Uso Incorreto!')
									.setTimestamp()
									.setThumbnail(
										message.author.displayAvatarURL({ dynamic: true })
									)
									.setColor('#FF00FF')
									.setDescription(
										'**Esse prefixo é muito grande tá mais para um texto.**'
									)
									.setFooter(
										'Sistema - addbot™',
										client.user.displayAvatarURL()
									);
								if (desc.length > 4) {
									d.delete();

									msg2.delete();
									return message.channel
										.send(falha4)
										.then(msg => msg.delete({ timeout: 25000 }));
								}

								const pergunta3 = new Discord.MessageEmbed()
									.setDescription(
										'<a:tresL:775067534919467030> **|** Qual a biblioteca? `(dbd, js, dbs, py, dbm)`\n**Obs**: *Use somente letras minúsculas na resposta.*'
									)
									.setColor('#FF11AC')
									.setFooter('Pergunta 3/4');
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

											let fim = new Discord.MessageEmbed()
												.setTitle(
													'<a:Carregando:760284920148656179>  | Confirme a ação!'
												)
												.setDescription(
													`Você realmente quer mandar seu bot para a verificação?\n Responda "**sim**" para confirmar o envio ou use "**não**" para cancelar!`
												)
												.setColor('#FF11AC')
												.setFooter('Pergunta 4/4');
											message.channel.send(fim).then(msg4 => {
												msg3.delete();
												let cn = message.channel
													.createMessageCollector(
														x => x.author.id == message.author.id,
														{
															max: 1
														}
													)

													.on('collect', async z => {
														let ok = await z.content;
														z.delete();
														msg4.delete();

														let togling = ['sim', 'não'];
														if (!togling.includes(`${ok}`)) {
															message.delete();
															return message.channel
																.send(
																	`<a:ping:772082378348036107> | ${
																		message.author
																	}, Resposta Inválida.\nFaça isso de novo e eu vou lhi colocar na rua!`
																)
																.then(msg => msg.delete({ timeout: 25000 }));
														}

														if (ok === 'sim') {
															const n = new Discord.MessageEmbed().setDescription(
																'<a:ping:772082378348036107> **|** Aguarde, procurando seu bot...'
															);
															n.setColor('#FF11AC');

															message.channel.send(n).then(message => {
																setTimeout(function() {
																	message.react('✅');

																	n.setTitle(
																		'<a:certo:749385623823188092> | Bot localizado!'
																	);
																	n.setThumbnail(user.displayAvatarURL());

																	n.setDescription(
																		`Seu bot é o \`${userTag}\`\nSe sim reaja "✅"  para confirmar.`
																	).setColor('#FF11AC');
																	message.edit(n).then(async function(message) {
																		const filter = (reaction, user) => {
																			return (
																				['✅'].includes(reaction.emoji.name) &&
																				user.id != message.author.id
																			);
																		};

																		message
																			.awaitReactions(filter, {
																				max: 1,
																				time: 60000,
																				errors: ['time']
																			})
																			.then(collected => {
																				const reaction = collected.first();

																				if (reaction.emoji.name === '✅') {
																					message.delete();
																					db.set(`ID_${message.author.id}`, id);
																					db.set(
																						`prefix_${message.guild.id}_${
																							don.id
																						}`,
																						desc
																					);
																					let embed = new Discord.MessageEmbed()

																						.setTitle(
																							'<a:atento:749663083676434593> | Pedido recebido!'
																						)
																						.setThumbnail(
																							user.displayAvatarURL()
																						)
																						.setColor('#FF11AC')
																						.setFooter(
																							`Comando efetuado por: ${
																								don.tag
																							}`,
																							don.displayAvatarURL()
																						)
																						.addField(
																							'<:coroinha:761227142696402994> Criador do bot:',
																							`<a:flecha_branca:769145496639504428> **Tag**: \`${
																								don.tag
																							}\`\n<a:flecha_branca:769145496639504428> **ID**: \`${
																								don.id
																							}\``
																						)
																						.addField(
																							'<:Emoji78:773251170839167056>・Bot:',
																							`<a:flecha_branca:769145496639504428> **Tag**: \`${userTag}\`\n<a:flecha_branca:769145496639504428> **ID**: \`${id}\``
																						)
																						.setThumbnail(
																							user.displayAvatarURL()
																						)
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

																					espera.send('<@&780422809615990794>', embed);
																					log.send(
																						`<a:certo:749385623823188092> | ${don}, Mandou seu bot \` ${
																							user.username
																						}#${
																							user.discriminator
																						}\` para verificação!\n\> <:Cfn_Identidade:773834083121627136>・ID DO BOT: \`${id}\``
																					);

																					const embed5 = new Discord.MessageEmbed();
																					embed5.setTitle(
																						'<a:certo:749385623823188092> | Enviado com sucesso!'
																					);
																					embed5.setDescription(
																						`${don} Seu bot \`${userTag}\` foi enviado para a verificação.\nPode demorar um pouco para ele ser analisado dependendo da fila de espera então fique atento no canal <#780423011865067540> por lá você saberá se o bot foi **aprovado** ou **reprovado**. `
																					);
																					embed5.setThumbnail(
																						don.displayAvatarURL()
																					);
																					embed5.setColor('#8A2BE2');
																					message.channel
																						.send(embed5)
																						.then(msg =>
																							msg.delete({ timeout: 35000 })
																						);
																				}
																			});
																	});
																}, 8000);
															});
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
				}, para manter este servidor organizado use este comando apenas no canal <#780422988817235968>`
			)
			.then(msg => msg.delete({ timeout: 19000 }));
	}
};
