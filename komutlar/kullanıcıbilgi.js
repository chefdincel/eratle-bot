const Discord = require('discord.js')
const moment = require('moment')
const client = new Discord.Client();

exports.run = async (bot, msg, args) => {
 
        let simdikitarih = moment.utc(msg.createdAt).format('DD MM YYYY');
  
        let user = msg.mentions.users.first() || msg.author;
 
        let userinfo = {};
        userinfo.avatar= user.displayAvatarURL;
        userinfo.id = user.id;
        userinfo.od1 = msg.guild.members.cache.get(user.id).user.presence.game || "Oynadığı bir oyun yok."
        userinfo.status = user.presence.status.toString()

        .replace("dnd", `Rahatsız Etmeyin`)
        .replace("online", `Çevrim içi`)
        .replace("idle", `Boşta`)
        .replace("offline", `Çevrim dışı`)
        userinfo.bot = user.bot.toString()
        .replace("false", `Hayır`)
        .replace("true", `Evet`)

        userinfo.sonmesaj = user.lastMessage || "Son yazılan mesaj bulunamadı." || "Son yazılan mesaj gösterilemedi."
  
        userinfo.dctarih = moment.utc(msg.guild.members.cache.get(user.id).user.createdAt).format('*YYYY [yılında] MMMM [ayında] dddd [gününde] (DD/MM/YYYY)*')
  
        .replace("Monday", `Pazartesi`)
        .replace("Tuesday", `Salı`)
        .replace("Wednesday", `Çarşamba`)
        .replace("Thursday", `Perşembe`)
        .replace("Friday", `Cuma`)
        .replace("Saturday", `Cumartesi`)
        .replace("Sunday", `Pazar`)
        .replace("January", `Ocak`)
        .replace("February", `Şubat`)
        .replace("March", `Mart`)
        .replace("April", `Nisan`)
        .replace("May", `Mayıs`)
        .replace("June", `Haziran`)
        .replace("July", `Temmuz`)
        .replace("August", `Ağustos`)
        .replace("September", `Eylül`)
        .replace("October", `Ekim`)
        .replace("November", `Kasım`)
        .replace("December", `Aralık`)
  
        userinfo.dctarihkatilma = moment.utc(msg.guild.members.cache.get(user.id).joinedAt).format('*YYYY [yılında] MMMM [ayında] dddd [gününde] (DD/MM/YYYY)*')
 
        .replace("Monday", `Pazartesi`)
        .replace("Tuesday", `Salı`)
        .replace("Wednesday", `Çarşamba`)
        .replace("Thursday", `Perşembe`)
        .replace("Friday", `Cuma`)
        .replace("Saturday", `Cumartesi`)
        .replace("Sunday", `Pazar`)
        .replace("January", `Ocak`)
        .replace("February", `Şubat`)
        .replace("March", `Mart`)
        .replace("April", `Nisan`)
        .replace("May", `Mayıs`)
        .replace("June", `Haziran`)
        .replace("July", `Temmuz`)
        .replace("August", `Ağustos`)
        .replace("September", `Eylül`)
        .replace("October", `Ekim`)
        .replace("November", `Kasım`)
        .replace("December", `Aralık`)

        const eratlembed = new Discord.MessageEmbed()
        .setColor('dbdbdb')
        .setTimestamp()
        .setThumbnail(user.avatarURL({dynamic: true}))
        .setAuthor(user.tag + ' | Kullanıcı Bilgileri', user.avatarURL({dynamic: true}))
        .setDescription(`> <a:discordloading:829462906051362816>・**Katılım Tarihi (Discord)** \n > ➥ ` + userinfo.dctarih + `\n > <:growth:829661539501473833>・**Katılım Tarihi (Sunucu)** \n > ➥ ` + userinfo.dctarihkatilma + `\n > <:mobile:829661539765977198>・**Durumu : **` + userinfo.status + `\n > <:gamedev:829462999940464710>・**Şu anda oynadığı oyun : **` + userinfo.od1 + `\n > <:earlyverifiedbotdeveloper:829463000083202068>・**Bot mu? : **` + userinfo.bot + `\n > <:attachment:829462999324164097>・**ID : **` + userinfo.id + `\n > <:channel_lock:829462999492198421>・**Son Gönderdiği Mesaj ID : **` + userinfo.sonmesaj + `\n > <:stage:829463000389386302>・**Sahip Olduğu Roller : **` + `${msg.guild.members.cache.get(user.id).roles.cache.filter(r => r.name !== "@everyone").map(r => r).join('・') || "*Bu kullanıcıda hiç rol bulunmuyor!"}`)
        .setFooter(`Komut ` + msg.author.tag + ` tarafından çağırıldı.`, msg.author.avatarURL({dynamic: true}))
        msg.channel.send(eratlembed)
    }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['userinfo','kullanıcıbilgi'],
  permLevel: 0
};
exports.help = {
  name: 'kullanıcıbilgi',
  description: '',
  usage: 'kullanıcıbilgi'
};