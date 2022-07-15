const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction } = require("discord.js");
const { validUser } = require('../helper/util');
const { updateUser } = require('../helper/graphql');
const { sprintf } = require('sprintf-js');
const myCache = require("../helper/cache");
const CONSTANT = require("../helper/const");

require("dotenv").config()

module.exports = {
    commandName: "onboard",
    description: "Onboard yourself",

    data: null,

    generateData() {
        this.data = new SlashCommandBuilder()
            .setName(this.commandName)
            .setDescription(this.description)
    },

    /**
     * @param  {CommandInteraction} interaction
     */
    async execute(interaction) {
        const user = interaction.user;
        const searchResult = validUser(user.id);

        if (searchResult) return interaction.reply({
            content: "Sorry, you have onboarded before.",
            ephemeral: true
        })

        const userInform = {
            _id: user.id,
            discordName: user.username,
            discriminator: user.discriminator,
            discordAvatar: user.displayAvatarURL({ format: 'jpg' })
        }

        const [result, error] = await updateUser(userInform);

        if (error) return interaction.reply({
            content: `Error occured when onboarding yourself: \`${error.response.errors[0].message}\``,
            ephemeral: true
        });

        myCache.set("users", [ ...myCache.get("users"), userInform ])
        
        const onboardLink = sprintf(CONSTANT.LINK.ONBOARD, user.id)
        return interaction.reply({
            content: sprintf(CONSTANT.CONTENT.ONBOARD, { onboardLink: onboardLink }),
            ephemeral: true
        })
    }

}