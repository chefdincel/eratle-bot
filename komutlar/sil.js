const Discord = require("discord.js");
exports.run = function(client, message, args) {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) {
    const embed = new Discord.MessageEmbed()
      .setColor("912e2e")
      .setAuthor('Eratle | Hata!', client.user.avatarURL())
      .setDescription(`<a:typing2:829462906638827570>・Ne yazık ki bu komutu kullanmaya yetkin yok!`)
      .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
      .setTimestamp()
      //.setThumbnail(message.author.avatarURL({dynamic: true}))
      //.setImage('https://cdn.discordapp.com/attachments/823485132706414623/828006523421982821/eratlelong.png')
    message.channel.send(embed);
    return;
  }
  if (!args[0]) {
    const embed = new Discord.MessageEmbed()
      .setColor("912e2e")
      .setAuthor('Eratle | Hata!', client.user.avatarURL())
      .setDescription(`<:engagement:829661539811721256>・Lütfen silinecek mesaj sayısını belirtiniz.`)
      .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
      .setTimestamp()
      //.setThumbnail(message.author.avatarURL({dynamic: true}))
      //.setImage('https://cdn.discordapp.com/attachments/823485132706414623/828006523421982821/eratlelong.png')
    message.channel.send(embed);
    return;
  }
  if (args[0] > 100) {
    const embed = new Discord.MessageEmbed()
      .setColor("912e2e")
      .setAuthor('Eratle | Hata!', client.user.avatarURL())
      .setDescription(`<:ping:829463000384798760>・Ne yazık ki 100'den fazla mesaj silemem.`)
      .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
      .setTimestamp()
      //.setThumbnail(message.author.avatarURL({dynamic: true}))
      //.setImage('https://cdn.discordapp.com/attachments/823485132706414623/828006523421982821/eratlelong.png')
    message.channel.send(embed);
    return;
  }
  message.channel.bulkDelete(args[0]).then(() => {
    const embed = new Discord.MessageEmbed()
      .setColor("dbdbdb")
      .setAuthor('Eratle | Mesaj Sistemi', client.user.avatarURL())
      .setDescription(`> ➥ Temizleyen Yetkili : <@` + message.author.id + `> \n > ➥ Silinen Mesaj Sayısı : ` + args[0])
      .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
      .setTimestamp()
      //.setThumbnail(message.author.avatarURL({dynamic: true}))
      //.setImage('https://cdn.discordapp.com/attachments/823485132706414623/828006523421982821/eratlelong.png')
    message.channel.send(embed).then(msg => msg.delete(5000));
  });
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["clear"],
  permLevel: 0
};

exports.help = {
  name: "clear",
  description: "Mesaj Siler",
  usage: "clear <mesajSayısı>"
};