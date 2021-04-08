const Discord = require('discord.js');
const moment = require('moment');
const chalk = require('chalk');
const { prefix } = require('../ayarlar.json')

module.exports = client => {
  var durumyazı = [
    "CodeFun",
    ".yardım | CodeFun",
    "V12 Doğruluk Cesaret Altyapısı",
    "https://discord.gg/mJ35rmwNuS"
  ]
  
  setInterval(function() {
    var durum = durumyazı[Math.floor(Math.random() * (durumyazı.length))]
    client.user.setActivity(`${durum}`);

}, 2 * 30000);
  
  client.user.setStatus("online"); //dnd, idle, online, offline
  
}