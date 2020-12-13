const Discord = require('discord.js')

 module.exports.run = (client, message, args) => {
   message.delete()
   let name = 'Gelado'
    let avatar = {avatar: 'https://cdn.discordapp.com/attachments/766702161064230932/770246782500077588/0d0e566ef0cf23dcb5f960eb5f1ea20a.png'} //se quiser colocar um avatar pro webhook
    var falas = ["Se for eleito prometo que vou tirar os mendigos da rua... e vou colocar na calçada.", "Hoje eu acordei tão linda que quando fui bocejar, miei.", "Só tenho uma geladeira e 25 reais.", "Se o seu problema é dinheiro, e você não tem dinheiro, então você não tem problema"
   , "No dia que suor der dinheiro, pobre nasce sem sovaco."] 
    let frases = falas[Math.floor(Math.random() * falas.length)]
console.log
   message.channel.createWebhook(name, avatar).then(async w => {
       await w.send(`${frases}`);
       w.delete()
    })
 }