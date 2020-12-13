const Discord = require('discord.js');
const db = require('quick.db');
module.exports.run = async (client, message, args) => {
	let money = client.db.all().filter(i => i.ID.startsWith("money_")).sort((a, b) => b.money - a.money);
	let content = '';

	for (let i = 0; i < money.length; i++) {
		let user = bot.users.get(money[i].ID.split('_')[2]).username;

		content += `${i + 1}. ${user} ~ ${money[i].data}\n`;
	}
	const embed = new Discord.MessageEmbed()
		.setDescription(
			`**${message.guild.name}'s Coin Leaderboard**\n\n${content}`
		)
		.setColor('#FFFFFF');

	message.channel.send(embed);
};
