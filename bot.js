const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("603537828625776660")
setInterval(function() {
channel.send(`خدني يارب`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
