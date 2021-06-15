const { promises: fs } = require("fs");

async function getFiles(path) {
    const entries = await fs.readdir(path, { withFileTypes: true });

    const files = entries
        .filter(file => !file.isDirectory())
        .map(file => ({ ...file, path: path + file.name}));
    const folders = entries.filter(folder => folder.isDirectory());
    let final_array = Array(0);

    for (const folder of folders) {
        const tmp_array = await getFiles(`${path}${folder.name}/`);
        for (let index = 0; index < tmp_array.length; index++)
            final_array.push(tmp_array[index]);
    }
    let path_array = Array(0);
    for (let index = 0; index < files.length; index++) {
        const element = files[index];
        path_array.push(element.path);
    }
    return path_array.length != 0 ? path_array : final_array;
}

async function help_command(message, args)
{
    let commands_array = await getFiles("./commands/");
    let final_message = null;

    if (args.length == 0) {
        final_message = "Here is a list of my commands :\n\n";
        for (let index = 0; index < commands_array.length; index++) {
            const element = require(`../../${commands_array[index]}`);
            final_message += ("Name : " + element.name + "\nDescription : " + element.description + "\n\n");
        }
    } else if (args.length == 1) {
        final_message = "";
        for (let index = 0; index < commands_array.length; index++) {
            const element = require(`../../${commands_array[index]}`);
            if (element.name === args[0])
                final_message += ("Description : " + element.description);
        }
    }
    message.channel.send(`${final_message}`);
}


module.exports = {
    name: "help",
    description: "Help me, HELP ME, N**GA",
    execute(client, message, args, command) {
        help_command(message, args);
    }
}