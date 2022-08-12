const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, MessageEmbed } = require("discord.js");
const { addNewMember } = require("../helper/graphql");
const { validUser, awaitWrap, updateUserCache } = require('../helper/util');
const { sprintf } = require('sprintf-js');
const myCache = require("../helper/cache");
const CONSTANT = require("../helper/const");


module.exports = {
    commandName: "invite",
    description: "Invite a newcomer to Soil🌱",

    data: null,

    generateData() {
        this.data = new SlashCommandBuilder()
            .setName(this.commandName)
            .setDescription(this.description)
            .addUserOption(option =>
                option.setName("user")
                    .setDescription("The member you'd like to support")
                    .setRequired(true))
    },

    /**
     * @param  {CommandInteraction} interaction
     */
    async execute(interaction) {
        const invitee = interaction.options.getUser('user');
        const inviter = interaction.user;
        const guildId = interaction.guild.id;
        
        if (invitee.id == inviter.id) return interaction.reply({
            content: "Sorry, you cannot invite yourself.",
            ephemeral: true
        })
        if (invitee.bot) return interaction.reply({
            content: "Sorry, you cannot choose a bot as a target.",
            ephemeral: true
        })
        const isNewInviter = validUser(inviter.id, guildId);
        if (!isNewInviter) return interaction.reply({
            content: "Please use \`/onboard\` command to onboard yourself first",
            ephemeral: true
        })

        const isNewUser = validUser(invitee.id, guildId);
        if (isNewUser) return interaction.reply({
            content: "Sorry, this user has been onboarded.",
            ephemeral: true
        })

        const userInform = {
            _id: invitee.id,
            discordName: invitee.username,
            discriminator: invitee.discriminator,
            discordAvatar: invitee.displayAvatarURL({ format: 'jpg' }),
            invitedBy: inviter.id,
            serverId: [guildId]
        }

        await interaction.deferReply({
            ephemeral: true
        })
        const [result, error] = await addNewMember(userInform);

        if (error) return interaction.followUp({
            content: `Error occured: \`${error}\``
        })

        updateUserCache(invitee.id, invitee.username, guildId);

        const onboardLink = sprintf(CONSTANT.LINK.ONBOARD, invitee.id);
        let embedContent = new MessageEmbed()
            .setAuthor({ name: inviter.username, url: sprintf(CONSTANT.LINK.USER, inviter.id), iconURL: inviter.avatarURL() });
        const DMchannel = await invitee.createDM();
        const { DMResult, DMError } = await awaitWrap(DMchannel.send({
            embeds: [
                embedContent.setDescription(sprintf(CONSTANT.CONTENT.INVITE_DM, { onboardLink: onboardLink }))
            ]
        }))
        if (DMError) {
            interaction.channel.send({
                content: `<@${invitee.id}>`,
                embeds: [
                    embedContent.setDescription(sprintf(CONSTANT.CONTENT.INVITE_DM_FAIL, { onboardLink: onboardLink }))
                ]
            })
            return interaction.followUp({
                content: sprintf("Invite message has been sent to <#%s>", interaction.channel.id)
            })
        }
        return interaction.followUp({
            content: sprintf("DM is sent to \`%s\`", invitee.username)
        })
    }

}