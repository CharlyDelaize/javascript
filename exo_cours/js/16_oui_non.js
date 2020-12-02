/* var reponse = prompt("C'est oui ou bien c'est non ?");
var i = 0;
while(reponse = String){
    if(reponse === 'oui' || reponse === 'non'){
        document.write("Fini ;-) !");
    }else{
        i++;
        document.write(reponse + ", pour la " + i +"ème fois, dis moi oui ou non ! <br />");
        reponse = prompt("C'est oui ou bien c'est non ?");
    }
} */

/* var i = 1;
var reponse = "";

while((reponse != "oui") && (reponse != "non")){
    reponse = prompt("C'est oui ou bien c'est non ?");
    document.write(reponse + " pour la " + i + "° dis moi oui ou non ! <br />");
    i++;
}

document.write("<h2 style='background-color: cyan; text-align: center;'> Fini ! ;-) </h2>"); */

/* var i = 1;
var reponse = "";

while((reponse != "oui") && (reponse != "non")){
    reponse = prompt("Dis moi oui ou non ?");
    document.write(reponse + " pour la " + i + "° dis moi oui ou non !");
    i++
}

document.write("<h2 style='background-color: cyan; text-aligne: center;'> Fini ! ;-) </h2>"); */

var i = 1;
var reponse = "";

while((reponse != "oui") &&(reponse != "non")){
    reponse = prompt("M'enfin, c'est simple, il y a deux réponse, dis moi oui ou non ?")
    document.write("Pour la " + i + "°fois, dis-moi oui ou non !");
    i++;
}

document.write("<h2 style='background-color: cyan; text-aligne: center;'> That's all Folks ! ;-) </h2>");