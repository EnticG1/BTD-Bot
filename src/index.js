const { Client, IntentsBitField } = require('discord.js');
require('dotenv').config()

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
})

client.on('ready', (e) => {
    console.log(`🟩 ${e.user.tag} is online`);
})

// Client slash commands
client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if(interaction.commandName === 'verify'){
        const oak_id = interaction.options.get('oak-id')?.value

        interaction.reply(`OAK ID: ${oak_id}`)
    }
})

client.on('messageCreate', (msg) => {
    if(msg.author.bot){
        return;
    }
    console.log(msg.content);

    if(msg.content === "test"){
        msg.reply('Test')
    }
})

client.login(process.env.TOKEN);