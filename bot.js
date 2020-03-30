const Discord = require("discord.js"); // We Call The Packages.
// const PREFIX = "<"; // You can change this Prefix to whatever you want.
const PREFIX = process.env.PREFIX;

var bot = new Discord.Client();

// Put the Music module in the new Client object.
// This allows for easy access to all the modules
// functions and data.
bot.music = require("discord.js-musicbot-addon");

// Now we start the music module.
bot.music.start(bot, {
    // Set the api key used for YouTube.
    // This is required to run the bot.
    botPrefix: PREFIX,

});

// Events.
bot.on("ready", function() {
    bot.user.setActivity(`for guests`, {
        type: 'WATCHING'
    });
    console.log(`${bot.user.username} is Ready!`);
});

// Bot Login.
// bot.login('YourAwesomeBotToken');
bot.login(process.env.BOT_TOKEN);