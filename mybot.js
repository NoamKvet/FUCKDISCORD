const Discord = require("discord.js");
const client = new Discord.Client();
const ytdl = require('ytdl-core');
const streamOptions = { volume : 1}


client.on('ready', () => {
console.log("Bot is now on");
        // Or via name (less persistent)
  channel = client.channels.find('name', 'Radio');
  channel.leave()
  channel.join()
      .then(connection => { console.log('Connected')
	const stream = ytdl('https://www.youtube.com/embed/cG4-dYhXNjw')
    let dispatcher = connection.playStream(stream, streamOptions)
	 dispatcher.setVolume(0.25);
 });
});





client.on("message", (message) => {
  // !STEAM 
  // !STEAM 
  if (message.content.startsWith("!steam")) {
    message.delete(1000);
	message.author.send({embed: {
    color: 1752220,
    author: {
      name: "Steam Accounts:",
      icon_url: "https://png.icons8.com/metro/1600/steam.png"
    },
    title: "",
    url: "",
	footer: {
          text: "?© Yoda | "
        },
    description: "[Main Steam](https://steamcommunity.com/id/Kvetz) \n[Second Steam](https://steamcommunity.com/id/Kvetz2)",
    fields: [    
    ],
    
  }
}).then(sentEmbed => {
    sentEmbed.react(":yoda:486887366670155777")					
});
  }
 // !STEAM 
 // !STEAM 
  
  // !SAY 
  // !SAY 
  if (message.content.startsWith("!say "))
	{
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No.").then(sentEmbed => {
    sentEmbed.react("??¤“")


});;
 message.delete(1000);
var result2 = message.content.slice(5);
message.channel.send(`${result2}`).then(sentEmbed => {
    sentEmbed.react(":yoda:486887366670155777")


});
};
// !SAY 
// !SAY 

// !CLEAR 
// !CLEAR 
	if (message.content == "!clear") {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No.")



  message.channel.fetchMessages()
               .then(function(list){
                    message.channel.bulkDelete(list);
					
		message.channel.send({embed: {

    color: 3447003,
    author: {
      name:( message.author.tag + " has cleard the chat"),
      icon_url: "https://image.freepik.com/free-icon/info-logo-in-a-circle_318-947.jpg"
    },
    title: "",
    url: "",
    description: "",
    fields: [    
    ],
    
  }
}).then(sentEmbed => {
    sentEmbed.react(":yoda:486887366670155777")					
});																																							
});
};

// !CLEAR 
// !CLEAR 

// !TWITCH
// !TWITCH
  if (message.content.startsWith("!twitch")) {
    message.delete(1000);
	message.author.send({embed: {
    color: 1752220,
    author: {
      name: "Twitch:",
      icon_url: "https://cdn1.iconfinder.com/data/icons/micon-social-pack/512/twitch-512.png"
    },
    title: "",
    url: "",
	footer: {
          text: "?© Yoda | "
        },
    description: "[Twitch](https://www.twitch.tv/kvetzthesheep)",
    fields: [    
    ],
    
  }
}).then(sentEmbed => {
    sentEmbed.react(":yoda:486887366670155777")					
});
  }
  // !TWITCH
  // !TWITCH
  
  // !SETUP
  // !SETUP
    if (message.content.startsWith("!setup")) {
    message.delete(1000);
	message.author.send({embed: {
    color: 1752220,
    author: {
      name: "Setup:",
      icon_url: "http://static1.squarespace.com/static/589289b4be6594fa6e088a14/t/58adc7bc5016e1b6fce15a78/1487783872888/PClogoB--01.png?format=1000w"
    },
    title: "",
    url: "",
	footer: {
          text: "?© Yoda | "
        },
    description: "\n**Computer:**\n + I5 4570\n + 16GB HyperX Ram\n + Asus Z87-K\n + SandDisk SSD(500 GB)\n\n**Peripherals**:\n + Logitech MxMaster 2S\n + Razer DeathStalker\n + SteelSeries QcK\n + AOC E2748SWJ\n + LG 32 TV (Over Top)\n + Western Digital Passport Ultra(1TB)\n + AKG EOIG955",
    fields: [    
    ],
    
  }
}).then(sentEmbed => {
    sentEmbed.react(":yoda:486887366670155777")					
});
  }
  
  // !SETUP
  // !SETUP  

  // !SHOP
  // !SHOP  
   if (message.content.startsWith("!shop")) {
    message.delete(1000);
	message.author.send({embed: {
    color: 1752220,
    author: {
      name: "Sellfy Shop:",
      icon_url: "https://files.startupranking.com/startup/thumb/4611_d041d3d83b672914efa808555dffdbb5b5f425d9_sellfy_m.png"
    },
    title: "",
    url: "",
	footer: {
          text: "?© Yoda | "
        },
    description: "[Sellfy](https://sellfy.com/noamkvet)",
    fields: [    
    ],
    
  }
}).then(sentEmbed => {
    sentEmbed.react(":yoda:486887366670155777")					
});
  }

  // !SHOP
  // !SHOP  
  
  // !DJ
  // !DJ    
   if (message.content.startsWith("!dj ")) {
    message.delete(1000);
	  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No Dj Perms!")

	  var result = message.content.slice(4);

        // Or via name (less persistent)
  channel = client.channels.find('name', 'Radio');
  channel.leave()
  channel.join()
      .then(connection => { console.log('Connected')
	const stream = ytdl(`${result}`);
    let dispatcher = connection.playStream(stream, streamOptions)
	 dispatcher.setVolume(0.25);
 });
};
  
  // !DJ
  // !DJ 
  
  
  // !REPORT
  // !REPORT   
