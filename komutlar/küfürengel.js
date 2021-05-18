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
      .setDescription("Hatalı komut kullanımı. \n Örnek kullanım `./küfürengel aç/kapat`")
      .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
      .setTimestamp())

    if(args[0] === "aç"){
    var anahtar = db.fetch(`eratlekufurengel_${message.guild.id}`)

    if(anahtar === "acik") return message.channel.send(
      new Discord.MessageEmbed()
    .setColor("dbdbdb")
    .setAuthor('Eratle | Küfür Engel Sistemi!', client.user.avatarURL())
    .setDescription("``Küfür engel sistemi halihazırda aktifleştirilmiş.``")
    .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
    .setTimestamp()
    )

    db.set(`eratlekufurengel_${message.guild.id}`, 'acik')
    message.channel.send(
    new Discord.MessageEmbed()
    .setColor("dbdbdb")
    .setAuthor('Eratle | Küfür Engel Sistemi!', client.user.avatarURL())
    .setDescription("``Küfür engel sistemi başarıyla aktifleştirildi.``")
    .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
    .setTimestamp())
    }

    if(args[0] === "kapat") {
      var anahtar = db.fetch(`eratlekufurengel_${message.guild.id}`)
      if(!anahtar) return message.reply(
        new Discord.MessageEmbed()
      .setColor("dbdbdb")
      .setAuthor('Eratle | Küfür Engel Sistemi!', client.user.avatarURL())
      .setDescription("``Küfür engel sistemi halihazırda kapatılmış.``")
      .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
      .setTimestamp())

      db.delete(`eratlekufurengel_${message.guild.id}`)
      message.reply(
      new Discord.MessageEmbed()
    .setColor("dbdbdb")
    .setAuthor('Eratle | Küfür Engel Sistemi!', client.user.avatarURL())
    .setDescription("``Küfür engel sistemi başarıyla kapatıldı.``")
    .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
    .setTimestamp())
    }
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['küfürengel'],
    permLevel: 0
};
  
  exports.help = {
    name: 'küfürengel',
    description: 'Küfür engel',
    usage: 'küfürengel'
};