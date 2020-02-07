const Eris = require('eris').Client;
const bot = new Eris('Njc1NDM4MDY2ODY5MDc1OTcw.Xj3Iwg.ch46tbGAXSyAX07ImsO_UbAgp3Q');
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
        bot.createMessage(msg.channel.id, "!play to add to play count\n!l to add to late count \n!f to add to fill count\n!m to add to maybe count\n!s to add to in spirit count \n!count to see current count \n!list to see players in the count ");
    }

    if(msg.content === "!play" || msg.content == "!l" || msg.content === "!f" || msg.content === "!m" || msg.content === "!s"){
    
        for (i = 0; i < playNames.length; i++){
        if(playNames[i] === msg.member.user.username){
            play--;
            for (j = i; j < playNames.length; j++){
                if(playNames.length == 1){
                    playNames[0] = "";
                }
                else if(j<= playNames.length);
                playNames[j] = playNames[j++];
        }
    }
}

    for (i = 0; i < lateNames.length; i++){
        if(lateNames[i] === msg.member.user.username){
            l--;
            for (j = i; j < lateNames.length; j++){
                if(lateNames.length == 1){
                    lateNames[0] = "";
                }
                else if(j< lateNames.length);
                lateNames[j] = lateNames[j++];
            }
        }
    }

    for (i = 0; i < fillNames.length; i++){
        if(fillNames[i] === msg.member.user.username){
            f--;
            for (j = i; j < fillNames.length; j++){
                if(fillNames.length == 1){
                    fillNames[0] = "";
                }
                else if(j< fillNames.length);
                fillNames[j] = fillNames[j++];
            }
        }
    }

    for (i = 0; i < maybeNames.length; i++){
        if(maybeNames[i] === msg.member.user.username){
            m--;
            for (j = i; j < maybeNames.length; j++){
                if(maybeNames.length == 1){
                    maybeNames[0] = "";
                }
                else if(j< maybeNames.length);
                maybeNames[j] = maybeNames[j++];
            }
        }
    }

    for (i = 0; i < spiritNames.length; i++){
        if(spiritNames[i] === msg.member.user.username){
            s--;
            for (j = i; j < spiritNames.length; j++){
                if(spiritNames.length == 1){
                    spiritNames[0] = "";
                }
                else if(j< spiritNames.length);
                spiritNames[j] = spiritNames[j++];
            }
        }
    }



}
    if(msg.content === "!count") {
        try{
        bot.createMessage(msg.channel.id, "Count: " + play + " + " + l + "l + " + f + "f + " + m + "m + " + s + "s");
        }catch(err){
            bot.createMessage(msg.channel.id, err);
        }
    }


    if(msg.content === "!play"){
       
       
        try{
        playNames[play] = msg.member.user.username;
        play++;
        bot.createMessage(msg.channel.id, "Count: " + play + " + " + l + "l + " + f + "f + " + m + "m + " + s + "s");
        }catch(err){
            bot.createMessage(msg.channel.id, err);
        }
    }
    if(msg.content === "!l"){

        
        try{
        lateNames[l] = msg.member.user.username;
        l++;
        bot.createMessage(msg.channel.id, "Count: " + play + " + " + l + "l + " + f + "f + " + m + "m + " + s + "s");
        }catch(err){
            bot.createMessage(msg.channel.id, err);
        }
    }
    if(msg.content === "!f"){
        try{
        fillNames[f] = msg.member.user.username;
        f++;
        bot.createMessage(msg.channel.id, "Count: " + play + " + " + l + "l + " + f + "f + " + m + "m + " + s + "s");
        }catch(err){
            bot.createMessage(msg.channel.id, err);
        }
    }
    if(msg.content === "!m"){
        try{
        maybeNames[m] = msg.member.user.username;
        m++;
        bot.createMessage(msg.channel.id, "Count: " + play + " + " + l + "l + " + f + "f + " + m + "m + " + s + "s");
        }catch(err){
            bot.createMessage(msg.channel.id, err);
        }
    }
    if(msg.content === "!s"){
        try{
        spiritNames[s] = msg.member.user.username;
        s++;
        bot.createMessage(msg.channel.id, "Count: " + play + " + " + l + "l + " + f + "f + " + m + "m + " + s + "s");
        }catch(err){
            bot.createMessage(msg.channel.id, err);
        }
    }
    if(msg.content === "!list"){
        var playString = "Playing: ";
        var lateString = "Late: ";
        var fillString = "Fill: ";
        var maybeString = "Maybe: ";
        var spiritString = "In Spirit: ";
        
        try{
        for (i = 0; i < playNames.length; i++){
            playString = playString.concat(playNames[i]);
            playString = playString.concat(" ");
        }
        bot.createMessage(msg.channel.id, playString);

        for (i = 0; i < lateNames.length; i++){
            lateString = lateString.concat(lateNames[i]);
            lateString = lateString.concat(" ");
        }
        bot.createMessage(msg.channel.id, lateString);

        for (i = 0; i < fillNames.length; i++){
            fillString = fillString.concat(fillNames[i]);
            fillString = fillString.concat(" ");
        }
        bot.createMessage(msg.channel.id, fillString);

        for (i = 0; i < maybeNames.length; i++){
            maybeString = maybeString.concat(maybeNames[i]);
            maybeString = maybeString.concat(" ");
        }
        bot.createMessage(msg.channel.id, maybeString);

        for (i = 0; i < spiritNames.length; i++){
            spiritString = spiritString.concat(spiritNames[i]);
            spiritString = spiritString.concat(" ");
        }
        bot.createMessage(msg.channel.id, spiritString);
        }catch(err){
            bot.createMessage(msg.channel.id, err);
        }
    }
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


});
bot.connect();