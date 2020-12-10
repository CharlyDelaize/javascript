function direBonjour(){
    var message = "Bonjour";
    return message;
}

document.write(direBonjour());

document.write("<br>");

function addition(x, y){
    var resultat = x + y;
    return resultat;
}

addition(1, 1);
document.write(addition(1, 1));

document.write("<br>");

function direBonjour(prenom){
    return "Bonjour " + prenom;
}

document.write(direBonjour("Charly"));

document.write("<br>");

document.write(direBonjour("Fairy"));

document.write("<br>");

var maFonction = function(){
    //fait quelque chose
}

//déclaration d'un objet
function MaClass(){};
