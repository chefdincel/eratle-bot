const Discord = require("discord.js");
exports.run = async (client, message, args) => {
    if (!message.guild) {
    const ozelmesajuyari = 
    new Discord.MessageEmbed()
    .setColor("912e2e")
    .setAuthor('Eratle | Hata!', client.user.avatarURL())
    .setDescription("`Komutlar, özel mesajlarda kullanılamaz.`")
    .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
    .setTimestamp()
    return message.author.send(ozelmesajuyari); }
  
let istek = args.slice(0).join(' ')
if(!istek) return message.channel.send(
  new Discord.MessageEmbed()
  .setColor("912e2e")
  .setAuthor('Eratle | Hata!', client.user.avatarURL())
  .setDescription("Hatalı komut kullanımı. Bir istek/öneri belirtmen gerek. \n Örnek kullanım `./istek-kod [istek/öneri]`")
  .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
  .setTimestamp())

const embedCrewCode = new Discord.MessageEmbed()
.setColor("dbdbdb")
.setAuthor("Eratle | İstek-Öneri Sistemi", message.author.avatarURL())
.setDescription(`İstek Bildirilen Kanal : ${message.channel.name} \n İstek Bildirilen Sunucu : ${message.guild.name} \n İstek Bildiren Kullanıcı : <@!${message.author.id}> \n İstek-Öneri : ${istek}`)
.setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
.setTimestamp()
client.channels.cache.get('829431239722401932').send(embedCrewCode)
  
message.reply("`İstek kod bildiriminiz gönderildi. ✨`").then(message => message.delete({ timeout: 5000 }));
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["istek-kod", "request-code"],
  permLevel: 0  
};

exports.help = {
  name: 'istek-kod',
  description: 'İstek kodları belirtmeye yarar',
  usage: 'istek-kod <istek>'
}