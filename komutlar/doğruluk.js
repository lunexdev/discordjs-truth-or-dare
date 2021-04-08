const Discord = require("discord.js");
let kelime = require('../kelimeler/doğruluk.json');
const doğruluk = kelime.doğruluk



exports.run = async(client , message, args) =>{
    
    let kelimeler = doğruluk[Math.floor(Math.random() * doğruluk.length)]; 
    const codefun = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`*${kelimeler}*`)
    .setDescription(`*Lütfen Doğruluk Sorusunu Cevaplayınız*`)
    .setAuthor(`${message.author.tag}`)
    .setThumbnail(`${message.author.avatarURL()}`)

    message.channel.send(codefun)
}

exports.conf ={
    "aliases": ["doğruluk", "dogruluk" , "doğru" , "d"],
    "permLevel": "0"
}

exports.help = {
    "name": "doğruluk",
    "description": "doğruluk",
    "usage": ".doğruluk"
}