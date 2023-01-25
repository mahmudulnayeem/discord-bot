const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const axios = require("axios");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("finish")
    .setDescription("Finish using no machine"),
  async execute(interaction) {
    axios
      .post("https://curious-bee-garters.cyclic.app/finish", { user: interaction.user.username })
      .then((res) => {
        if (res.status === 201) {
          const exampleEmbed = new EmbedBuilder()
            .setColor(0x0099ff)
            .setTitle("Free the machine")
            .setDescription(res.data.message);
          interaction.reply({ embeds: [exampleEmbed] });
        } else if (res.status === 202) {
          const exampleEmbed = new EmbedBuilder()
            .setColor('DarkGreen')
            .setTitle("Already Free")
            .setDescription(res.data.message);
          interaction.reply({ embeds: [exampleEmbed] });
        }
        else if(res.status===200){
          const exampleEmbed = new EmbedBuilder()
            .setColor('Yellow')
            .setTitle("Let user free the machine!")
            .setDescription(res.data.message);
          interaction.reply({ embeds: [exampleEmbed] });
        }
      });
  },
};
