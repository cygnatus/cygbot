const Eris = require("eris");
const math = require("mathjs");

const bot = new Eris.CommandClient(process.env.DISCORD_BOT_TOKEN, {}, {
    "description": "All-purpose Discord bot.",
    "owner": "Cygnatus",
    "prefix": "!"
});

bot.on("ready", () => {                              
    console.log("Ready!");
});

bot.on("messageCreate", (msg) => {
    if (msg.content.startsWith("=")) {
        bot.createMessage(msg.channel.id, math.eval(msg.content.slice(1))); // Slice "=" from the expression
    }
});

bot.connect(); // Connect to server (Discord)