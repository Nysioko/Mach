module.exports = {
    name: "pd",
    description: "tpd",
    execute(client, message, args, command) {
        const say = args.join(" ");
        message.channel.send("Flo");
    }
}