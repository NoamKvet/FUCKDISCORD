const Discord = require("discord.js");
const client = new Discord.Client();
const ytdl = require('ytdl-core');
const streamOptions = { volume : 1}



client.on('ready', () => {
client.user.setActivity('Fivem');
console.log("Bot is now on");
 });

 
 
client.on('message', function(message) {
let rules = message.guild.roles.find("name", "Rules Approved");
let removerole = message.guild.roles.find("name", "New");
let addmember = message.guild.roles.find("name", "Member");
let member = message.mentions.members.first();
var approvedchannel = "471782214934462485" //Must be specified
if (message.channel.id === '471780513170849812') {
if (message.content.startsWith("!approve")){
message.delete(1000);
var result = message.content.slice(8);
client.channels.get(approvedchannel).send(`${message.author} Approved the server's rules`);
message.member.addRole(rules).catch(console.error);
message.member.addRole(addmember).catch(console.error);
message.member.removeRole(removerole).catch(console.error);


}
};
 });
 
 
client.on('message', function(message) {
if (message.channel.id === '471780513170849812') {
message.delete(1000);

}
});

 
client.on('message', function(message) {
var reportchannel = "471769437926850591" //Must be specified
if (message.content.startsWith("!report ")) {
  message.delete(1000);
  var result = message.content.slice(8);
  // Assuming 'bot' is your Discord.Client()
 client.channels.get(reportchannel).send(`${message.author} has reported: ${result}`);

}
});

client.on('message', function(message) {
    if (message.content == "^clear") {
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.fetchMessages()
               .then(function(list){
                    message.channel.bulkDelete(list);
                }, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")}) 

        }
	
 }
});

client.on('message', function(message) {
    if (message.content == "!music") {
    message.delete(1000);
        // Or via name (less persistent)
  channel = client.channels.find('name', 'Radio');
  channel.leave()
  channel.join()
      .then(connection => { console.log('Connected')
	const stream = ytdl('https://www.youtube.com/watch?v=p7RAHP17mPg');
    let dispatcher = connection.playStream(stream, streamOptions)
	
 });
};
});

 

client.on('guildMemberAdd', (guildMember) => {
   guildMember.addRole(guildMember.guild.roles.find(role => role.name === "New"));

})
  
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('name', 'welcome');

  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);

});

client.on("message", (message) => {
  if (message.content.startsWith("https://discord.gg/")) {
    message.delete(1000);
};
})

client.on("message", (message) => {
  if (message.content.startsWith("!teamspeak")) {
    message.delete(1000);
	message.author.send({embed: {
    color: 3447003,
    author: {
      name: "Teamspeak Server",
      icon_url: "http://digitale-leistungen.de/wp-content/uploads/2016/10/TeamSpeak_Logo_Neu.jpg"
    },
    title: "",
    url: "",
    description: "Server IP: ts.orlandoroleplay.ml",
    fields: [    
    ],
    
  }
});
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("!ts")) {
    message.delete(1000);
	message.author.send({embed: {
    color: 3447003,
    author: {
      name: "Teamspeak Server",
      icon_url: "http://digitale-leistungen.de/wp-content/uploads/2016/10/TeamSpeak_Logo_Neu.jpg"
    },
    title: "",
    url: "",
    description: "Server IP: ts.orlandoroleplay.ml",
    fields: [    
    ],
    
  }
});
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("!discord")) {
    message.delete(1000);
	message.author.send({embed: {
    color: 3447003,
    author: {
      name: "Discord Server",
      icon_url: "https://pbs.twimg.com/profile_images/1016814904383139840/2CdaitAm_400x400.jpg"
    },
    title: "",
    url: "",
    description: "Invite Link: https://discord.gg/GrC4b2d",
    fields: [    
    ],
    
  }
});
  }
});




/* client.on("message", function(message) {
    if(message.content === "test") {
	message.channel.send('\n**Discord Rules**\n1) Be respectful\n2) Sending/Linking any harmful material such as viruses, IP grabbers or harmware results in an immediate and permanent ban.\n3) Use proper grammar and spelling and dont spam.\n4) Usage of excessive extreme innapropriate langauge is prohibited.\n5) mentioning @everyone, the Moderators or a specific person without proper reason is prohibited.\n6) Act civil in Voice Chat.\n7) Post content in the correct channels.\n8) Dont post someones personal information without permission.\n9) Listen to what Staff says.\n10) Do not post graphic pictures of minors. \n \n**Fivem Rules**\n1) A MICROPHONE IS REQUIRED.\n2) NO RANDOM DEATHMATCH.\n3) NO VEHICULAR DEATHMATCH.\n4) NO META-GAMING.\n5) NO FAILRP.\n6) NO EXPLOITATION OF BUGS.\n7) NO EXTREME ROLEPLAY.\n8) NO IMPERSONATING GOVERNMENT OFFICIALS.\n9) NO STEALING GOVERNMENT VEHICLES.\n10) ZANCUDO MILITARY BASE IS OFF LIMITS.\n11) MISSION ROW PD IS RESTRICTED.\n12) NO IMPERSONATING SERVER STAFF.\n13) NO LEO, EMT, OR MILITARY SKINS/CLOTHES.\n14) NO OFFENSIVE/UNREALISTIC CHARACTERS.\n15) DO NOT SPAM /OOC CHAT.\n16) /REPORT IS FOR SERVER EMERGENCIES ONLY.\n17) AIM FOR REALISM.\n18) NO CORRUPT LEO/EMT ROLEPLAY.\n19) CHARACTERS MUST BE ESTABLISHED.\n20) NO CLIENT-SIDE MODS.');
    }
}); */


client.on("message", (message) => {
  if (message.content.startsWith("!help")) {
    message.delete(1000);
	message.author.send({embed: {
    color: 3447003,
    author: {
      name: "Server Commands:",
      icon_url: "https://image.freepik.com/free-icon/info-logo-in-a-circle_318-947.jpg"
    },
    title: "",
    url: "",
    description: "(Prefix:**!**)\ndiscord - Gives you a discord invite link. \nteamspeak - Gives you the teamspeak ip.\nts- Gives you the teamspeak ip. \nmusic - makes the bot connect to the Radio channel(fix for if there is no audio).",
    fields: [    
    ],
    
  }
});
  }
});






