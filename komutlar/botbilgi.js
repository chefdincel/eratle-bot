const Discord = require("discord.js"); 
const client = new Discord.Client();
const moment = require("moment");
require("moment-duration-format");

module.exports.run = async(client, message, args) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");

    const embed = new Discord.MessageEmbed()
    .setColor(`dbdbdb`)
    .setAuthor(`Eratle | Bot Bilgileri`, client.user.avatarURL())
    .setDescription(`*Merhaba, ben Eratle! 👋🏻 Aşağıda istatistiklerim hakkında bilgi alabilirsin.*\n\n > <:owner:829661540122099722>**・Sahibim :** <@282448035458580480> \n > <:ping:829463000384798760>**・Gecikme : **` + client.ws.ping + `ms \n > <:plus:829463000306024478>**・Çalışma Süresi : **` + `${duration} \n > <:audience:829462999261118486>**・Kullanıcılar : **` + client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0) + `\n > <:channel:829462999798120478>**・Kanallar : **` + client.channels.cache.size + `\n > <:growth:829661539501473833>**・Sunucular : **` + client.guilds.cache.size + `\n > <:gamedev:829462999940464710>**・Bellek Kullanımı : **` + (process.memoryUsage().heapUsed / 2048 / 2048).toFixed(2) + ` MB` + `\n > <:coding:829462999818960957>**・Kütüphanesi : ** discord.js \n > :cd:**・Discord.js Sürümü : **` + Discord.version + `\n > <:discordbadge:829462999801790485>**・25.03.2021** \n \n > ➦ [*Davet Bağlantım*](http://bit.ly/eratlebot) *・* [*Destek Sunucum*](http://discord.io/eratle)`)
    .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
    //.setImage('https://cdn.discordapp.com/attachments/823485132706414623/827912562833227806/eratle.gif')
    .setTimestamp()
    //.setThumbnail(client.user.avatarURL())
    message.channel.send(embed);
}
exports.conf = {
  enabled: true,
    guildOnly: true,
  aliases: ['botbilgi', 'botinfo'],
  permLevel: 0
};

exports.help = {
  name: 'botbilgi',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'botbilgi'
};