const discord = require('discord.js');
const db = require('wio.db');

   exports.run = async(client, message, args) => {
    const mesaj = await db.fetch(`sinip.id.${message.guild.id}`)

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(
      new Discord.MessageEmbed()
    .setColor("912e2e")
    .setAuthor('Eratle | Hata!', client.user.avatarURL())
    .setDescription("Bu işlemi gerçekleştirmek için yeterli yetkiye sahip değilsin.")
    .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
    .setTimestamp()
    );

    if(!mesaj) {

    const virtual = new discord.MessageEmbed()
    .setColor(`912e2e`)
    .setAuthor(`Eratle | Hata!`, silen.avatarURL())
    .setDescription(`Mesaj bulunamadı.`)
    .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
    .setTimestamp()
    message.channel.send(virtual);

          } else {

  let silen = client.users.cache.get(mesaj);
  const mesaj2 = await db.fetch(`sinip.mesaj.${message.guild.id}`)
  const virtualcode = new discord.MessageEmbed()
  .setColor(`6315c1`)
  .setAuthor(`Eratle | Snipe Sistemi`, silen.avatarURL())
  .setDescription(`En Son Silinen Mesaj : ${mesaj2}`)
  .setFooter("Komut " + message.author.tag + " tarafından çağırıldı.", message.author.avatarURL({dynamic: true}))
  .setTimestamp()
  message.channel.send(virtualcode) };
};

exports.conf = {
    enabled:true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
}

exports.help = {
  name: "snipe",
}