var reportchannel = "482575918670282782" //Must be specified
if (message.content.startsWith("!report ")) {
  message.delete(1000);
  var result = message.content.slice(8);
  // Assuming 'bot' is your Discord.Client()
 client.channels.get(reportchannel).send(`${message.author} has reported: ${result}`);

}
  
  // !REPORT
  // !REPORT 
  
  
  // !MUSIC
  // !MUSIC   
    if (message.content == "!music") {
    message.delete(1000);
        // Or via name (less persistent)
  channel = client.channels.find('name', 'Radio');
  channel.leave()
  channel.join()
      .then(connection => { console.log('Connected')
	const stream = ytdl('https://www.youtube.com/embed/cG4-dYhXNjw');
    let dispatcher = connection.playStream(stream, streamOptions)
	 dispatcher.setVolume(0.25);
 });
};

  // !MUSIC
  // !MUSIC   
  
  
  // NO DISCORD ADVERTISMENT
   // NO DISCORD ADVERTISMENT  
client.on("message", (message) => {
  if (message.content.startsWith("https://discord.gg/")) {
    message.delete(1000);
};
});
 // NO DISCORD ADVERTISMENT
 // NO DISCORD ADVERTISMENT
 

 //!DISCORD 
  //!DISCORD 
if (message.content.startsWith("!discord")) {
    message.delete(1000);
	message.author.send({embed: {
    color: 1752220,
    author: {
      name: "Discord Server",
      icon_url: "https://pbs.twimg.com/profile_images/1016814904383139840/2CdaitAm_400x400.jpg"
    },
    title: "",
    url: "",
	footer: {
          text: "?© Yoda | "
        },
    description: "Invite Link: https://discord.gg/aAGazjd",
    fields: [    
    ],
    
  }
}).then(sentEmbed => {
    sentEmbed.react(":yoda:486887366670155777")					
});
  }
   //!DISCORD 
   //!DISCORD 
	
	//!COMMANDS 
    //!COMMANDS 

   if (message.content.startsWith("!commands")) {
    message.delete(1000);
	message.channel.send({embed: {
    color: 1752220,
    author: {
      name: "Server Commands:",
      icon_url: "https://image.freepik.com/free-icon/info-logo-in-a-circle_318-947.jpg"
    },
    title: "",
    url: "",	
	footer: {
          text: "?© Yoda | "
        },
			
						description:  "!discord`: Gives you a discord invite link\n"+
						"!music`: makes the bot connect to the Radio channel(fix for no audio)\n"+
						"!steam`: Gives you a link to my steam accounts.\n" +
						"!setup`: Gives you my setup peripherals.\n" +
						"!twitch`: Gives you a link to my twitch.\n" +
						"!shop`: Gives you a link to my shop.\n" +
						"!stats`: View the Servers statistics\n" 
				
    
  
  
  }
}).then(sentEmbed => {
    sentEmbed.react(":yoda:486887366670155777")					
});
  } 
 
 
});


