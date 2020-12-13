const Discord = require('discord.js')

 module.exports.run = (client, message, args) => {
   message.delete()
   let name = 'J.v11'
    let avatar = {avatar: 'https://cdn.discordapp.com/attachments/754738847073435708/770240150621782036/aaf90468d18882e7c70950e5fe7c585f.png'} //se quiser colocar um avatar pro webhook
    var falas = ["Tem uma barata no seu teclado", "Tô de olho nos chats", "A gelinho tá me observando", "Vou fazer um carinho na tua cara", "Programando o J.v11 bot", "Dando ban em qm faz merda"]
    
    let frases = falas[Math.floor(Math.random() * falas.length)]
console.log
   message.channel.createWebhook(name, avatar).then(async w => {
       await w.send(`${frases}`);
       w.delete()
    })
 }