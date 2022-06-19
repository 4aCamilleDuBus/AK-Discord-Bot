//here the event starts
let config = require(`${process.cwd()}/botconfig/config.json`)
const Discord = require("discord.js")
const moment = require("moment")
const { nFormatter } = require(`${process.cwd()}/handlers/functions`)
module.exports = client => {
client.user.setStatus("online");
client.user.setActivity(`!help`, { type: "LISTENING" });
    };
/**
  * @INFO
  * Bot Coded by Tomato#6966 | https://discord.gg/milrato
  * @INFO
  * Work for Milrato Development | https://milrato.eu
  * @INFO
  * Please mention him / Milrato Development, when using this Code!
  * @INFO
*/