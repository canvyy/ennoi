let Discord = require("discord.js")
let client = new Discord.Client()

client.on("message", message => {
if(message.content === "catboy!") {
  message.channel.send("meow!")
}
})

client.on("message", message => {
if(message.content === "catgirl!") {
  message.channel.send("meow!")
}
})

client.on("message", message => {
if(message.content === "stfu") {
  message.channel.send("you're mean :(")
}
})

client.on("message", message => {
if(message.content === "ily!") {
  message.channel.send("lyt!")
}
})

client.on("message", message => {
if(message.content === "en.rules") {
  let embed = new Discord.MessageEmbed()
  .setTitle("rules")
  .setColor("RANDOM")
  .addField("vc rules :", ",,    voice channel rules\n ・no earraping people or disturbing vcs.\n ・if someone is using the bot, take turns. \n ・please ask for permission before playing music with an occupied bot, \n     we have multiple voice channels.", false)
  .addField("text rules :", ",,   text channel rules:\n・no hatespeech.\n・no gore, cp, or any nsfw. (will result in a soft ban.)\n・no doxing, raiding, or leaking any personal info of any sort.\n・no dm or advertising unless you are given permission to do so.\n・use channels as intended. (ex - spamming in general.)", false)
  .addField("be sure to follow discord tos", "[click here!](https://discord.com/terms)", false)
  .setFooter("enjoy ~ <3 | by kuro#0002 ")
  message.channel.send(embed)
}
})

client.on("message", message => {
if(message.content === "en.help") {
  let embed = new Discord.MessageEmbed()
  .setTitle("available commands")
  .setColor("RANDOM")
  .addField("server commands :", "en.help \nen.rules \nen.prefixes \nen.invite", false)
  .addField("fun commands :", "coming soon <3", false) 
  .setFooter("enjoy ~ <3 | by kuro#0002 ")
  message.channel.send(embed)
}
})

client.on("message", message => {
if(message.content === "en.prefixes") {
  let embed = new Discord.MessageEmbed()
  .setTitle("bot prefixes")
  .setColor("RANDOM")
  .addField("music bots :", "groovy : . \nfredboat : ;;", false)
  .addField("fun & utility bots :", "yggdrasil : -- \nstatsify : s! \ndank memer : pls \ntts : ?\ncocoa : = \nowo bot : owo", false) 
  .setFooter("enjoy ~ <3 | by kuro#0002 ")
  message.channel.send(embed)
}
})

client.on("message", message => {
if(message.content === "en.invite") {
  let embed = new Discord.MessageEmbed()
  .setTitle("invite link")
  .setColor("#1A3099")
  .addField("shortened link :", "https://tinyurl.com/ennuicord", true)
  .addField("original link :", "https://discord.gg/GvnPwdYq8W", true) 
  .setFooter("enjoy ~ <3 | by kuro#0002 ")
  .setImage("https://cdn.discordapp.com/attachments/788068518859898902/788671170370600960/bab636bd040ca0e14d1cfccb23a0451c_1.gif")
  message.channel.send(embed)
}
})


client.login("Nzg4NDAyNTc1ODQxOTUxNzY0.X9i_HQ.DY6J1_huiiVS8oemS7B5_2mFpNc")
