const http = require('http');
const express = require('express');
const app = express();
app.get('/', (request, response) => {
	console.log(Date.now() + ' Ping Received');
	response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
	http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();
client.prefix = config.prefix;
const Enmap = require('enmap');
const fs = require('fs');

const AntiSpam = require('discord-anti-spam');
const antiSpam = new AntiSpam({
	warnThreshold: 3,
	kickThreshold: 7,
	banThreshold: 7,
	maxInterval: 5000,
	warnMessage:
		'{@user}, Você está digitando muito rápido isso é considerado spamming.',
	kickMessage: '**{user_tag}** Foi expulso por spam.',
	banMessage: '**{user_tag}** Foi expulso por spam.',
	maxDuplicatesWarning: 7,
	maxDuplicatesKick: 10,
	maxDuplicatesBan: 12,
	exemptPermissions: ['ADMINISTRATOR'],
	ignoreBots: true,
	verbose: true,
	ignoredChannels: ['780422974116331521', '779671187764281356'],
	ignoredUsers: [
		'766382403639443476',
		'755824503354818700',
		'746007271259111534',
		'658681888193380352'
	]
});

client.on('message', message => antiSpam.message(message));


client.on('message', message => {
	if (message.author.id === '770599556995686461') {
		var groceries = [
			'Marquinhos',
			'Santa Teresa',
			'Zé do sertão',
			'Suco de frutas'
		];
		let nomes = groceries[Math.floor(Math.random() * groceries.length)];
		console;
		message.member.setNickname(`${nomes}`);
	}
});
client.on('message', async message => {
	if (message.author.bot) return;
	let bock = await db.get(`Lock_${message.guild.id}`);
	if (message.author.id === `${bock}`) return;
	if (message.channel.type == 'dm') return;
	if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase()))
		return;
	if (
		message.content.startsWith(`<@!${client.user.id}>`) ||
		message.content.startsWith(`<@${client.user.id}>`)
	)
		return;

	const args = message.content
		.trim()
		.slice(config.prefix.length)
		.split(/ +/g);
	const command = args.shift().toLowerCase();

	try {
		const commandFile = require(`./commands/${command}.js`);
		commandFile.run(client, message, args);
	} catch (e) {
		message.delete();
		console.log(e);
		message.channel
			.send(
				`:x: **| Ops, ${
					message.author
				} ** Esse comando não existe ou foi escrito de maneira errada!`
			)
			.then(msg => msg.delete({ timeout: 32000 }));
	}
});

const db = require('quick.db');
client.on('message', async message => {
	if (message.author.bot) return;
	const text = ['Gelin', 'Gellinho', 'Gelinho', 'gelinho', 'gelin', 'gellin'];
	try {
		if (text.some(word => message.content.toLowerCase().includes(word))) {
			message.react('772803500827607062');
			const filter = (reaction, user) => {
				return (
					['772803500827607062'].includes(reaction.emoji.id) &&
					user.id === message.author.id
				);
			};

			message
				.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
				.then(collected => {
					const reaction = collected.first();

					if (reaction.emoji.id === '772803500827607062') {
						message.channel
							.send(
								`<a:ukz:772815732211712023> **|** Uau ${
									message.author
								}, Você reagiu minha reação isso foi algo inesperado.`
							)
							.then(msg => msg.delete({ timeout: 23000 }));
					}
				});
		}
	} catch (e) {
		console.error(e);
	}
});
client.on(`message`, async message => {
	if (message.author.bot) return;
	let Mudo = message.guild.roles.cache.get('773745391782723624');
	const bannedWords = ['Linux ON', 'linux on', 'Linux', 'linux'];
	try {
		if (
			bannedWords.some(word => message.content.toLowerCase().includes(word))
		) {
			if (message.author.id === message.guild.ownerID) return;
			await message.member.roles.add(Mudo);
			message.react('763043129892143115');
			const filter = (reaction, user) => {
				return (
					['763043129892143115'].includes(reaction.emoji.id) &&
					user.id === message.author.id
				);
			};

			message
				.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
				.then(collected => {
					const reaction = collected.first();

					if (reaction.emoji.id === '763043129892143115') {
						message.channel
							.send(
								`<a:gelin:772805291737088010> **|** Uau ${
									message.author
								}, uma reação inesperada.`
							)
							.then(msg => msg.delete({ timeout: 23000 }));
					}
				});
		}
	} catch (e) {
		console.log(e);
	}
});

