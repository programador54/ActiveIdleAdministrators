const cooldown = new Set();
module.exports.run = (client, message, args) => {
	
	if (message.member.roles.cache.some(
			a => a.name === '「🔰」・Gerente De Parceria ¦  ★★★'
		)) {
		const msg = args.join(' ');
		message.channel.send(`${msg}`);
	} else {
		let msgsay = args.join(' ');
		let envia = `${msgsay}\n\n Enviada por ${message.author.tag}`;
		message.channel.send(envia);
		
	

	
	} 
};
