const Discord = require("discord.js");

 
module.exports.run = async (client, message, args) => {
 await message.author.createDM()

await message.delete()
const denuncia = client.channels.cache.get('769935111801929739')
 
message.channel.send(`<a:Alegreti:766428781123600424> **|** ${message.author} O processo para denunciar um usuário é feito pelo seu privado, te chamei lá!`).then(m => m.delete({timeout: 17000})) 
    message.author.send(`Qual é o ID do infrator?`).then(msg => {
    
    
        let cp = message.author.dmChannel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})

        .on('collect', c => {
          

            let canal = c.content


                message.author.send(`O que ele fez?`).then(async msg2 => {
const user = await client.users.cache.get(`${canal}`)
const userTag = `${user.tag}`

                    let cl = message.author.dmChannel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})

                    .on('collect', c => {
                      

                        let desc = c.content

                    

                        message.author.send('Onde ocorreu a infração?').then(msg3 => {
  

                            let ck = message.author.dmChannel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})

                            .on('collect', c => {

                             let title = c.content

 

                               

 

                                let embed = new Discord.MessageEmbed()

 
                 .setTitle('<a:atento:749663083676434593> | Denúncia - Recebida!')
                 .setThumbnail(message.author.displayAvatarURL ())  
                 .setColor('#FF11AC')                .addField('👥・Usuário:', `\`${message.author.username}\``) 

       .addField('🐍・Infrator', `\`${userTag}\``)
       .addField('📝・Motivo:', `\`${desc}\``)

                .addField('🌍・Local do ocorrido:', `\`${title}\``)

                
           denuncia.send(embed)
             
        const embed5 = new Discord.MessageEmbed() 
      embed5.setTitle('<a:creio:757383684436394124> | Denúncia Realizada!') 
      embed5.setDescription(`A sua denúncia foi enviado para a verificação ${message.author}, Aguarde algum dos nossos ADM analisar seu caso!`)
      embed5.setThumbnail(message.author.displayAvatarURL())
     embed5.setColor('#8A2BE2')
      message.author.send(embed5)
                            })

                        })

                    })

                })

            

        })

  })

}



 