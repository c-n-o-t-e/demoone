const { Client, GatewayIntentBits } = require("discord.js");
const token =
  "MTAyNzAyMTM4MTY5MjU1NTI5NA.GYIqKB.mXAB1E1rHnMf2cn8KwfHBYSWWS-JaX-qJaZ3Tc";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("ready", () => {
  console.log(`logged in as ${client.user.tag}`);
});

client.on("messageCreate", (message) => {
  if (message.content == "hi") {
    message.reply("Hello!!");
  }
});

client.login(token);
