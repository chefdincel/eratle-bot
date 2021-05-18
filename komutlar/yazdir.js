const Discord = require('discord.js');

exports.run = (client, message, args) => {
  if(message.author.id !== "282448035458580480") return message.reply("Bu komutu sadece sahibim kullanabilir!")
  let mesaj = args.slice(0).join(' ');
  if (mesaj.length < 1) return message.reply('Yazmam için herhangi bir şey yazmalısın.');
  message.delete();
  message.channel.send(mesaj);
};

exports.conf = {
  aliases: ['yazdir'],
  permLevel: 0,
};

exports.help = {
  name: 'yazdir',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: './yazdir [yazdırmak istediğiniz şey]'
};