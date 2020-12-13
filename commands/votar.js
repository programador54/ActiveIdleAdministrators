const Discord = require('discord.js');
const db = require('quick.db');
module.exports.run = async (client, message, args) => {
	await message.delete();
	const membro = message.author;
	let vots = await db.fetch(`votado_${message.author.id}`);
	if (vots === null) vots = '5';
	let aviso1 = new Discord.MessageEmbed()
		.setColor('#FF11AC')
		.setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
		.setTitle('<a:Desligado:772083231528976385> | Uso impróprio!')
		.setDescription('Você já tem bot registrado na minha memória.');

	if (10 < vots)
		return message.channel
			.send(aviso1)
			.then(msg => msg.delete({ timeout: 25000 }));

	const bot = await message.mentions.members.filter(m => m.user.bot).first();
	let reason = args.slice(1).join(' ');
	if (!reason) reason = 'Nada informado';
	let aviso2 = new Discord.MessageEmbed()
		.setTitle('<a:Desligado:772083231528976385> | Uso incorreto!')
		.setThumbnail(
			message.author.displayAvatarURL({
				dynamic: true
			})
		)
		.setColor('#FF11AC')
		.setDescription(
			'Você não específicou nenhum Bot para votar, tente novamente!'
		);
	if (!bot)
		return message.channel
			.send(aviso2)
			.then(msg => msg.delete({ timeout: 25000 }));
	let votos = await db.get(`voto_${bot.user.id}`);
	if (votos === null) votos = '0';

	let embed = new Discord.MessageEmbed()
		.setAuthor(`${bot.user.tag}`, bot.user.displayAvatarURL())
		.setTitle('<a:ping:772082378348036107> | Votação Iniciada!')
		.setDescription(`Você quer mesmo votar no bot ${bot}`)
		.addField('<:Cfn_certoo:773730543891644496> Votos:', votos)
		.setColor('#FF11AC')
		.setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
		.setTimestamp()
		.setFooter(
			`Requisitado por ${message.author.tag}`,
			message.author.displayAvatarURL({ dynamic: true })
		);
	message.channel.send(embed).then(async function(message) {
		message.react('✅');
		let votou = new Discord.MessageEmbed()
			.setAuthor(`${bot.user.tag}`, bot.user.displayAvatarURL())
			.setTitle('<a:Ativo:772082275621666816> | Votação Realizada!')
			.setDescription(`Você acaba de votar no bot ${bot} meus parabéns.`)
			.setImage(
				'https://cdn.discordapp.com/attachments/773229810477957130/775149257811558420/6c1e1c6afc68a9a6d9be15514fcd12d8.gif'
			)
			.setThumbnail(bot.user.displayAvatarURL())
			.setColor('#FF11AC')
			.setTimestamp()
			.setFooter(
				`Requisitado por ${membro.tag}`,
				membro.displayAvatarURL({ dynamic: true })
			);

		const hk = (reaction, user) =>
			reaction.emoji.name === '✅' && user.id !== message.author.id;

		const v = message.createReactionCollector(hk, { time: 60000 });

		v.on('collect', async r => {
			await message.delete();
			await db.add(`voto_${bot.user.id}`, 1);
			await db.set(`votado_${membro.id}`, 92);
			let cargo = `${Math.floor(votos + 1)}`;
			if (cargo === '10') {
				bot.roles.add('780422815505055785');
			}
			let embed2 = new Discord.MessageEmbed()
				.setColor('#8A2BE2')
				.setAuthor(`${bot.user.tag}`, bot.user.displayAvatarURL())
				.setTitle('<a:Trofeu:781986580725628938> | Novo bot votado!')

				.addField('<:Users2:771715696635674674> Usuário:', membro)
				.setThumbnail(bot.user.displayAvatarURL({ dynamic: true }))
				.setFooter(`${membro.tag}`, membro.displayAvatarURL({ dynamic: true }))
				.setTimestamp()
				.addField('<:Emoji78:773251170839167056> Bot:', bot)
				.addField(
					'<:Cfn_certoo:773730543891644496> Votos atuais:',
					`${Math.floor(votos + 1)}`
				)
				.addField('📝 Comentário:', reason);
			client.channels.cache.get('780423012792795146').send(embed2);

			message.channel.send(votou).then(msg => msg.delete({ timeout: 25000 }));
		});
	});
};
