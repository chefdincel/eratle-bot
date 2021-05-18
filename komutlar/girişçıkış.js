const Discord = require('discord.js')
const db = require('wio.db')
const ayarlar = require('../ayarlar.json')
 
exports.run = async (client, message, args) => {

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed()
  .setColor("912e2e")
  .setAuthor('Eratle | Hata!', client.user.avatarURL())
  .setDescription("Bu işlemi gerçekleştirmek için yeterli yetkiye sahip değilsin.")
  .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
  .setTimestamp())
  
  const sayacsayi = await db.fetch(`sayac_${message.guild.id}`);
  const sayackanal = message.mentions.channels.first()
      
  if(args[0] !== "ayarla" && args[0] !== "sıfırla") return message.channel.send(
    new Discord.MessageEmbed()
    .setColor("912e2e")
    .setAuthor('Eratle | Hata!', client.user.avatarURL())
    .setDescription("Hatalı komut kullanımı. \n Örnek kullanım `./girişçıkış ayarla [sayı] #kanal`")
    .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
    .setTimestamp())
    if(args[0] === "sıfırla") {
    if(!sayacsayi) {
      message.channel.send(
        new Discord.MessageEmbed()
        .setColor("912e2e")
        .setAuthor('Eratle | Hata!', client.user.avatarURL())
        .setDescription(`Hatalı komut kullanımı. Ayarlanmayan şey sıfırlanamaz.`)
        .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
        .setTimestamp())
return
    }
    
    db.delete(`sayac_${message.guild.id}`)
    db.delete(`sayacK_${message.guild.id}`)
    message.channel.send(
      new Discord.MessageEmbed()
    .setColor("dbdbdb")
    .setAuthor('Eratle | Giriş-Çıkış Sistemi Menüsü', client.user.avatarURL())
    .setDescription(`Giriş-Çıkış sistemi başarıyla sıfırlandı.`)
    .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
    .setTimestamp())
    return
  }
  
  if(args[0] === "ayarla") {
  if(isNaN(args[1])) {
    message.channel.send(
      new Discord.MessageEmbed()
      .setColor("912e2e")
      .setAuthor('Eratle | Hata!', client.user.avatarURL())
      .setDescription("`Hatalı komut kullanımı. Bir sayı belirtmelisin. \n Örnek kullanım `./girişçıkış ayarla [sayı] #kanal`")
      .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
      .setTimestamp())
    return
  }

 if(!sayackanal) {
   await message.channel.send(
    new Discord.MessageEmbed()
    .setColor("912e2e")
    .setAuthor('Eratle | Hata!', client.user.avatarURL())
    .setDescription("`Hatalı komut kullanımı. Bir kanal etiketlemen gerekmektedir. \n Örnek kullanım `./girişçıkış ayarla [sayı] #kanal`")
    .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
    .setTimestamp())
  return
  }
        if(args[1] <= message.guild.memberCount) {
                message.channel.send(
                  new Discord.MessageEmbed()
                  .setColor("912e2e")
                  .setAuthor('Eratle | Hata!', client.user.avatarURL())
                  .setDescription(`Hatalı komut kullanımı. Sunucudaki kullanıcı sayısından (${message.guild.memberCount}) daha yüksek bir değer girmelisin.`)
                  .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
                  .setTimestamp())
                return
        }
  
  db.set(`sayac_${message.guild.id}`, args[1])
  db.set(`sayacK_${message.guild.id}`, sayackanal.id)
  message.channel.send(
    new Discord.MessageEmbed()
  .setColor("dbdbdb")
  .setAuthor('Eratle | Giriş-Çıkış Sistemi Menüsü', client.user.avatarURL())
  .setDescription(`Giriş-Çıkış sistemi başarıyla aktifleştirildi. Giriş-Çıkış sayısı ${args[1]} olarak, giriş-çıkış kanalı ise ${sayackanal} olarak ayarlandı`)
  .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
  .setTimestamp())
}
}
 
exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: ['girişçıkış'],
        permLevel: 0
}
 
exports.help = {
        name: 'girişçıkış',
        description: 'Giriş Çıkışı ayarlar.',
        usage: 'girişçıkış ayarla <sayı> <#kanal> / sıfırla'
}