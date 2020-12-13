const Discord = require('discord.js')

 module.exports.run = (client, message, args) => {
   message.delete()
   let name = 'Dilma'
    let avatar = {avatar: 'https://cdn.discordapp.com/attachments/765302860295569431/768445205380071424/20201021_090639.jpg'} //se quiser colocar um avatar pro webhook
    var falas = ["Primeiro, eu queria te dizer que eu tenho muito respeito pelo ET de Varginha. E eu sei que aqui, quem não viu conhece alguém que viu, ou tem alguém na família que viu, mas de qualquer jeito eu começo dizendo que esse respeito pelo ET de Varginha está garantido.", "Não vamos colocar meta. Vamos deixar a meta aberta, mas, quando atingirmos a meta, vamos dobrar a meta.", "Quero dizer que hoje o Brasil está de luto por uma morte que tirou uma vida."
   , "Eu tô aqui saudando a mandioca. Acho [a mandioca] uma das maiores conquistas do Brasil."] 
    let frases = falas[Math.floor(Math.random() * falas.length)]
console.log
   message.channel.createWebhook(name, avatar).then(async w => {
       await w.send(`${frases}`);
       w.delete()
    })
 }