const 


require("dotenv").config();
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.on("ready", () => {
    console.log('It\'s alive!!');
})


// Read channel to see if someen says "ping"

client.on("messageCreate", async (message) => {
    console.log("message sent");
    if (message.content === "ping"){
        message.reply("pong");
    }
})

client.login(process.env.TOKEN);