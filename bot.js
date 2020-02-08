const Eris = require('eris').Client;
const bot = new Eris('');
var play = 0;
var l = 0;
var f = 0;
var s = 0;
var m = 0;

var playNames = [];
var lateNames = [];
var fillNames = [];
var maybeNames = [];
var spiritNames = [];



bot.on("ready", () => {
    console.log("Ready!");
});
bot.on("messageCreate", (msg) => {


    if(msg.content === "!roleHelp"){
        bot.createMessage(msg.channel.id, "!p to add to play count\n!l to add to late count \n!f to add to fill count\n!m to add to maybe count\n!s to add to in spirit count \n!count to see current count \n!list to see players in the count ");
    }

        try{
    if(msg.content === "!p" || msg.content == "!l" || msg.content === "!f" || msg.content === "!m" || msg.content === "!s"){
    
        for (i = 0; i < playNames.length; i++){
        if(playNames[i] === msg.member.user.id){
            play--;
            for (j = i; j < playNames.length; j++){
                if(j < playNames.length){
                console.log(playNames.length);
                playNames[j] = playNames[j + 1];
                }
        
        }
        playNames.length--;
    }
}

    
    for (i = 0; i < lateNames.length; i++){
        if(lateNames[i] === msg.member.user.id){
            l--;
            for (j = i; j < lateNames.length; j++){
                 if(j< lateNames.length){
                lateNames[j] = lateNames[j+1];
            }
        }
        lateNames.length--;
    }
    }

    for (i = 0; i < fillNames.length; i++){
        if(fillNames[i] === msg.member.user.id){
            f--;
            for (j = i; j < fillNames.length; j++){
               if(j< fillNames.length){
                fillNames[j] = fillNames[j + 1];
            }
        }
        fillNames.length--;
    }
    }

    for (i = 0; i < maybeNames.length; i++){
        if(maybeNames[i] === msg.member.user.id){
            m--;
            for (j = i; j < maybeNames.length; j++){
            if(j< maybeNames.length){
                maybeNames[j] = maybeNames[j+1];
            }
        }
        maybeNames.length--;
    }
    }

    for (i = 0; i < spiritNames.length; i++){
        if(spiritNames[i] === msg.member.user.id){
            s--;
            
            for (j = i; j < spiritNames.length; j++){
                if(j< spiritNames.length){
                console.log(spiritNames.length);
                spiritNames[j] = spiritNames[j+1];
            }
            
        }
        spiritNames.length--;
    }
    }
    }
}catch(err){
    //bot.createMessage(msg.channel.id, err);
}
try{
    if(msg.content === "!count") {
        
        bot.createMessage(msg.channel.id, "Count: " + play + " + " + l + "l + " + f + "f + " + m + "m + " + s + "s");
        
    }
}catch(err){
    //bot.createMessage(msg.channel.id, err);
}

try{
    if(msg.content === "!p"){
       
       
        try{
        playNames[play] = msg.member.user.id;
        play++;
        bot.createMessage(msg.channel.id, "Count: " + play + " + " + l + "l + " + f + "f + " + m + "m + " + s + "s");
        }catch(err){
            bot.createMessage(msg.channel.id, err);
        }
    }
}catch(err){
    bot.createMessage(msg.channel.id, err);
}try{
    if(msg.content === "!l"){

        try{
        lateNames[l] = msg.member.user.id;
        l++;
        bot.createMessage(msg.channel.id, "Count: " + play + " + " + l + "l + " + f + "f + " + m + "m + " + s + "s");
        }catch(err){
            bot.createMessage(msg.channel.id, err);
        }
    }
}catch(err){
    bot.createMessage(msg.channel.id, err);
}try{
    if(msg.content === "!f"){
        try{
        fillNames[f] = msg.member.user.id;
        f++;
        bot.createMessage(msg.channel.id, "Count: " + play + " + " + l + "l + " + f + "f + " + m + "m + " + s + "s");
        }catch(err){
            bot.createMessage(msg.channel.id, err);
        }
    }
}catch(err){
    bot.createMessage(msg.channel.id, err);
}try{
    if(msg.content === "!m"){
        try{
        maybeNames[m] = msg.member.user.id;
        m++;
        bot.createMessage(msg.channel.id, "Count: " + play + " + " + l + "l + " + f + "f + " + m + "m + " + s + "s");
        }catch(err){
            bot.createMessage(msg.channel.id, err);
        }
    }
}catch(err){
    bot.createMessage(msg.channel.id, err);
}try{
    if(msg.content === "!s"){
        try{
        spiritNames[s] = msg.member.user.id;
        s++;
        bot.createMessage(msg.channel.id, "Count: " + play + " + " + l + "l + " + f + "f + " + m + "m + " + s + "s");
        }catch(err){
            bot.createMessage(msg.channel.id, err);
        }
    }
}catch(err){
    bot.createMessage(msg.channel.id, err);
}try{
    if(msg.content === "!list"){
        var playString = "Playing: ";
        
        console.log(spiritNames.length);
        try{
        for (i = 0; i < playNames.length; i++){
           // playString = playString.concat(playNames[i]);
            var temp = bot.users.get(playNames[i]).username;
            playString = playString.concat(temp);
            playString = playString.concat(" | ");
        
    }

        }catch(err){

        //bot.createMessage(msg.channel.id, err);

    }try{
            playString = playString.concat("\nLate: ");
        for (i = 0; i < lateNames.length; i++){
           
            var temp = bot.users.get(lateNames[i]).username;
            playString = playString.concat(temp);
            playString = playString.concat(" | ");
        }
    }catch(err){
        //bot.createMessage(msg.channel.id, err);
    }try{
            playString = playString.concat("\nFill: ");
        for (i = 0; i < fillNames.length; i++){
            
            playString = playString.concat(bot.users.get(fillNames[i]).username);
            playString = playString.concat(" | ");
        }
    }catch(err){
        //bot.createMessage(msg.channel.id, err);
    }try{

        playString = playString.concat("\nMaybe: ");
        for (i = 0; i < maybeNames.length; i++){
            playString = playString.concat(bot.users.get(maybeNames[i]).username);
            playString = playString.concat(" | ");
        }
    }catch(err){
        //bot.createMessage(msg.channel.id, err);
    }try{
        playString = playString.concat("\nIn Spirit: ");
        for (i = 0; i < spiritNames.length; i++){
            playString = playString.concat(bot.users.get(spiritNames[i]).username);
            playString = playString.concat(" | ");
        }
        bot.createMessage(msg.channel.id, playString);
    }catch(err){
        //bot.createMessage(msg.channel.id, err);
    }
}
}catch(err){
    //bot.createMessage(msg.channel.id, err);
}try{
    if(msg.content === "!clear"){
        play = 0;
        l = 0;
        f = 0;
        s = 0;
        m = 0;

        playNames = [];
        lateNames = [];
        fillNames = [];
        maybeNames = [];
        spiritNames = [];

        playString = "Playing: ";
        lateString = "Late: ";
        fillString = "Fill: ";
        maybeString = "Maybe: ";
        spiritString = "In Spirit: ";
    }
}catch(err){
    bot.createMessage(msg.channel.id, err);
}

});
bot.connect();