client.on('guildMemberAdd', async member => {
	const Cana99 = client.channels.cache.get('780423011865067540');
	let Welcome2 = new Discord.MessageEmbed()
		.setTitle('<a:Alegreti:766428781123600424> ¦ Novo Pinguim Na Base!')
		.setDescription(
			`<@${
				member.user.id
			}>, Seja bem vindo(a) a nossa base no gelo espero que você aprenda muita coisa conosco.`
		)
		.setColor('#B0E0E6')
		.setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
		.setFooter(`💻・ID USUÁRIO: ${member.user.id}`)
		.setImage(
			'https://cdn.discordapp.com/attachments/765302860295569431/768249701056380928/tenor_1.gif'
		);
	Cana99.send(Welcome2);
});

client.on('message', msg => {
	let author = msg.author;
	if (msg.author.id == `${client.user.id}`) return;
	if (msg.content.includes('@everyone')) {
		if (msg.author.id === '746007271259111534') {
			msg.channel
				.send(`<a:yayfofa:760537776222765138> | ${msg.author}, Olá criador!`)
				.then(m => m.delete({ timeout: 7000 }));
		} else {
			msg.delete();
			msg.channel
				.send(
					`<a:Carregando:760284920148656179> | **Verificando suas permissões..**`
				)
				.then(msg => {
					setTimeout(function() {
						msg.edit(
							`<a:Ve_ErradoTKF:754787728104620182> | ${author}, Você não tem autorização!`
						);
					}, 5000);
					msg.delete({ timeout: 8000 });
				});
		}
	}
});

client.on('message', msg => {
	if (msg.author.bot) return;
	let author = msg.author;
	if (msg.content.includes('@here')) {
		if (msg.author.id === '746007271259111534') {
			msg.channel
				.send(`<a:yayfofa:760537776222765138> | ${msg.author}, Olá criador!`)
				.then(m => m.delete({ timeout: 90000 }));
		} else {
			msg.delete();
			msg.channel
				.send(
					`<a:Carregando:760284920148656179> | **Verificando suas permissões..**`
				)
				.then(msg => {
					setTimeout(function() {
						msg.edit(
							`<a:Ve_ErradoTKF:754787728104620182> | ${author}, Você não tem autorização!`
						);
					}, 5000);
					msg.delete({ timeout: 7000 });
				});
		}
	}
});

client.on('message', msg => {
	if (msg.author.bot) return;
	if (msg.author.id === '746007271259111534') return;
	if (
		msg.content.startsWith(`<@!${client.user.id}>`) ||
		msg.content.startsWith(`<@${client.user.id}>`)
	) {
		return msg.channel
			.send(
				`<a:meninadoente:759439979864391712> | Olá ${
					msg.author
				}, Meu prefix neste servidor é \`g-\`\n\> <:seta2:758042050594603088> Precisa de ajuda use **g-help**`
			)
			.then(m => m.delete({ timeout: 9000 }));
	}
});

client.on('message', msg => {
	if (msg.author.id === '746007271259111534') {
		if (
			msg.content.startsWith(`<@!${client.user.id}>`) ||
			msg.content.startsWith(`<@${client.user.id}>`)
		) {
			return msg.channel.send(
				'<a:A_pikachu:759436849453334549> | <@746007271259111534>, **Olá meu criador**!'
			);
		}
	}
});

client.on('ready', () => {
	let activities = [
			`Em desenvolvimento!`,
			`Criador Linux ON!`,
			`Segurança a todos!`,
			`Paz mundial!`,
			`Observando J.v11`,
			'zLiTEOFF#0001!'
		],
		i = 0;
	setInterval(
		() =>
			client.user.setActivity(`${activities[i++ % activities.length]}`, {
				type: 'WATCHING'
			}),
		1000 * 60
	);
	client.user.setStatus('dnd').catch(console.error);
	console.log('Linux ON, Estou online agora!');
});
client.on(`message`, async message => {
	if (message.author.bot) return;
	if (message.content === 'd-ajuda') return;
	if (message.channel.id === '763888780364087306') {
		const bannedWords = [
			'comando',
			'Preciso de ajuda',
			'Comando',
			'ajuda',
			'alguém tem o comando',
			'Alguém tem o comando',
			'preciso de ajuda'
		];
		try {
			if (
				bannedWords.some(word => message.content.toLowerCase().includes(word))
			) {
				message.channel
					.send(
						`<a:Alegreti:766428781123600424> | ${
							message.author
						} já deu uma olhada no canal <#763901372474458123> é necessário pegar a sua Tag para ter acesso aos canais de suporte da sua linguagem, perguntas e dúvidas gerais passe no canal <#763903693275529246>`
					)
					.then(msg => msg.delete({ timeout: 19000 }));
			}
		} catch (e) {
			console.error(e);
		}
	}
});
client.login(process.env.TOKEN);
