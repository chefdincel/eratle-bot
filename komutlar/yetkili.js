const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('b8b8b8')
.setAuthor('Eratle', client.user.avatarURL())
.setDescription('**▸ ━━━━━━━━【 Yetkili Komutları 】━━━━━━━━ ◂** \n \n > [./ban](https://discord.gg/uxKnV6QEy5)**・Etiketlenen kullanıcıyı yasaklar.** \n > [./kick](https://discord.gg/uxKnV6QEy5)**・Etiketlenen kişiyi atar.** \n > [./clear](https://discord.gg/uxKnV6QEy5)**・Mesaj temizleme komutu.** \n > [./nuke](https://discord.gg/uxKnV6QEy5)**・Kanaldan bir tane daha oluşturur.** \n > [./snipe](https://discord.gg/uxKnV6QEy5)**・Silinen son mesajı gösterir.** \n > [./unban](https://discord.gg/uxKnV6QEy5)**・Kullanıcının yasaklanmasını kaldırır.** \n > [./girişçıkış](https://discord.gg/uxKnV6QEy5)**・Giriş çıkış sistemi.** \n > [./forceban](https://discord.gg/uxKnV6QEy5)**・ID ile kullanıcı yasaklama sistemi.**')
.setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
.setTimestamp()
//.setImage('https://cdn.discordapp.com/attachments/823485132706414623/828006523421982821/eratlelong.png')
.setThumbnail(message.guild.iconURL({dynamic: true}))
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['yetkili'], 
  permLevel: 0 
};

exports.help = {
  name: 'yetkili',
  description: 'Tüm komutları gösterir.',
  usage: 'yetkili'
};