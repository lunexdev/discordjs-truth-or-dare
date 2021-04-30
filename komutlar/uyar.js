const Discord = require('discord.js');
const { JsonDatabase } = require("wio.db");
const  db  = new JsonDatabase("database.json");
const ayarlar = require("../ayarlar.json")
var prefix = ayarlar.prefix

exports.run = async (client, message, args) => {
    const kullanım = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`${message.author.tag}`)
    .setTitle(`:x: Hatalı Kullanım`)
    .setDescription(`${prefix}uyarı ekle/sil/bilgi Komutlarını Kullan!`)
    .setThumbnail(`${message.author.avatarURL()}`)    

    const yetki = new Discord.MessageEmbed()
    .setColor("RED")
    .setTitle("Hata!")
    .setDescription("Bu Komutu Kullanmaya Yetkin Yok!")

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(yetki)
if(!args[0]) return message.channel.send(kullanım)


if(args[0] === 'ekle') {
let kullanıcı = message.mentions.users.first()
const etiketle = new Discord.MessageEmbed()
.setColor("RED")
.setTitle("Hata!")
.setDescription("Lütfen Bir Kişiyi Etiketle!")
if(!args[1]) return message.channel.send(etiketle)
const botuyaramazsın = new Discord.MessageEmbed()
.setColor("RED")
.setTitle("Hata!")
.setDescription("Botları Uyaramazsın!")
if(kullanıcı.bot) return message.channel.send(botuyaramazsın)
const kendi = new Discord.MessageEmbed()
.setColor("RED")
.setTitle("Hata!")
.setDescription("Kendini Uyaramazsın!")
if(kullanıcı.id === message.author.id) return message.channel.send(kendi)
let reason = args.slice(2).join(' ')

db.add(`uyarı.${message.guild.id}.${kullanıcı.id}`, +1)
const syı = await db.fetch(`uyarı.${message.guild.id}.${kullanıcı.id}`)

if(!reason) {
    const uyarıldısebepsiz = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setTitle("Başarılı")
    .setDescription(`${kullanıcı}, Başarıyla Uyarıldı!\nToplam Uyarı Sayısı: **${syı}**`)
await message.channel.send(uyarıldısebepsiz)}

if(reason) {
    const uyarıldısebepli = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setTitle("Başarılı")
    .setDescription(`${kullanıcı}, Başarıyla Uyarıldı!\nToplam Uyarı Sayısı: **${syı}**`)
await message.channel.send(uyarıldısebepli)
return} }

if(args[0] === 'sil') {
let kullanıcı = message.mentions.users.first()
const etiketle2 = new Discord.MessageEmbed()
.setColor("RED")
.setTitle("Hata!")
.setDescription("Lütfen Bir Kişiyi Etiketle!")
if(!args[1]) return message.channel.send(etiketle2)
const kendisilme = new Discord.MessageEmbed()
.setColor("RED")
.setTitle("Hata!")
.setDescription("Kendi Uyarını Silemezsin!")
if(kullanıcı.id === message.author.id) return message.channel.send(kendisilme)
db.delete(`uyarı.${message.guild.id}.${kullanıcı.id}`)
const silindi = new Discord.MessageEmbed()
.setColor("GREEN")
.setTitle("Başarılı")
.setDescription(`${kullanıcı}, Uyarısı Silindi!\nUyarı Sayısı: **0**`)
await message.channel.send(silindi)}

if(args[0] === 'bilgi') {
let kullanıcı = message.mentions.users.first()
const etiketle3 = new Discord.MessageEmbed()
.setColor("RED")
.setTitle("Hata!")
.setDescription("Lütfen Bir Kişiyi Etiketle!")
if(!args[1]) return message.channel.send(etiketle3)

const syı2 = await db.fetch(`uyarı.${message.guild.id}.${kullanıcı.id}`)
const uyarıyok = new Discord.MessageEmbed()
.setColor("GREEN")
.setTitle("Başarılı!")
.setDescription("Kullanıcının Hiç Uyarısı Yok!")
if(!syı2) return message.channel.send(uyarıyok)
const uyarısayı = new Discord.MessageEmbed()
.setColor("GREEN")
.setTitle("Başarılı!")
.setDescription(`${kullanıcı}, Toplam uyarı sayısı: **${syı2 ? syı2 : '0'}**`)
await message.channel.send(uyarısayı)}
};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['warn' , "u" , "uyari" , "üyari"],
permLevel: 0,
}

exports.help = {
name: 'uyarı'
}
