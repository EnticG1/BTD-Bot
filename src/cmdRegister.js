const { REST, Routes, ApplicationCommandOptionType } = require('discord.js');
require('dotenv').config()

const commands = [
    {
        name: 'verify',
        description: 'Verify using Ninjakiwi OAK ID',
        options: [
            {
                name: 'oak-id',
                description: 'Ninjakiwi Open Access Key ID',
                type: ApplicationCommandOptionType.String,
                required: true,
            }
        ]
    },
]

const rest = new REST({ version: '10'}).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('🟨 Registering slash commands...')
        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: commands }
        )

        console.log('🟩 Slash commands registered successfully!')
    } catch (error) {
        console.log(`🟥 Error: ${error}`)
    }
})();
