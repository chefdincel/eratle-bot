const Discord = require('discord.js')

exports.run = async (client, msg, args) => {
  let yazıtura=[
    "Yazı",
    "Tura"
  ]
var para = yazıtura[Math.floor(Math.random() * yazıtura.length)];

exports.run = (client, message, args) => {

  let yazıİçeriği = args.slice().join(' ')
  msg.channel.send('Yazı mı Tura mı?')
  .then(nmsg => nmsg.edit(
    new Discord.MessageEmbed()
  .setColor("b8b8b8")
  .setDescription("Yazı mı Tura mı?")
  .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
  .setTimestamp()))
  .then(nmsg => nmsg.edit(
    new Discord.MessageEmbed()
  .setColor("b8b8b8")
  .setDescription("Yazı mı Tura mı?")
  .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
  .setTimestamp()))
  .then(nmsg => nmsg.edit(
    new Discord.MessageEmbed()
  .setColor("b8b8b8")
  .setDescription("Yazı mı Tura mı?")
  .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
  .setTimestamp()))
  .then(nmsg => nmsg.edit(
    new Discord.MessageEmbed()
  .setColor("b8b8b8")
  .setDescription("Yazı mı Tura mı?")
  .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
  .setTimestamp()))
  .then(nmsg => nmsg.edit(
    new Discord.MessageEmbed()
  .setColor("b8b8b8")
  .setDescription("Yazı mı Tura mı?")
  .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
  .setTimestamp()))
  .then(nmsg => nmsg.edit(
    new Discord.MessageEmbed()
  .setColor("b8b8b8")
  .setDescription("Yazı mı Tura mı?")
  .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
  .setTimestamp()))
  .then(nmsg => nmsg.edit(
    new Discord.MessageEmbed()
  .setColor("b8b8b8")
  .setDescription("Yazı mı Tura mı?")
  .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
  .setTimestamp()))
  .then(nmsg => nmsg.edit(
    new Discord.MessageEmbed()
  .setColor("b8b8b8")
  .setDescription("Yazı mı Tura mı?")
  .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
  .setTimestamp()))
  .then(nmsg => nmsg.edit('https://64.media.tumblr.com/1e44de7f02e71d30c66fed615a6803b1/tumblr_inline_pagvo01aaQ1ttj61q_640.gif'))
  .then(nmsg => nmsg.edit('https://64.media.tumblr.com/1e44de7f02e71d30c66fed615a6803b1/tumblr_inline_pagvo01aaQ1ttj61q_640.gif'))
  .then(nmsg => nmsg.edit('https://64.media.tumblr.com/1e44de7f02e71d30c66fed615a6803b1/tumblr_inline_pagvo01aaQ1ttj61q_640.gif'))
  .then(nmsg => nmsg.edit(`**${para}** çıktı`)) 
}

  }
  


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
 };
 
exports.help = {
  name: 'yazıtura',
  description: 'Yazı-Tura komutu.',
  usage: 'yazıtura'
 }