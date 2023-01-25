const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const axios = require("axios");
//machine status
module.exports = {
  data: new SlashCommandBuilder()
    .setName("status")
    .setDescription("Status of no machine"),
  async execute(interaction) {
    const res = await axios.get("https://curious-bee-garters.cyclic.app/who");
    if (res.data.currentUsers.length < 1) {
      const embed = new EmbedBuilder()
        .setColor("Green")
        .setTitle("No Machine Status")
        .setDescription("Yahoo! Machine is free.");
      interaction.reply({ embeds: [embed] });
    } else {
      const embed = new EmbedBuilder()
        .setColor("Orange")
        .setTitle("No Machine Status")
        .setDescription(
          `The machine is used by ${res.data.currentUsers.join(", ")}`
        );
      interaction.reply({ embeds: [embed] });
    }
  },
};
