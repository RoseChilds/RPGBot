module.exports = {
	name: 'ping',
  cooldown: 5,
	description: 'Returns the server latency',
	execute(client, message, args) {
    const Discord = require(`discord.js`);
    const pingembed = new Discord.MessageEmbed()
      .setTitle("Pong! 🏓")
      .addFields(
    		{ name: 'Latency', value: `${Date.now() - message.createdTimestamp}ms` },
    		{ name: 'API Latency', value: `${Math.round(client.ws.ping)}ms` }
    	)
		message.inlineReply(pingembed);
	},
};
