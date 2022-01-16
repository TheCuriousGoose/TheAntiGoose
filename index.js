const Discord = require("discord.js");
const MessageAI = require("messageai.js")
const colors = require('colors');

const client = new Discord.Client();
const config = require("./config.json");

client.config = config;

client.on("message", message => {
  message.channel.send(MessageAI.getrespond(message))
})

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(colors.gray(`Loading command ${commandName}`));
    client.commands.set(commandName, props);
  });
  console.log(colors.green(`Done loading in ${files.length} commands`));
});

client.on('guildMemberAdd', member => {
    if(member.bot) return;
  
    const channel = client.channels.cache.get('818694681571098657');
  
    var randomjoin = [", Feel free to get your self some roles in self-roles and ask any mongodb related questions in on-topic or the other support channels", "", ", if you have any Mongodb questions feel free to leave it in on-topic"]
  
    channel.send(`Welcome ${member} ${randomjoin[Math.floor(Math.random() * randomjoin.length)]}`);
    return;
});

client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`);
  client.user.setActivity(`Javascript go brrrr | Any pronouns`);
});
