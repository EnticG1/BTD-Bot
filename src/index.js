const { Client, IntentsBitField } = require('discord.js');
require('dotenv').config()
const FetchUserData = require('../functions/fetchUserData')

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
client.on('interactionCreate', async (interaction) => {
    let userData;
    if (!interaction.isChatInputCommand()) return;

    const oak_id = interaction.options.get('oak-id')?.value

    if(interaction.commandName === 'verify'){
        try{
            userData = await FetchUserData(oak_id)
            console.log(userData)
        }catch(error){
            console.log(error)
        }

        // Destructure
        const {
            displayName, 
            is_club_member,
            currentSeason
        } = userData;

        // interaction.reply(body)
        interaction.reply(`OAK ID: ${oak_id} \nName: ${displayName} \nClub Member: ${is_club_member} \nCurrent Season ${currentSeason}`)
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