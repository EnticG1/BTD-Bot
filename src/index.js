const { Client, IntentsBitField } = require('discord.js');
require('dotenv').config()

const farmerBot = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
});

farmerBot.login(process.env.TOKEN);