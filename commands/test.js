module.exports.run = (client, message, args) => {
  let msg = args.join(' ')
  let send = `${msg}\n Mensagem enviada por ${message.author}`
message.channel.send(send)
  
}

