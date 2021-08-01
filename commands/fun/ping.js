module.exports = {
	name: "ping",
	description: "Ping!",
	execute(client, message, args, command) {
			const time = message.createdTimestamp - Date.now();
			message.channel.send(`🏓 Pong (${time})ms`);
	},
};