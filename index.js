const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");
require("dotenv").config();

const commandFolders = fs.readdirSync('./commands');
client.commands = new Discord.Collection();

for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
        const command = require(`./commands/${folder}/${file}`);
		client.commands.set(command.name, command);
	}
}


client.login(process.env.TOKEN);

client.on("ready", () => {
    console.log("Bot is ready!");
});

client.on("message", message => {
    if (message.content.startsWith(config.prefix)) {
        const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        if (message.author.bot) return;
        if (!client.commands.has(command)) {
            message.channel.send("Sorry but this command doesn't exist");
            return;
        } try {
            client.commands.get(command).execute(client, message, args, command);
        } catch (error) {
            console.error(error);
            message.channel.send(`Error: ${command} didn't work`);
        }
    };
});