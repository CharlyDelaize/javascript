/* resultat = prompt("Saisissez votre moyenne du baccalauréat");

if (resultat < 10){
    document.write("Vous êtes recalé");
} else if (resultat >= 10, resultat < 12){
    document.write("vous êtes reçu")
} else if (resultat >= 12, resultat <= 20){
    document.write("Vous êtes reçu avec mention")
} else if (resultat > 20){
    document.write(resultat + " n'est pas un chiffre valable")
} else {
    alert("erreur de saisie")
} */

var moyenne = parseFloat(prompt("Quelle est la moyenne au bac ?"));

if(moyenne < 10){
    document.write("Recalé");
}else if ((moyenne >= 10) && (moyenne<12)){
    document.write("Tu passes");
}else if((moyenne >= 12) && (moyenne <= 20)){
    document.write("Bravo pour la mention");
}else{
    document.write("Et de 0 à 20 ça donne...");
}