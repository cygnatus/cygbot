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
        return math.eval(msg.slice(1, -1));
    }
});

bot.connect(); // Connect to server (Discord)