const Discord = require('discord.js');
module.exports.run = (client, message, args) => {
  message.delete()
	const embed = new Discord.MessageEmbed()
		.setTitle('<a:grana:762830762189127720> | Lojinha - Cafeteria ON ☕')
		.setThumbnail(message.author.displayAvatarURL({dynamic: true}))
		.setDescription(
			'<:seta2:758042050594603088>・**g-comprar-nick = 1200 <:lua_dy:762067671402938388>**\n<:seta2:758042050594603088>・**g-comprar-vip = 2200 <:lua_dy:762067671402938388>**')
		.setColor('#FF1493')
		.setFooter(`Requisitado por ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))
		.setTimestamp();
	message.channel.send(embed);
};
