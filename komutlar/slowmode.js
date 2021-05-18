const Discord = require('discord.js');

exports.run = async(client, message, args) => {
  if (!message.guild) {
    const ozelmesajuyari = 
    new Discord.MessageEmbed()
    .setColor("912e2e")
    .setAuthor('Eratle | Hata!', client.user.avatarURL())
    .setDescription("`Komutlar, özel mesajlarda kullanılamaz.`")
    .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
    .setTimestamp()
    return message.author.send(ozelmesajuyari); }
  
  if (message.channel.type !== "text") return;
const limit = args[0] ? args[0] : 0;
  if(!limit) {
              var embed = 
              new Discord.MessageEmbed()
              .setColor("912e2e")
              .setAuthor('Eratle | Hata!', client.user.avatarURL())
              .setDescription("Hatalı komut kullanımı. \n Örnek kullanım `./slowmode [saniye]`")
              .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
              .setTimestamp()
            message.channel.send({embed})
            return
          }
if (limit > 21600) {
    return message.channel.send(
      new Discord.MessageEmbed()
      .setColor("912e2e")
      .setAuthor('Eratle | Hata!', client.user.avatarURL())
      .setDescription("Hatalı komut kullanımı. Maksimum 21.600 saniye sınır koyabilirsiniz. \n Örnek kullanım `./slowmode [saniye]`")
      .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
      .setTimestamp()
    )
}
    message.channel.send(new Discord.MessageEmbed()
    .setColor("dbdbdb")
    .setAuthor("Eratle | SlowMode Sistemi", message.author.avatarURL())
    .setDescription(`SlowMode sistemi başarıyla ${limit} saniye olacak şekilde aktifleştirildi. Devredışı bırakmak için ./slowmode sıfırla`)
    .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
    .setTimestamp()
    );
var request = require('request');
request({
    url: `https://discordapp.com/api/v7/channels/${message.channel.id}`,
    method: "PATCH",
    json: {
        rate_limit_per_user: limit
    },
    headers: {
        "Authorization": `Bot ${client.token}`
    },
})};
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["slowmode"],
  permLevel: 2,
};

exports.help = {
  name: 'slowmode',
  description: 'Sohbete yazma sınır (süre) ekler.',
  usage: 'slowmode [1/10]',
};