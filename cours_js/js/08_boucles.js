/*
    Les boucles
*/

// La boucle FOR
/*
    for (3 arguments){
        code
    }
*/
/* 
    1. initialisation du compteur, à partir de combien je compte (par défaut on utilise i pour stocker la valeur)
    2. La condition à vérifier (elle doit être vraie)
    3. Le pas d'incrémentation (combien on ajoute chaque tour, généralement 1 donc i++)
*/

for ( var i = 1; i <= 10; i++){
    document.write("<p> Equipe de France tout faux : " + i + "</p>")
}


// La boucle WHILE
// Très utilisée quand on ne connait pas le nombre de tours à l'avance

var j = 1;
while (j <= 10){
    document.write("<hr /> <p> Non-match volontaire de l'Equipe de France : " + j + "</p>");
    j++; //Incrémentation à la toute fin de la boucle
}

/*
    EXERCICE
    J'ai 1000€ sur mon compte
    Chaque mois j'ajoute 50€
    Combien de temps faut-il pour avoir 2000€ ?
*/

/* var h = 20;
var g = 0;
while (h <= 40){
    console.log((g + (h * 50)));
    document.write("<hr /> <p> Il faudra " + h + " mois pour attendre 2000€ </p>")
    h+=1;
} */


//WHILE
var monCompte = 1000;
var temps = 0;
while(monCompte < 2000){
    monCompte += 50;
    temps ++;
}
document.write(" <p>Sous sur mon compte " + monCompte + "€</p>");
document.write(" <p>Il faut " + temps + " pour avoir 2000€ sur mon compte</p>");

//FOR
var tps = 0
for(var mesSous = 1000; mesSous < 2000; mesSous += 50){
    document.write("<p>Le mois suivant, j'aurai : " + mesSous + "€</p>");
    tps ++;
}
document.write("<p>Il aura fallu " + tps + " mois pour avoir 2000€ sur mon compte");