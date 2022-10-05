const { Client, GatewayIntentBits } = require("discord.js");
const token =
  "MTAyNzAyMTM4MTY5MjU1NTI5NA.G6icTd.ztYg0LlvNJOgxkomntyEhRywZ0um19ExGEHVuk";

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
