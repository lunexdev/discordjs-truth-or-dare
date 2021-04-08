const Discord = require("discord.js");
let kelime = require('../kelimeler/cesaret.json');
const kelimeler = kelime.cesaret

exports.run = async(client , message, args) =>{
    let cesaret = kelimeler[Math.floor(Math.random() * kelimeler.length)]; 
    const codefun = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`*${cesaret}*`)
    .setDescription(`*Lütfen Cesaret Sorusunu Cevaplayınız*`)
    .setAuthor(`${message.author.tag}`)
    .setThumbnail(`${message.author.avatarURL()}`)

    message.channel.send(codefun)
}

exports.conf ={
    "aliases": ["cesaret" , "c"],
    "permLevel": "0"
}

exports.help = {
    "name": "cesaret",
    "description": "cesaret komutu",
    "usage": ".cesaret"
}