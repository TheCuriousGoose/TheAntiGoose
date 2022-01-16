exports.run = (client, message, args) => {
    if(!args[0]){
      message.channel.send('Please provide a valid user you want to bonk');
    }else{
      const user = message.mentions.users.first();
      if(!message.guild.member(message.mentions.users.first())){
        message.channel.send('Please provide a valid user to bonk');
      }else{
        try{
          message.channel.send(`${user} has been bonked`)
        }catch{
          return console.log('Failed to dm ' + user);
        }
      }
    }
  }