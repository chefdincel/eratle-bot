const Discord = require('discord.js');
const fs = require('fs');

exports.run = (client, message, args) => {

  const db = require('wio.db');
  
  if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply(
    new Discord.MessageEmbed()
  .setColor("912e2e")
  .setAuthor('Eratle | Hata!', client.user.avatarURL())
  .setDescription("Bu işlemi gerçekleştirmek için yeterli yetkiye sahip değilsin.")
  .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
  .setTimestamp()
  )
  
  let user = message.mentions.users.first();

  if (message.mentions.users.size < 1) return message.reply(
    new Discord.MessageEmbed()
    .setColor("912e2e")
    .setAuthor('Eratle | Hata!', client.user.avatarURL())
    .setDescription("Hatalı komut kullanımı. Birini etiketlemen gerek. \n Örnek kullanım `./kick [member]`")
    .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
    .setTimestamp()
    );

  if (user.id === message.author.id) return message.reply(
    new Discord.MessageEmbed()
    .setColor("912e2e")
    .setAuthor('Eratle | Hata!', client.user.avatarURL())
    .setDescription("Hatalı komut kullanımı. Kendini atamazsın. \n Örnek kullanım `./kick [member]`")
    .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
    .setTimestamp());

  if (!message.guild.member(user).bannable) return message.channel.send(
    new Discord.MessageEmbed()
    .setColor("912e2e")
    .setAuthor('Eratle | Hata!', client.user.avatarURL())
    .setDescription("Verilen yetki, kişiyi atmama yetmiyor. Lütfen daha üst bir yetki verin.")
    .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
    .setTimestamp()
    );
  
  const embed = new Discord.MessageEmbed()
    .setColor("6315c1")
    .setAuthor('Eratle | Atıldı!', client.user.avatarURL())
    .setDescription(`Atılan Üye : ${user.tag} (${user.id}) \n Atan Yetkili : ${message.author.username}#${message.author.discriminator}`)
    .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
    .setTimestamp()
  message.channel.send(embed);

  user.send(`\`${message.guild.name}\` adlı sunucudan atıldınız.`)
  
  message.guild.members.kick(user);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kick'],
  permLevel: 3,
};

exports.help = {
  name: 'kick',
  description: 'İstediğiniz kişiyi sunucudan yasaklar.',
  usage: 'kick <@kullanıcı>',
};