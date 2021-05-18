const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('b8b8b8')
.setAuthor('Eratle', client.user.avatarURL())
.setDescription("**▸ ━━━━━【 Kullanıcı Komutları 】━━━━━ ◂** \n\n > [./afk](https://discord.gg/UbDSqWBEjK)**・Afk moda geçiş yaparsınız.** \n > [./davet](https://discord.gg/UbDSqWBEjK)**・Eratle'nin bağlantılarına erişirsiniz.** \n > [./avatar](https://discord.gg/UbDSqWBEjK)**・Avatar önizlersiniz.**  \n > [./kasa-aç](https://discord.gg/UbDSqWBEjK)**・Kasa açarsınız.** \n [./yazıtura](https://discord.gg/UbDSqWBEjK)**・Yazı tura atarsınız.** \n > [./bugbildir](https://discord.gg/UbDSqWBEjK)**・Bug bildirirsiniz.** \n > [./sunucubilgi](https://discord.gg/UbDSqWBEjK)**・Sunucu hakkında bilgi alırsınız.** \n > [./coronabilgi](https://discord.gg/UbDSqWBEjK)**・Virüs hakkında bilgi alırsınız.** \n > [./deprembilgi](https://discord.gg/UbDSqWBEjK)**・Depremler hakkında bilgi alırsınız.** \n > [./kullanıcıbilgi](https://discord.gg/UbDSqWBEjK)**・Kullanıcı hakkında bilgi alırsınız.**")
.setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
.setTimestamp()
.setThumbnail(message.guild.iconURL({dynamic: true}))
.setImage('https://cdn.discordapp.com/attachments/829442499587997749/835490051030646794/Eratle_Banner.gif')
message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['kullanıcı'], 
  permLevel: 0 
};

exports.help = {
  name: 'kullanıcı',
  description: 'Kullanıcı komutları gösterir.',
  usage: 'kullanıcı'
};