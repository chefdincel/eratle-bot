const Discord = require("discord.js")

exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(
        new Discord.MessageEmbed()
      .setColor("912e2e")
      .setAuthor('Eratle | Hata!', client.user.avatarURL())
      .setDescription("Bu işlemi gerçekleştirmek için yeterli yetkiye sahip değilsin.")
      .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
      .setTimestamp()
      )

    let wen = args[0];
    if(wen == message.author.id) return message.channel.send(
    new Discord.MessageEmbed()
    .setColor("912e2e")
    .setAuthor('Eratle | Hata!', client.user.avatarURL())
    .setDescription("Hatalı komut kullanımı. Kendini yasaklayamazsın. \n Örnek kullanım `./forceban [id] [reason]`")
    .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
    .setTimestamp()
    )

    let samita = args.slice(1).join(" ");
    if(isNaN(wen)) return message.channel.send(
        new Discord.MessageEmbed()
        .setColor("912e2e")
        .setAuthor('Eratle | Hata!', client.user.avatarURL())
        .setDescription("Hatalı komut kullanımı. Bir ID belirtmen gerek. \n Örnek kullanım `./forceban [id] [reason]`")
        .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
        .setTimestamp()
        )

    if(message.guild.members.cache.get(wen)) {
        let neiva = message.guild.members.cache.get(wen);
        if(neiva.hasPermission("BAN_MEMBERS")) return message.channel.send(
            new Discord.MessageEmbed()
            .setColor("912e2e")
            .setAuthor('Eratle | Hata!', client.user.avatarURL())
            .setDescription("Verilen/sahip olduğun yetki, kişiyi yasaklamama yetmiyor. Lütfen daha üst bir yetki verin.")
            .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
            .setTimestamp()
            )
            
        message.guild.members.ban(wen, { reason: samita})
        .then(() => message.channel.send(new Discord.MessageEmbed()
        .setColor("dbdbdb")
        .setAuthor('Eratle | Yasaklandı!', client.user.avatarURL())
        .setDescription(`Yasaklanan Üye : ${neiva.username}#${neiva.discriminator} \n Yasaklayan Yetkili : ${message.author.username}#${message.author.discriminator} \n Yasaklama Sebebi : ${samita}`)
        .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
        .setTimestamp()))
        //.then(() => message.channel.send(`**${neiva.username}#${neiva.discriminator}** sunucudan başarıyla yasaklandı! Sebep: ${samita}`)) //by WenSamita Neiva
        .catch(e => {
            console.log(e)
        })
    } else {
        message.guild.members.ban(wen, { reason: samita})
        .then(() => message.channel.send(new Discord.MessageEmbed()
        .setColor("dbdbdb")
        .setAuthor('Eratle | Yasaklandı!', client.user.avatarURL())
        .setDescription(`Yasaklanan Üyenin ID'si : ${wen} \n Yasaklayan Yetkili : ${message.author.username}#${message.author.discriminator} \n Yasaklama Sebebi : ${samita}`)
        .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
        .setTimestamp()))
        //.then(() => message.channel.send(`**${wen}** IDli kullanıcı sunucudan başarıyla yasaklandı! Sebep: ${samita}`)) //by WenSamita Neiva
        .catch(e => {
            if(e == "DiscordAPIError: Unknown User") message.reply(
                new Discord.MessageEmbed()
                .setColor("912e2e")
                .setAuthor('Eratle | Hata!', client.user.avatarURL())
                .setDescription("Hatalı komut kullanımı. Bu ID'ye sahip bir kullanıcı bulunamadı. \n Örnek kullanım `./forceban [id] [reason]`")
                .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
                .setTimestamp())
            else console.log(e)
        })
    }
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'forceban',
    description: '',
    usage: 'forceban'
};