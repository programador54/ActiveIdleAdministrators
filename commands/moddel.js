const Discord = require('discord.js');
module.exports.run = (client, message, args) => {
	message.delete();
	let splitarg = args.join(' ').split(' / ');
	let titulo = splitarg[0];
	let anuncio = splitarg[1];

	const embed = new Discord.MessageEmbed()

		.setTitle(`${titulo}`)
		.setDescription(`${anuncio}`)
		.setColor('#FF69B4');
	message.channel.send(embed);
};
