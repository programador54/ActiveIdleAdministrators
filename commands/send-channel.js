module.exports.run = (client, message, args) => {
	message.delete()
	const canal = client.channels.cache.get(`${args[0]}`);
	let msg = args.slice(1).join(' ');
	canal.send(`${msg}`);
	message.channel.send('Enviado!').then(msg => msg.delete({ timeout: 5000 }));
};
