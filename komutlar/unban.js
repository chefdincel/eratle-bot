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

  if (message.mentions.users.size < 1) return message.reply(
    new Discord.MessageEmbed()
    .setColor("912e2e")
    .setAuthor('Eratle | Hata!', client.user.avatarURL())
    .setDescription("Hatalı komut kullanımı. Birini etiketlemen gerek. \n Örnek kullanım `./unban [member]`")
    .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
    .setTimestamp()
    );

  if (user.id === message.author.id) return message.reply(
    new Discord.MessageEmbed()
    .setColor("912e2e")
    .setAuthor('Eratle | Hata!', client.user.avatarURL())
    .setDescription("Hatalı komut kullanımı. Olmayan bir yasağı kaldıramazsın. \n Örnek kullanım `./unban [member]`")
    .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
    .setTimestamp());

  if (!message.guild.member(user).bannable) return message.channel.send(
    new Discord.MessageEmbed()
    .setColor("912e2e")
    .setAuthor('Eratle | Hata!', client.user.avatarURL())
    .setDescription("Verilen yetki, kişinin yasağını kaldırmaya yetmiyor. Lütfen daha üst bir yetki verin.")
    .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
    .setTimestamp()
    );
  
  const embed = new Discord.MessageEmbed()
    .setColor("6315c1")
    .setAuthor('Eratle | Yasağı Kaldırıldı!', client.user.avatarURL())
    .setDescription(`Kaldırılan Üye : ${user.tag} (${user.id}) \n Kaldıran Yetkili : ${message.author.username}#${message.author.discriminator}`)
    .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
    .setTimestamp()
  message.channel.send(embed);

  user.send(`\`${message.guild.name}\` adlı sunucudaki yasaklandırmanız ${message.author.tag} tarafından kaldırıldı.`)
  
  message.guild.members.unban(user);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['unban'],
  permLevel: 3,
};

exports.help = {
  name: 'unban',
  description: 'İstediğiniz kişiyi sunucudan yasaklar.',
  usage: 'unban <@kullanıcı>',
};