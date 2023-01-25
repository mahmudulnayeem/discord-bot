const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const axios = require("axios");

//machine status
module.exports = {
  data: new SlashCommandBuilder()
    .setName("taking")
    .setDescription("Taking no machine"),
  async execute(interaction) {
    
    axios
      .post("https://curious-bee-garters.cyclic.app/using", {
        user: interaction.user.username,
      })
      .then((res) => {
        if (res.status === 201) {
          const exampleEmbed = new EmbedBuilder()
            .setColor('Red')
            .setTitle("Already in use")
            .setDescription(res.data.message);
          interaction.reply({ embeds: [exampleEmbed] });
        } else if (res.status === 200) {
          const exampleEmbed = new EmbedBuilder()
            .setColor("DarkGreen")
            .setTitle("Successfully taking access of no Machine")
            .setDescription(res.data.message);
          interaction.reply({ embeds: [exampleEmbed] });
        }
      });
    // }
  },
};
