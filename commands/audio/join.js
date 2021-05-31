module.exports = {
    name: "join",
    description: "joining a vocal channel",
    execute(client, message, args, command) {
        if (message.guild === null) {
            return message.reply("I can't do that in private messages...");
        }
        else if (message.member.voice.channel) {
            message.member.voice.channel.join();
            message.channel.send("I'm connected to the voice channel");
        } else {
            return message.channel.send("I can't join you in voice, or I don't have permission");
        }
    }
}