const discord = require('discord.js')


exports.run = async(client, message, args) => {

 if (!message.member.hasPermission('MANAGE_NICKNAMES')) return message.channel.send(
  new Discord.MessageEmbed()
.setColor("912e2e")
.setAuthor('Eratle | Hata!', client.user.avatarURL())
.setDescription("Bu işlemi gerçekleştirmek için yeterli yetkiye sahip değilsin.")
.setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
.setTimestamp());
  
let kullanıcı = message.mentions.members.first()
if (!kullanıcı) return message.channel.send(new Discord.MessageEmbed()
.setColor("912e2e")
.setAuthor('Eratle | Hata!', client.user.avatarURL())
.setDescription("Hatalı komut kullanımı. İsmini değiştireceğin kişiyi etiketlemen gerek. \n Örnek kullanım `./nick [@kullanıcı] [yeni-isim]`")
.setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
.setTimestamp())

let isim = args.slice(1).join(' ')
if (!isim) return message.channel.send(new Discord.MessageEmbed()
.setColor("912e2e")
.setAuthor('Eratle | Hata!', client.user.avatarURL())
.setDescription("Hatalı komut kullanımı. Yeni isim belirtmen gerekiyor. \n Örnek kullanım `./nick [@kullanıcı] [yeni-isim]`")
.setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
.setTimestamp())

kullanıcı.setNickname(isim)

message.channel.send(
  new Discord.MessageEmbed()
.setColor("dbdbdb")
.setAuthor('Eratle | Nick Sistemi', client.user.avatarURL())
.setDescription(`${kullanıcı}'nın yeni kullanıcı adı başarıyla ${isim} olarak ayarlandı.`)
.setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
.setTimestamp()
)

}
exports.conf = {
  name: true,
  guildonly: false,
  aliases: ['nick'],
  permlevel: 0
}
exports.help = {
  name: 'nick'
}