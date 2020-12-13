const Discord = require('discord.js');
const db = require('quick.db');
module.exports.run = async (client, message, args) => {
  await message.delete()
	const user = message.mentions.users.first() || message.author;
	let coins = await db.fetch(
		`money_${message.guild.id}_${user.id}`
	);
	  let bank = await db.fetch(`cofre_${user.id}`)

	if (coins === null) coins = '0'
	if (bank === null) bank = '0' 
	const embed = new Discord.MessageEmbed()
		.setTitle(`<:Grana:772064017232953357> | Saldo do usuário: ${user.tag}`)
		.setThumbnail(user.displayAvatarURL({dynamic: true}))
		.setColor('#FF69B4')
		.setTimestamp()
		.addField('<:On:762808178965741589>  Disponível:', `${coins} <:lua_dy:762067671402938388>`, true)
		.addField('<:dnd:762808946385485835> Guardado:', `${bank}`, true)
		.setFooter(`Requisitado por ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))
	message.channel.send(embed);
};
