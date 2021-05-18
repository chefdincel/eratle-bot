const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('b8b8b8')
.setAuthor('Eratle', client.user.avatarURL())
.setDescription('**▸ ━━━━━━━━【 Moderasyon Komutları 】━━━━━━━━ ◂** \n\n > [./sa-as](https://discord.gg/uxKnV6QEy5)**・Selam sistemi.** \n > [./girişçıkış](https://discord.gg/uxKnV6QEy5)**・Giriş çıkış sistemi.** \n > [./slowmode](https://discord.gg/uxKnV6QEy5)**・Kanalda slowmode devreye girer.** \n > [./capsengel](https://discord.gg/UbDSqWBEjK)**・Büyük harflerle yazmayı engeller.** \n > [./küfürengel](https://discord.gg/uxKnV6QEy5)**・Küfürlü mesaj yazmayı engeller.** \n > [./reklamengel](https://discord.gg/uxKnV6QEy5)**・.gg, discord.gg.. uzantılı mesajlar yazmayı engeller.**')
.setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
.setTimestamp()
//.setImage('https://cdn.discordapp.com/attachments/823485132706414623/828006523421982821/eratlelong.png')
.setThumbnail(client.guild.iconURL({dynamic: true}))
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['moderasyon'], 
  permLevel: 0 
};

exports.help = {
  name: 'moderasyon',
  description: 'Tüm komutları gösterir.',
  usage: 'moderasyon'
};