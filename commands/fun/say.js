module.exports = {
    name: "say",
    description: "say",
    execute(client, message, args, command) {
        const say = args.join(" ");
        if (message.author.id != "650432748275892253" && message.author.id != "175948123183644672") {
            message.channel.send("Sorry but this command doesn't exist");
        } else if (!args.length) {
            message.delete({setTimeout: 1});
            return;
        } else if (message.guild === null) {
            return message.reply("I can't do that in private messages...");
        } else {
            message.delete({ setTimeout: 1 });
            message.channel.send(`${say}`);
        }
    }
}