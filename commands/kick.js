const Discord = require('discord.js');

module.exports = {
    name: "kick",
    description: "Kicks a member from the server",

    async run (client, message, args) {

        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('You can\'t use that!')
        if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send(
				`<a:Ve_ErradoTKF:754787728104620182> | <@${
					message.author.id
				}>, Você precisa ter a permissão de **EXPULSAR_MEMBROS** para poder utilizar este comando.`
			).then(msg => msg.delete({ timeout: 15000 }));
const log = message.guild.channels.cache.get('751062208057966602')
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!args[0]) return message.channel.send(`<a:erro_gelin:754787728104620182>| ${message.author}, Use no formato:\n\> **Ex**: g-kick @user flood no chat`).then(m => m.delete({timeout: 7000}));

        if(!member) return message.channel.send(`<a:atento:749663083676434593> | ${msg.author}, Não consigo encontrar esse usuário. Desculpe :/`).then(m => m.delete({timeout: 7000}));
        if(!member.kickable) return message.channel.send(`<a:erro_gelin:754787728104620182> | ${message.author}, Este usuário não pode ser expulso. Porque é  um mod/administrador ou por ele ter um cargo mais alto que o meu!`).then(m => m.delete({timeout: 7000}));

        if(member.id === message.author.id) return message.channel.send(`|<a:atento:749663083676434593>  ${message.author}, você não pode se expulsar!`).then(m => m.delete({timeout: 6000}));

        let reason = args.slice(1).join(" ");

        if(!reason) reason = 'Não informado';

        member.kick(reason)
        .catch(err => {
            if(err) return message.channel.send('Something went wrong')
        })

        const kickembed = new Discord.MessageEmbed()
       .setTitle('<a:atento:749663083676434593> | Membro - Expulso!')
        .setThumbnail(member.user.displayAvatarURL())
        .addField('<:users:745414008361713775>・Usuário', `Tag: \`${member.user.tag}\`\nID: \`${member.user.id}\``)
        .addField('<:coroinha:761227142696402994>・Autor da punição:', message.author)
        .addField('<:Zxc:745415671223156777>・Motivo:', reason)
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL())
        .setColor('#FF11AC')
        .setTimestamp()
        

        message.channel.send(kickembed).then(m => m.delete({timeout: 13000}));
        let logs = new Discord.MessageEmbed()
       .setTitle('🔨 Sinta o poder do martelo!')
       .setFooter(`${member.user.tag}`, member.user.displayAvatarURL())
       .setColor("#8A2BE2")
       .setDescription(`Um dos poderosos moderadores expulsou \`${member.user.username}\` do servidor.`)
       .setTimestamp()
        log.send(logs)


    }
}