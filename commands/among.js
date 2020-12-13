

module.exports.run = (client, message, args) => {
const emojiurls = client.emojis
    cache.filter(emoji => emoji.available)
    .map(emoji => { 
        return { "name": emoji.name, "url": emoji.url };
     });
return res.json(emojiurls); 
let msg = args.join(' ')
message.channel.send(msg)
} 