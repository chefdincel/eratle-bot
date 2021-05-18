const Discord = require("discord.js")
exports.run = async(client, message, args) => {

const embed = new Discord.MessageEmbed()
.setColor("dbdbdb")
.setAuthor("Eratle | Davet Menüsü", client.user.avatarURL())
.setDescription("``Merhaba, ben Eratle! 👋🏻\n\nAşağıdaki linklerden dilersen beni sunucuna dahil edebilir, dilersen benim hakkımda bir sorun olduğunda destek sunucuma gelip, sahibimle görüşebilirsin.``\n\n > ➦ [Destek Sunucum](https://discord.io/eratle)・[Davet Bağlantım](http://bit.ly/eratlebot)")
//.addField("Selam, beni buradan davet edebilirsin", "➦ [-Tıkla-](http://bit.ly/eratlebot)")
.setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
//.setImage()
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed);
  };

  module.exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["davet", "invite"],
    permLevel: 0,
  };

  module.exports.help = {
    name: "davet",
    description: "Davet linki",
    usage: "davet"
  };