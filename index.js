const Discord = require('discord.js');
const client = new Discord.Client();
const cron = require("cron");
require('dotenv').config()

const TOKEN = process.env.TOKEN

let scheduledMessage = new cron.CronJob('01 00 00 * * *', () => {
      // This runs every day at 10:30:00, you can do anything you want
      // Specifing your guild (server) and your channel
         
         var now = new Date().getTime();

		  // Find the distance between now and the count down date
		  var distance = deathDate - now;

		  // Time calculations for days, hours, minutes and seconds
		  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		message.channel.send(' <@114518315937955840>');
		message.channel.send("Soroush Mahdavi has " + (days - 1) + " left to live")
        });
		
client.once('ready', () => {
    console.log('RIP');
	scheduledMessage.start();
});

prefix = "$";


currentDate = new Date();
deathDate = new Date("August 14, 2025 15:34:00");

client.on('message', message => {
	
	
	if (message.author.bot) return;
	
    daisy = message.content.toLowerCase();
    
    if (daisy[0] != '$')
    {
        return;
    }

    daisy = daisy.substring(1);
	
	
	let scheduledMessage = new cron.CronJob('01 00 00 * * *', () => {
      // This runs every day at 10:30:00, you can do anything you want
      // Specifing your guild (server) and your channel
         
         var now = new Date().getTime();

		  // Find the distance between now and the count down date
		  var distance = deathDate - now;

		  // Time calculations for days, hours, minutes and seconds
		  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		message.channel.send(' <@114518315937955840>');
		message.channel.send("Soroush Mahdavi has " + (days - 1) + " left to live")
        });
		
	
	if (daisy == "start-countdown"){
		scheduledMessage.start()
		console.log("countdown started")
	}
	
	if (daisy == "countdown" || daisy == "cd")
	{
		var now = new Date().getTime();

		  // Find the distance between now and the count down date
		  var distance = deathDate - now;

		  // Time calculations for days, hours, minutes and seconds
		  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		message.channel.send("Soroush Mahdavi will kill himself in " + days + " days " + hours + " hours " + minutes  + " minutes " + seconds + " seconds ");
    }
if (daisy == "death" || daisy == "when")
	{
		message.channel.send("Soroush Mahdavi will commit suicide on August 14, 2025 at 3:34 pm")
	}
		
	
	
	
	
	client.user.setActivity('Reaping');
});

function calcTime(currDate, deathDate)
{
	 return (Math.abs(currDate - deathDate)/ (1000*60*60*24));
}

function deathTimer()
{
	var now = new Date().getTime();

		  // Find the distance between now and the count down date
		  var distance = deathDate - now;

		  // Time calculations for days, hours, minutes and seconds
		  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	message.channel.send(' <@114518315937955840>');
	message.channel.send("Soroush Mahdavi has " + (days) + " left to live")
}




motivations = ["You can do it!", "Keep your head high, king!","We love you sushi!","Its ok to feed sometimes!","Its ok to work at Shake Shack!","We're proud of you!",
"You're not a theatre kid!","Its ok to hide your game status from us!","Don't let internet bullies get you down!","Don't kill yourself!","No, really, don't kill yourself!", 
"It's gonna be ok!","You're worthy.","Keep it up!","You're good at Fiora!","You've got this ('this' is life)","Bloom!","Your hair looks good today!","You'll meet someone",
"There are plenty fish in the sea","You'll get to gold, just beleive in yourself!","You're worth it, bro.","xQc knows you exist!","Your life is poggers.","You're really good at airsoft!",
"Hang your anime posters proudly!","You can do it!","You'll make it through!","It's ok to cry","Don't forget to walk your dog.","A gamer girl girl gf is waiting for you."];

client.login(TOKEN);