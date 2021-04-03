const Discord = require('discord.js');
const { Id, token, prefix } = require('./config.json');
const Bot = new Discord.Client();({ws: { intents: new Discord.Intents(Discord.Intents.ALL) } });

Bot.on("ready", () => {
  console.log(`READY !`);
});
Bot.on("message", message => {
  if (message.content.startsWith(prefix + 'dm')) {
    if (message.author.id != Id) {
      return message.reply('only owner :d')
    }
    else {
      message.delete
      args = message.content.split(" ").slice(1);
      var argresult = args.join(' ');

      message.guild.members.cache.forEach(member => {
        member.send(argresult).then(console.log(`${member.user.username}#${member.user.discriminator}`))
        .catch(err => console.error(`-----[DM's Disabled]----- \n${member.user.username}#${member.user.discriminator}`));
        console.log(`.....DONE....`)
      })
      message.channel.send(`**DONE**`).then(message.delete({ timeout: 1000 }));
    }
  }
})
Bot.login(token);