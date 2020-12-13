module.exports.run = async (client, message, args) => {
	message.delete();

	message.guild.members.cache.filter(m => m.user.bot).forEach(m => {
		m.roles.add('780422885411913738');
	});

	message.channel
		.send('<a:Cfn_a_carregar:775316350163615764> **|** Aplicando alterações...')
		.then(msg => msg.delete({ timeout: 35000 }));
};
