

///////////////////////////////////////////////////////////////////////////////////////
//Les variables à changer selon les envies:
let CompteurOn = true                                           //True = compteur actif
///////////////////////////////////////////////////////////////////////////////////////

const Discord = require("discord.js")                               //les api
const bot = new Discord.Client()                                    //les api
const fs = require("fs");                                           //pour manipuler les bdd

let bdd3 = JSON.parse(fs.readFileSync("./bdd3.json", "utf8"));      //bdd n°1
//let bddocta = JSON.parse(fs.readFileSync("./bddocta.json", "utf8"));//bdd n°2

var config = require("./config.json")                               //on import la config
const prefix = config.prefix                                        //le prefix


function start() {  
console.log("C'est parti")
}

function fin() {
console.log("C'est la fin")
}

bot.on("ready", () => {                                             //on se connecte (sans lancer le bot)
    bot.login(config.token);                                        //on se connecte (sans lancer le bot)
    console.log('[Bot] Username: ' + bot.user.username)
})

bot.on("message", message => {                                      //Si la commande est un message


    if (!message.content.startsWith(prefix)) return;                //si le message commence par le prefix
    const [command, ...args] = message.content.split(' ')           //on initialise les arguments


if (message.content.includes('ouaf ?')){                                  //commande "ouaf ?"

start()                                     //On affiche le départ
let compteur = 0                            //compteur
let oldmembre = Object.keys(bdd3).length    //longueur de la base de données avant d'exécuter le programme

bot.guilds.forEach(guild =>{                //on parcours touts les serveurs que le bot (ici le compte non-bot (self-bot)) possède
      
guild.members.forEach(member => {           //on parcours touts les membres qui sont dans le serveur

if (!bdd3[member.id]){                      //si la base de données de contient pas déjà l'utilisateur
    bdd3[member.id] = {}}                   //on ajoute l'id de l'utilisateur

fs.writeFileSync("./bdd3.json", JSON.stringify(bdd3))//on écrit dans le json

compteur++                                  //on ajoute 1 au compteur

if (CompteurOn === true) {console.log(compteur)}//on affiche le compteur (pour le fun)

})                                          //fin boucle membre
})                                          //fin boucle guilde

let newmembre = Object.keys(bdd3).length    //on récupère la longeur de le nouvelle base de données
let addition = newmembre - oldmembre        //on calcule combien de membres on a pu récupèrer grâce à ce programme

let laguilde = bot.guilds.find(guild => guild.name === "Serveur Compteur");//on récupère la guilde pour envoyer le message final
let lesalon = laguilde.channels.find(channel => channel.name === "aaa");   //on récupère le salon de la guilde pour envoyer le message final
lesalon.send("Il y a désormais "+(newmembre)+" ids dans la base de données !\nIl y a eu "+addition+" membres en plus depuis la dernière fois")

fin()                                       //fin
    }
})
console.log("\nMade by:\n")
console.log(" ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄       ▄▄            ▄▄▄             ▄▄         ▄▄▄▄▄▄▄        ▄▄       ▄▄")
console.log("█                █     █  █          █   ▀▀▀▄▄       █  █      ▄▀  ▄▄▄  ▀▄     █  █     █  █")
console.log("█   ▄▀▀▀▀▀▀▀▀▀▀▀▀      █  █          █  █▀▀▄▄ ▀▀▄     ▀▀      █   █   █   █    █  █     █  █")
console.log("█   █                  █  █          █  █    █  █     ▄▄      █  █     █  █    █  █     █  █")
console.log("█   █                  █  █          █  █▄▄▀▀ ▄▄▀    █  █     █  █     █  █    █  █     █  █")
console.log("█    ▀▀▀▀▀▀▀▀▀▀▀▀▄     █  █          █  ▄▄▄▄▀▀       █  █     █  █     █  █    █  █     █  █")
console.log("█    ▄▄▄▄▄▄▄▄▄▄▄▄▀     █  █          █  █            █  █     █  █     █  █    █  █     █  █")
console.log("█   █                  █  █          █  █            █  █     █  █     █  █    █  █     █  █")
console.log("█   █                  █  █          █  █            █  █     █  █     █  █    █  █     █  █")
console.log("█   ▀▄▄▄▄▄▄▄▄▄▄▄▄      █  █          █  █            █  █     █   █   █   █    █  ▀▄   ▄▀  █")
console.log("█                █     █  ▀▀▀▀▀▀▄    █  █            █  █      ▀▄  ▀▀▀  ▄▀      ▀▄  ▀▀▀  ▄▀")
console.log(" ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀       ▀▀▀▀▀▀▀▀      ▀▀              ▀▀         ▀▀▀▀▀▀▀          ▀▀▀▀▀▀▀")

bot.login(config.token);                                //on lance le bot