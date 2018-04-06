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
    	message.reply('http://bit.ly/2uOM3O5');
  	}
});

client.on('message', message => {
    if (message.content === '>owner') {
    	message.reply('💎HeaLOng💎#5881');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
