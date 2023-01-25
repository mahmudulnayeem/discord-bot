const { SlashCommandBuilder } = require("discord.js");

const commands= ['/status','/finish','/taking']
//availavle command
module.exports = {
  data: new SlashCommandBuilder().setName("command").setDescription("Command"),
  async execute(interaction) {
    interaction.reply(`availavle commands for no machine bot are ${commands.join(", ")} `);
  },
};