const Discord = require("discord.js");
let kelime = require('../kelimeler/18.json');
const kelimeler = kelime.kelimeler

exports.run = async(client , message, args) =>{
    let kelime = kelimeler[Math.floor(Math.random() * kelimeler.length)]; 
    const codefun = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`*${kelime}*`)
    .setDescription(`*Lütfen +18 Sorusunu Cevaplayınız*`)
    .setAuthor(`${message.author.tag}`)
    .setThumbnail(`${message.author.avatarURL()}`)

    message.channel.send(codefun)
}

exports.conf ={
    "aliases": ["18", "artı18"],
    "permLevel": "0"
}

exports.help = {
    "name": "+18",
    "description": "+18",
    "usage": ".18"
}