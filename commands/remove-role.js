const Discord = require('discord.js');
const cooldown = new Set();
module.exports.run = async (client, message, args) => {
	message.delete();
	if (!message.member.hasPermission('MANAGE_ROLES'))
		return message.channel
			.send(
				`<a:erro_gelin:754787728104620182> | ${message.author}, Você precisa ter a permissão de **EXPULSAR_MEMBROS** para poder utilizar este comando.`
			)
			.then(msg => msg.delete({ timeout: 15000 }));
	if (cooldown.has(message.author.id)) {
		message.delete();
		return message.channel
			.send(
				`<a:tempo:761780107575820308> | ${
					message.author
				}, Aguarde um pouco para usar este comando novamente!`
			)
			.then(msg => msg.delete({ timeout: 12000 }));
	}

	const membro = await message.mentions.members.first();
	const Role = message.mentions.roles.first();
	if (!membro)
		return message.channel
			.send(
				`<a:erro_gelin:754787728104620182> | ${message.author}, Use no formato:\n\> **Ex**: g-remove-role @role @user`
			)
			.then(msg => msg.delete({ timeout: 8000 }));

	if (!Role)
		return message.channel
			.send(
				`<a:erro_gelin:754787728104620182> | ${message.author}, Use no formato:\n\> **Ex**: g-remove-role @role @user`
			)
			.then(msg => msg.delete({ timeout: 8000 }));

	let embed = new Discord.MessageEmbed();

	embed.setTitle('Cargo - Removido!');
	embed.addField(
		'👥 | Usuário:',
		`<:seta2:749261296557359184>・Tag: \`${
			membro.user.tag
		}\`\n<:seta2:749261296557359184>・ID: \`${membro.user.id}\``
	);
	embed.addField(
		'🔨 | Autor da ação:',
		`<:seta2:749261296557359184>・Tag: \`${
			message.author.tag
		}\`\n<:seta2:749261296557359184>・ID: \`${message.author.id}\``
	);
	embed.addField('💼 | Cargo Removido:', Role);
	embed.setThumbnail(message.author.displayAvatarURL());
	embed.setFooter(`${client.user.tag}`, client.user.displayAvatarURL());
	embed.setTimestamp();
	embed.setColor('#FF11AC');
	message.channel.send(embed).then(msg => msg.delete({ timeout: 13000 }));
	await membro.roles.remove(Role);

	cooldown.add(message.author.id);
	setTimeout(() => {
		cooldown.delete(message.author.id);
	}, 46000);
};
