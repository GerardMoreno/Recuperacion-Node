const Discord = require('discord.js');
const client = new Discord.Client();
const ascii = require('ascii-art');


const config = {
		"token"  : "NDQ3Nzk3OTU3NTgwOTQ3NDU2.DeM1Jg.T7G3sg2mCE6hqSzPBV8PSLlCRDI",
		"prefix" : "+"
	};
	

client.on('ready', function(){
  console.log('El Bot de recuperacion esta conectado');
});


client.on('message', function(msg){
	if (msg.content.indexOf('!ascii') == 0) {
		console.log("Voy a pasar " + msg.content.slice(7, msg.content.length) + " a ASCII");
		var string = ascii.font(msg.content.slice(7, msg.content.length), 'Doom', function(rendered){
			console.log(rendered);
			msg.reply('\n' + rendered);
		});
		console.log(string);
	};
});


client.login(config.token);
