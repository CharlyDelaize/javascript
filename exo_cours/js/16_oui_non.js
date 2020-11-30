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

var i = 1;
var reponse = "";

while((reponse != "oui") && (reponse != "non")){
    reponse = prompt("C'est oui ou bien c'est non ?");
    document.write(reponse + " pour la " + i + "° dis moi oui ou non ! <br />");
    i++;
}
document.write("<h2 style='background-color: cyan; text-align: center;'> Fini ! ;-) </h2>");