client.on('guildMemberAdd', (guildMember) => {
   guildMember.addRole(guildMember.guild.roles.find(role => role.name === "The Boyz"));
   guildMember.send("Welcome To Yoda's Server!")  
.then(sentEmbed => {
    sentEmbed.react(":yoda:486887366670155777")					
});
   
})
  
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('name', 'welcome');

  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`)
	
			
});








/* client.on("message", function(message) {
    if(message.content === "test") {
	message.channel.send('\n**Discord Rules**\n1) Be respectful\n2) Sending/Linking any harmful material such as viruses, IP grabbers or harmware results in an immediate and permanent ban.\n3) Use proper grammar and spelling and dont spam.\n4) Usage of excessive extreme innapropriate langauge is prohibited.\n5) mentioning @everyone, the Moderators or a specific person without proper reason is prohibited.\n6) Act civil in Voice Chat.\n7) Post content in the correct channels.\n8) Dont post someones personal information without permission.\n9) Listen to what Staff says.\n10) Do not post graphic pictures of minors. \n \n**Fivem Rules**\n1) A MICROPHONE IS REQUIRED.\n2) NO RANDOM DEATHMATCH.\n3) NO VEHICULAR DEATHMATCH.\n4) NO META-GAMING.\n5) NO FAILRP.\n6) NO EXPLOITATION OF BUGS.\n7) NO EXTREME ROLEPLAY.\n8) NO IMPERSONATING GOVERNMENT OFFICIALS.\n9) NO STEALING GOVERNMENT VEHICLES.\n10) ZANCUDO MILITARY BASE IS OFF LIMITS.\n11) MISSION ROW PD IS RESTRICTED.\n12) NO IMPERSONATING SERVER STAFF.\n13) NO LEO, EMT, OR MILITARY SKINS/CLOTHES.\n14) NO OFFENSIVE/UNREALISTIC CHARACTERS.\n15) DO NOT SPAM /OOC CHAT.\n16) /REPORT IS FOR SERVER EMERGENCIES ONLY.\n17) AIM FOR REALISM.\n18) NO CORRUPT LEO/EMT ROLEPLAY.\n19) CHARACTERS MUST BE ESTABLISHED.\n20) NO CLIENT-SIDE MODS.');
    }
}); */
client.on("message", (message) => {
if (message.content.startsWith("!stats")){
	    message.delete(1000);

			if (message.guild === null) {
				message.channel.send("**Command Unavailable!**")
				return;
			}
  		const users = client.users.array();
  		const guildMembers = message.guild.members.array();
  		const channels = client.channels.array();

  		var guildTotalOnline = 0;
  		var totalOnline = 0;
  		var totalTextChannels = 0;
  		var totalVoiceChannels = 0;


  		for(var i = 0; i < guildMembers.length; i++){
  			if(guildMembers[i].presence.status === 'online'){
  				guildTotalOnline++;
  			}
  		}

  		for(var i = 0; i < users.length; i++){
  			if(users[i].presence.status === 'online'){
  				totalOnline++;
  			}
  		}
  		var nonGuildChannels = 0;
  		for(var i = 0; i < channels.length; i++){
  			if(channels[i].type === 'text')
  				totalTextChannels++
  			else if(channels[i].type === 'voice')
  				totalVoiceChannels++
  			else
  				nonGuildChannels++
  		}

	  		message.channel.send("**Stats**",{
	  			embed: {
	  				author: {
				      name: client.user.username,
				      icon_url: client.user.displayAvatarURL
				    },
	  				color: 1752220,
					footer: {
                    text: "?© Yoda | "
                     },
	  				fields: [{
	  					name: "Members",
	  					value: "`" + client.users.size + "` Total\n`" + totalOnline + "` Online\n\n`" + message.guild.memberCount + "` total this server\n`" + guildTotalOnline + "` online this server",
	  					inline: true
	  				}, {
	  					name: "Channels",
	  					value: "`" + (client.channels.size - nonGuildChannels)+ "` Total\n`" + message.guild.channels.size + "` this server\n`" + totalTextChannels + "` Total Text\n`" + totalVoiceChannels + "` Total Voice",
	  					inline: true
	  				}, {
	  					name: "Ping",
	  					value:(new Date().getTime() - message.createdTimestamp)
	  				}, ],									                
	  				thumbnail: {
						url: client.user.displayAvatarURL
					}
	  			}
	  		}).then(sentEmbed => {
    sentEmbed.react(":yoda:486887366670155777")					
})
	  	;
  	}
});


