module.exports = {
    name: "leave",
    description: "leave",
    execute(client, message, args, command) {
        if (message.guild === null) {
            return message.reply("I can't do that in private messages...");
        }
        else if (!message.guild.me.voice.channel) return message.channel.send("I'm not in a voice channel");
        else if (!message.member.voice.channel) {
            message.channel.send("U are not in a voice channel, i cant leave them");
            return;
        } else {
            message.guild.me.voice.channel.leave();
            message.channel.send("I'm disconnected out of the voice channel");
        }
    }
}