const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '>link') {
    	message.channel.send('https://discord.gg/7mS9GEY');
  	}
});

client.on('message', message => {
    if (message.content === '>invite') {
    	message.reply('http://bit.ly/2Hdp01j');
  	}
});

client.on('message', message => {
    if (message.content === '>owner') {
    	message.reply('FB:`HeaLOng`');
  	}
});

client.on('message', message => {
    if (message.content === '>help') {
    	message.reply('https://ibb.co/hSaWMc');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
