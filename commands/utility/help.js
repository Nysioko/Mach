module.exports = {
    name: "help",
    description: "help",
    execute(client, message, args, command) {
        const commands = message.client;
        message.client.send(`${commands.map(command => command.name).join(`: ${command.description}\n`)}`);
    }
}