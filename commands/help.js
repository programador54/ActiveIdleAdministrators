const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {
		message.delete();
		const membro = message.author;
		const embed = new Discord.MessageEmbed()
			.setTitle('(<a:estrelA:763043129892143115>) LISTA DE COMANDOS!')
			.setDescription(
				'**Escolha a Categoria**:\n<a:umL:775067435010228235> | Comandos Add-bot\n<a:doisL:775067480489852960> | Comandos Wiki\n<a:tresL:775067534919467030> | Comandos Economia\n<a:quatroL:775067821284786206> | Comandos Úteis\n<a:cincoL:775067782442123294> | Sobre mim\n\n <a:Coroinhaa:775027400198586389>・Criador: ``Linux ON#0803``'
			)
			.addField(
				'<:Cfn_youtube:773703306635640852>・Canal Linux ON:',
				`[Visitar canal](https://www.youtube.com/c/LinuxON)`
			)
			.addField('<a:b_disco:758049811323945030>・Minha versão:', '`v3.4.2`')
			.setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
			.setImage(
				'https://cdn.discordapp.com/attachments/771087032604033044/775022840952127499/exit.jpg'
			)
			.setColor('#FF00FF')
			.setTimestamp()
			.setFooter(
				`Solicitado por ${message.author.tag}`,
				client.user.displayAvatarURL()
			);
		message.channel.send(embed).then(function(message) {
			message.react('775067435010228235').then(() => message.react('775067480489852960')).then(() => message.react('775067534919467030')).then(() => message.react('775067821284786206')).then(() => message.react('775067782442123294'))
			message.delete({ timeout: 74000 });

			const menu = (reaction, user) =>
				reaction.emoji.id === '775067435010228235' &&
				user.id !== message.author.id;

			const music = (reaction, user) =>
				reaction.emoji.id === '775067480489852960' &&
				user.id !== message.author.id;

			const util = (reaction, user) =>
				reaction.emoji.id === '775067534919467030' &&
				user.id !== message.author.id;

			const game = (reaction, user) =>
				reaction.emoji.id === '775067821284786206' &&
				user.id !== message.author.id;
			const info = (reaction, user) => reaction.emoji.id === '775067782442123294' && user.id !== message.author.id;
			
			const v = message.createReactionCollector(info, { time: 60000});
			
			const w = message.createReactionCollector(game, { time: 60000 });

			const m = message.createReactionCollector(menu, { time: 60000 });

			const u = message.createReactionCollector(music, { time: 60000 });

			const n = message.createReactionCollector(util, { time: 60000 });

			m.on('collect', r => {
				let h = new Discord.MessageEmbed()
					.setTitle('📝 ¦ SISTEMA ADD-BOT')
					.setDescription(
						'<a:flecha_branca:769145496639504428> **g-add-bot** `(cooldown 24h)` - Utilize para adicionar sue bot no servidor.\n<a:flecha_branca:769145496639504428>  **g-aprovar** `@dono` `@bot` - Use apenas para registrar bots no servidor.\n<a:flecha_branca:769145496639504428> **g-reprovar** \`@dono\` \`@bot\` \`<motivo>\`- Use apenas para reprovar bots no servidor.\n<a:flecha_branca:769145496639504428> **g-add-bot** `<ID>` - Use para gerar um convite de algum bot.'
) 
					.setTimestamp()
					.setThumbnail(membro.displayAvatarURL({dynamic: true}))
					.setColor('#FF11AC')
					.setFooter(`Solicitado por ${membro.tag}`, membro.displayAvatarURL({dynamic: true}));
				message.edit(h);
			});

			u.on('collect', r => {
				let j = new Discord.MessageEmbed()
					.setTitle('📊 ¦ Comandos Wiki')
					.setThumbnail(membro.displayAvatarURL({dynamic: true}))
					.setColor('#FF11AC')
					.setDescription('<a:flecha_branca:769145496639504428> **g-wiki-py** `<texto>` - Use para mandar uma wiki de comando Discord Bot Python.\n<a:flecha_branca:769145496639504428> **g-wiki-dbd** `<texto>` - Use para mandar uma wiki de comando Discord Bot for designer.\n<a:flecha_branca:769145496639504428> **g-wiki-dbs** `<texto>` - Use para mandar uma wiki de comando Discord Bot Script.\n<a:flecha_branca:769145496639504428> **g-wiki-dbm** `<texto>` - Use para mandar uma wiki de comando Discord Bot Maker.')
					.setTimestamp()
					.setFooter(
						`Solicitado por ${membro.tag}`,
						membro.displayAvatarURL({ dynamic: true })
					);

				message.edit(j);
			});

			n.on('collect', r => {
				const x = new Discord.MessageEmbed()
					.setTitle('💰 ¦ Comandos Economia')
					.setThumbnail(membro.displayAvatarURL({timeout: 27000}))
					.setDescription('<a:flecha_branca:769145496639504428> **g-daily** `(cooldown 24h)` - Coleta suas luas diário.\n<a:flecha_branca:769145496639504428> **g-pay** `@user` `<quantia>` - Pague um usuário com suas luas.\n<a:flecha_branca:769145496639504428> **g-loja** `(custa luas)` - Compre produtos do nosso servidor com suas luas.\n<a:flecha_branca:769145496639504428> **g-marry** `@user` - Use para casar com um membro.'
					)
					.setColor('#FF11AC')
					.setFooter(
						`Solicitado por ${membro.tag}`,
						membro.displayAvatarURL({ dynamic: true })
					)
					.setTimestamp();
				message.edit(x);
			});

			w.on('collect', r => {
				const gx = new Discord.MessageEmbed()
					.setTitle('⚡ ¦ Comandos Úteis')
					.setDescription(
						'<a:flecha_branca:769145496639504428> **g-limpar** `<2/100>` - Limpa uma quantidade de mensagens o máximo é 100.\n<a:flecha_branca:769145496639504428> **g-say** `<msg>` - Faz o bot falar no canal de texto.\n<a:flecha_branca:769145496639504428> **g-setarvip** `@user` - Adiciona o cargo VIP no usuário mencionado.'
					)
					.setTimestamp()
					.setFooter(`Solicitado por ${membro.tag}`, membro.displayAvatarURL({dynamic: true}))
					.setThumbnail(membro.displayAvatarURL({dynamic: true}))
					.setColor('#FF11AC');
				message.edit(gx);
			});
			v.on('collect', r => {
			  const y = new Discord.MessageEmbed()
			 .setTitle('📊 ¦ Informações sobre mim')
		 	 .setDescription('**Olá me chamo Gellinho™ sou uma bot poderosa desenvolvida para ser focada em gerenciamento de servidor.**')
		 	 .setColor('#FF11AC')
			 .addField('<a:WiFi:775072784153182228>・Usuários:', `\`\`${client.users.cache.size}\`\``)
			.addField('<a:globoL:775071663204466698>・Servidores:', `\`${client.guilds.cache.size}\``)
			.setThumbnail(client.user.displayAvatarURL())
			.addField('<a:Engrenagens:766320358961053727>・Minha versão:', '`v3.4.2`')
			.addField('<a:pingL:775071512771428363> Ping:', `**${parseInt(client.ws.ping)}** ms`)
			.setFooter(`Requisitado por ${membro.tag}`, membro.displayAvatarURL({dynamic: true}))
		 	.setTimestamp()
			  message.edit(y)
			})
		});
};
