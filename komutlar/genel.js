const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('b8b8b8')
.setAuthor('Eratle', client.user.avatarURL())
.setDescription("➯ Eratle'yi kullanmak için sahip olmanız gereken bilgilere buradan erişebilirsiniz. Bot kullanımında bir sorun fark ettiğiniz anda [./bugbildir](https://discord.gg/uxKnV6QEy5) ile bildirmeyi veya [mert#7777](https://discord.gg/uxKnV6QEy5)'ye PM üzerinden ulaşmayı unutmayınız. \n\n **▸ ━━━━━━━━━【 Genel Komutlar 】━━━━━━━━━ ◂** \n\n > [./yetkili](https://discord.gg/UbDSqWBEjK)**・Yetkili menüsünü görüntülersiniz.** \n > [./botbilgi](https://discord.gg/UbDSqWBEjK)**・Bot hakkında bilgi alırsınız.** \n > [./kullanıcı](https://discord.gg/UbDSqWBEjK)**・Kullanıcı menüsünü görüntülersiniz.** \n > [./moderasyon](https://discord.gg/UbDSqWBEjK)**・Moderasyon menüsünü görüntülersiniz.** \n\n <:ping:829463000384798760>**・Yenilikler** \n > Bot menüleri ve tüm komutlar güncelleştirildi. \n\n <a:partnerold:829462905748455436>**・Bağlantılar** \n > ➦ [*Davet Bağlantım*](http://bit.ly/eratlebot) *・* [*Destek Sunucum*](https://discord.io/eratle)")
.setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
.setTimestamp()
.setThumbnail(message.guild.iconURL({dynamic: true}))
//.setImage('https://cdn.discordapp.com/attachments/823485132706414623/828006523421982821/eratlelong.png')
message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['genel'], 
  permLevel: 0 
};

exports.help = {
  name: 'genel',
  description: 'Genel komutları gösterir.',
  usage: 'genel'
};