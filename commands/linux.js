const Discord = require('discord.js')

 module.exports.run = async (client, message, args) => {
   message.delete()
   if (message.author.id === '746007271259111534') {
   let name = 'Linux ON'
    let avatar = {avatar: 'https://cdn.discordapp.com/attachments/765302860295569431/768507581429448714/unnamed.jpg'} //se quiser colocar um avatar pro webhook
    var falas = ["Que tipo de computador está bombando nas redes sociais?\n\> **R**: O deskTOP", "Qual doença se pode pegar ao usar notebook?\n\> **R**: A LAPTOPspirose", "O que uma impressora falou para a outra?\n\> **R**: Essa folha aí no chão é sua, ou é impressão minha?"] 
    let frases = falas[Math.floor(Math.random() * falas.length)]
console.log
   message.channel.createWebhook(name, avatar).then(async w => {
     await w.send(`${frases}`);
        w.delete()
    })
 }} 