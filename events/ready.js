const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(
    `${client.user.username} : Token aktiflestirildi!`
  );

  client.user.setStatus(`dnd`);
  
  var EratleDurum = [
    "github.com/luvandevx",
    ""
  ];

  setInterval(function() {
    var EratleRandom = Math.floor(Math.random() * (EratleDurum.length - 0 + 1) + 0)

    client.user.setActivity(EratleDurum[EratleRandom], "");
  }, 5000);
};