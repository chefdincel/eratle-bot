const Discord = require("discord.js");
const moment = require("moment");
const useful = require("useful-tools")
const ayarlar = require("../ayarlar.json");

exports.run = (client, message, params) => {
  const tarih = useful.tarih(message.guild.createdTimestamp)
    const sunucubilgi = new Discord.MessageEmbed()
      .setColor("6315c1")
      .setAuthor(message.guild.name + ' | Sunucu Bilgileri', client.user.avatarURL({dynamic: true}))
      .setDescription('> <:owner:829661540122099722>**・Sunucu Sahibi : **<@' + message.guild.owner + '>\n > <:discordlogo:829661539698737162>**・Sunucu Adı : **' + message.guild.name + '\n > <:stage:829463000389386302>**・Sunucu Bölgesi : **' + message.guild.region + '\n > <:store:829661540159717397>**・Sunucu ID : **' + message.guild.id + '\n > <:audience:829462999261118486>**・Üye Sayısı : **' + message.guild.memberCount + '\n > <a:discordhold:829462910622367814>**・Rol Sayısı : **' + message.guild.roles.cache.size + '\n > <:channel:829462999798120478>**・Kanal Sayısı : **' + message.guild.channels.cache.size + '\n > <:earlysupport:829462999864574012> **・Emoji Sayısı : **' + message.guild.emojis.cache.size + '\n > <:vclock:829661541699289118>**・AFK Kanalı : **<#' + message.guild.afkChannel + '>\n > ⏰**・AFK Zaman Aşımı : **' + message.guild.afkTimeout + ' saniye \n > <:engagement:829661539811721256>**・Sistem Mesajları Kanalı : **<#' + message.guild.systemChannel + '>\n > <:hypesquad:829463000175083570>**・Oluşturulma Tarihi : **' + `${tarih}`)
      .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
      .setTimestamp()
      .setThumbnail(message.guild.iconURL({dynamic: true}))
    return message.reply(sunucubilgi);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sunucubilgi", "serverinfo"],
  permLevel: 0
};

exports.help = {
  name: "sunucubilgi",
  description: "Sunucu hakkında bilgi verir.",
  usage: "sunucubilgi"
};