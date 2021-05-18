const Discord = require('discord.js');
const fs = require('fs');

exports.run = (client, message, args) => {

  const db = require('wio.db');
  
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(
    new Discord.MessageEmbed()
  .setColor("912e2e")
  .setAuthor('Eratle | Hata!', client.user.avatarURL())
  .setDescription("Bu işlemi gerçekleştirmek için yeterli yetkiye sahip değilsin.")
  .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
  .setTimestamp()
  );
  
  let user = message.mentions.users.first();
  let reason = args.slice(1).join(' ');

  if (message.mentions.users.size < 1) return message.channel.send(
    new Discord.MessageEmbed()
    .setColor("912e2e")
    .setAuthor('Eratle | Hata!', client.user.avatarURL())
    .setDescription("Hatalı komut kullanımı. Birini etiketlemen gerek. \n Örnek kullanım `./ban [member] [reason]`")
    .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
    .setTimestamp()
    );

  if (reason.length < 1) return message.channel.send(
    new Discord.MessageEmbed()
    .setColor("912e2e")
    .setAuthor('Eratle | Hata!', client.user.avatarURL())
    .setDescription("Hatalı komut kullanımı. Bir sebep girmen gerek. \n Örnek kullanım `./ban [member] [reason]`")
    .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
    .setTimestamp()
    );

  if (user.id === message.author.id) return message.channel.send(
    new Discord.MessageEmbed()
    .setColor("912e2e")
    .setAuthor('Eratle | Hata!', client.user.avatarURL())
    .setDescription("Hatalı komut kullanımı. Kendini yasaklayamazsın. \n Örnek kullanım `./ban [member] [reason]`")
    .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
    .setTimestamp());

  if (!message.guild.member(user).bannable) return message.channel.send(
    new Discord.MessageEmbed()
    .setColor("912e2e")
    .setAuthor('Eratle | Hata!', client.user.avatarURL())
    .setDescription("Verilen yetki, kişiyi yasaklamama yetmiyor. Lütfen daha üst bir yetki verin.")
    .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
    .setTimestamp()
    );
  
  const embed = new Discord.MessageEmbed()
    .setColor("dbdbdb")
    .setAuthor('Eratle | Yasaklandı!', client.user.avatarURL())
    .setDescription(`Yasaklanan Üye : ${user.tag} (${user.id}) \n Yasaklayan Yetkili : ${message.author.username}#${message.author.discriminator} \n Yasaklama Sebebi : ` + reason)
    .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
    .setTimestamp()
  message.channel.send(embed);

  user.send(`\`${message.guild.name}\` adlı sunucudan yasaklandınız. Belirtilen sebep: \`${reason}\``)
  
  message.guild.members.ban(user);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ban'],
  permLevel: 0,
};

exports.help = {
  name: 'ban',
  description: 'İstediğiniz kişiyi sunucudan yasaklar.',
  usage: 'ban <@kullanıcı> <sebep>',
};