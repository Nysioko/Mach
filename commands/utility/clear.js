module.exports = {
    name: "clear",
    description: "Clear that shite mate",
    execute(client, message, args, command) {
        //if (!message.member.hasPermission('MANAGE_MESSAGES'))
        //    return message.channel.send("You don't have the permission to delete messages !");
        var nb = 0;

        if (args.length == 0)
            nb = 20;
        else if (args.length == 1)
            nb = parseInt(args[0], 10);
        message.channel.bulkDelete(nb == 0 ? 0 : nb + 1, true).then((__message) => {
            message.channel.send(`Removed ${nb} message(s)`).then((sent) => {
                setTimeout(() => {
                    sent.delete();
                }, 2500);
            });
        });
    }
}