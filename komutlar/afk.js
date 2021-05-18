const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json');
const fs = require('fs');
const db = require("wio.db")
exports.run = async (bot , message, args) => {

  let reason = args.slice(0).join(' ') 
  if(!reason) return message.reply("``Sebep belirtmelisin!``")
      setTimeout(function(){

  db.set(`afk_${message.author.id}, ${message.guild.id}`, reason)
  
  db.set(`afk-zaman_${message.author.id}, ${message.guild.id}`, Date.now())
      },500)
const dcs = new Discord.MessageEmbed()
.setColor("dbdbdb")
.setAuthor("Eratle | AFK Bildirim Menüsü", message.author.avatarURL({dynamic:true}))
.setDescription("``Merhaba, ben Eratle! 👋🏻`` \n\n **" + message.guild.name + "** *sunucusunda başarıyla AFK moda geçiş yaptınız.* \n \n ``İşlerinizi halledip gelin, burada sizi bekliyor olacağız. AFK moddan çıkış yapmak için herhangi bir yere bir yazı yazmanız yeterli olacaktır.`` \n \n > ``AFK Mod Sebep : " + reason + "``")
//.setDescription("> ➥ **Eratle AFK Sistemi'ne Hoş Geldiniz!** \n \n > " + message.guild.name + " Sunucusunda başarıyla AFK moda geçiş yaptınız. \n \n *İşlerinizi halledin ve geri gelin, burada sizi bekliyor olacağız :)* \n > ➥ AFK kalma sebebiniz : '*" + reason + "*'")
.setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
.setThumbnail(message.author.avatarURL({dynamic:true}))
.setTimestamp()
  message.channel.send(dcs)
  if(!message.member.nickname) return message.member.setNickname("[AFK] " + message.member.user.username)
  message.member.setNickname("[AFK] " + message.member.nickname).catch(err => console.log(err));
  }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["afk"],
  permLevel: 0
};

exports.help = {
  name: 'afk',
  description: 'Afk Olursunuz.',
  usage: 'afk'
};