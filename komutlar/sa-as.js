const db = require('wio.db')
const Discord = require('discord.js')
 
exports.run = async (bot, message, args) => {

  if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(
    new Discord.MessageEmbed()
  .setColor("912e2e")
  .setAuthor('Eratle | Hata!', client.user.avatarURL())
  .setDescription("Bu işlemi gerçekleştirmek için yeterli yetkiye sahip değilsin.")
  .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
  .setTimestamp()
  );

 if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor("912e2e")
    .setAuthor('Eratle | Hata!', client.user.avatarURL())
    .setDescription("`Komutlar, özel mesajlarda kullanılamaz.`")
    .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
    .setTimestamp()
    return message.author.send(ozelmesajuyari); }
  
  if (!args[0]) return message.channel.send(
    new Discord.MessageEmbed()
    .setColor("912e2e")
    .setAuthor('Eratle | Hata!', client.user.avatarURL())
    .setDescription("Hatalı komut kullanımı. \n Örnek kullanım `./sa-as aç/kapat`")
    .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
    .setTimestamp())

  if (args[0] === 'aç') {
    
    db.set(`ssaass_${message.guild.id}`, 'acik')
    message.reply(
      new Discord.MessageEmbed()
    .setColor("dbdbdb")
    .setAuthor('Eratle | Selam Menüsü')
    .setDescription("``Selam menüsü başarıyla aktifleştirildi. Artık Eratle selam verdiğinde karşılık verecek.``")
    .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
    .setTimestamp())
  }
  
  if (args[0] === 'kapat') {
    
    db.set(`ssaass_${message.guild.id}`, 'kapali')
    message.reply(
      new Discord.MessageEmbed()
    .setColor("dbdbdb")
    .setAuthor('Eratle | Selam Menüsü')
    .setDescription("``Selam menüsü başarıyla devredışı bırakıldı. Artık Eratle selam verdiğinde karşılık vermeyecek.``")
    .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
    .setTimestamp())
  }
 
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sa-as'],
  permLevel: 0,
  kategori: "Ayarlar"
};
 
exports.help = {
  name: 'sa-as',
  description: 'Sa As ayarlarsın.',
  usage: 'sa-as'
};