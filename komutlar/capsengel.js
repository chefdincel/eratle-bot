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
    .setDescription("Hatalı komut kullanımı. \n Örnek kullanım `./capsengel aç/kapat`")
    .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
    .setTimestamp()
    );

      if(args[0] === "aç"){
    db.set(`eratlecapsengel_${message.guild.id}`, 'acik')
    message.channel.send(
      new Discord.MessageEmbed()
    .setColor("dbdbdb")
    .setAuthor('Eratle | Caps Engel Sistemi Açık!', client.user.avatarURL())
    .setDescription("``Caps engel sistemi başarıyla aktifleştirildi.``")
    .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
    .setTimestamp())
   }

    if(args[0] === "kapat") {
    {db.delete(`eratlecapsengel_${message.guild.id}`)
    message.channel.send(
      new Discord.MessageEmbed()
    .setColor("dbdbdb")
    .setAuthor('Eratle | Caps Engel Sistemi Kapalı!', client.user.avatarURL())
    .setDescription("``Caps engel sistemi başarıyla kapatıldı.``")
    .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
    .setTimestamp())
     }
     }
  
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['capsengel'],
    permLevel: 0
};
  
  exports.help = {
    name: 'capsengel',
    description: 'Caps engel.',
    usage: 'capsengel'
};