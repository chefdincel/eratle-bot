const db = require('wio.db');
const Discord = require('discord.js')

exports.run = (client, message, args, func) => {

  
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(
    new Discord.MessageEmbed()
  .setColor("912e2e")
  .setAuthor('Eratle | Hata!', client.user.avatarURL())
  .setDescription("Bu işlemi gerçekleştirmek için yeterli yetkiye sahip değilsin.")
  .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
  .setTimestamp()
  );
  
    if(!args[0]) return message.channel.send(
      new Discord.MessageEmbed()
    .setColor("912e2e")
    .setAuthor('Eratle | Hata!', client.user.avatarURL())
    .setDescription("Hatalı komut kullanımı. \n Örnek kullanım `./reklamengel aç/kapat`")
    .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
    .setTimestamp()
    )

      if(args[0] === "aç"){
    var anahtar = db.fetch(`eratlereklamengel_${message.guild.id}`)
    if(anahtar === "acik") return message.channel.send(
      new Discord.MessageEmbed()
    .setColor("912e2e")
    .setAuthor('Eratle | Hata!', client.user.avatarURL())
    .setDescription(`Reklam engel sistemi halihazırda aktifleştirilmiş.`)
    .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
    .setTimestamp()
    )

    db.set(`eratlereklamengel_${message.guild.id}`, 'acik')
    message.channel.send(
      new Discord.MessageEmbed()
    .setColor("dbdbdb")
    .setAuthor('Eratle | Reklam Engel Sistemi Menüsü', client.user.avatarURL())
    .setDescription(`Reklam engel sistemi başarıyla aktifleştirildi.`)
    .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
    .setTimestamp()
    )
   }
    if(args[0] === "kapat") {
      var anahtar = db.fetch(`eratlereklamengel_${message.guild.id}`)
      if(!anahtar) return message.channel.send(
        new Discord.MessageEmbed()
      .setColor("912e2e")
      .setAuthor('Eratle | Hata!', client.user.avatarURL())
      .setDescription(`Reklam engel sistemi halihazırda devredışı.`)
      .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
      .setTimestamp()
      )
      db.delete(`eratlereklamengel_${message.guild.id}`)
      message.channel.send(
        new Discord.MessageEmbed()
      .setColor("dbdbdb")
      .setAuthor('Eratle | Reklam Engel Sistemi Menüsü', client.user.avatarURL())
      .setDescription(`Reklam engel sistemi başarıyla devredışı bırakıldı.`)
      .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
      .setTimestamp())
          
     
    }
     
 
  
  
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['reklamengel'],
    permLevel: 0
};
  
  exports.help = {
    name: 'reklamengel',
    description: 'Reklam engel.',
    usage: 'reklamengel'
};