const Discord = require('discord.js');
const { description } = require('../info/help');

module.exports = {
    name: "slowmode",
    description:"Changes the current slowmode of the channel",
    run: async (client, message, args) => {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`${message.author}, you don't have permission to run this command.\nExpected permission: \`MANAGE_MESSAGES\``);
if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`${message.author}, you don't have permission to run this command.\nExpected permission: \`MANAGE_CHANNELS\``);

String.prototype.toHHMMSS = function () {
  var sec_num = parseInt(this, 10);
  var hours   = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
  var seconds = sec_num - (hours * 3600) - (minutes * 60);

  if (hours   < 10) {hours   = "0"+hours;}
  if (minutes < 10) {minutes = "0"+minutes;}
  if (seconds < 10) {seconds = "0"+seconds;}
  return hours+':'+minutes+':'+seconds;
}

const time = args[0];
if(!time) { return message.channel.send(`${message.author}, specify a time.\nUsage: \`.slowmode <time>\``); }
if(isNaN(time)) { return message.channel.send(`${message.author}, **${time}** is not a number.\nUsage: \`.slowmode <time>\``);  }

message.channel.setRateLimitPerUser(time)
message.channel.send(`slowmode in ${message.channel} set to \`${time.toHHMMSS()}\``);
    }
}
