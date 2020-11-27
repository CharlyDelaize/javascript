//boucle pour faire une table

/* var choix = prompt("Entrez un nombre à multiplier par 10 ...");
for (var i = 1; i <= 10; i++){
    var multiplication = i * choix;
    document.write(choix + " X " + i + " = " + multiplication + "<br />");
} */

/* var nombre = prompt("Saisissez un chiffre");
var resultat = nombre;
if(resultat === nombre){
    document.write(resultat * 1 + "<br />");
    document.write(resultat * 2 + "<br />");
    document.write(resultat * 3 + "<br />");
    document.write(resultat * 4 + "<br />");
    document.write(resultat * 5 + "<br />");
    document.write(resultat * 6 + "<br />");
    document.write(resultat * 7 + "<br />");
    document.write(resultat * 8 + "<br />");
    document.write(resultat * 9 + "<br />");
    document.write(resultat * 10 + "<br />");
}else{
    alert("erreur de saisie");
} */

//boucle + conditions

/* var choix = prompt("Entrez un nombre à multiplier par 10 ... ENTRE 2 et 9");
if((choix >= 2) && (choix <= 9)){
    for (var i = 1; i <= 10; i++){
        var multiplication = i * choix;
        document.write(choix + " X " + i + " = " + multiplication + "<br />");
    }
}else{
    document.write("Ce doit être un nombre compris entre 2 et 9 (inclus)");
} */


/* var nombre = prompt("Saisissez un chiffre");
for(var i = 1; i <= 10; i++){
    document.write(nombre + " multiplié par " + i + " est égal à " + nombre * i + "<br />");
} */

/* var nombre = prompt("Saisissez un chiffre");
var multiplication = i * nombre;
if((nombre >= 2) || (nombre <= 9)){
    while(i = 1){
        var multiplication = i * nombre;
        document.write(nombre + " X " + i + " = " + multiplication + "<br />");
    }
}else{
    document.write("Ce doit être un nombre compris entre 2 et 9");
} */

/* var nombre = prompt("Entrer un nombre à multiplier");                         // PENSES A LA VARIABLE
if ((nombre >= 2) && (nombre <= 9)) {                                         // (|| = OU)  (&& = ET  ) 
    for (var i = 1; i <= 10; i++) {
        var resultat = nombre*i;
        document.write(nombre+ " x " + i + " = "+ resultat + "<br>");
    }
} else {
    alert("Entre un nombre entre 2 et 9");
    prompt("Entrez un nombre à multiplier");
} */

/* var choix =prompt("Choisis un nombre entre 1 et 9");
while ((choix > 1) || (choix < 10));{
    if ((choix >= 2) && (choix <= 9)){
        for (var i = 1; i <= 10; i++){
            var res = choix * i;
            document.write(choix + " x " + i + " = " + resultat + "<br />");
        }
        break;
    }else{
        choix = Number(prompt("Entrez un nombre entre 2 et 9 : "));
    }
} */

var nombre = 0
while ((nombre < 1) || (nombre > 10)){
    if ((nombre >= 2) && (nombre <= 9)){
        for (var i = 1; i <= 10; i++) {
            var multiplication = 1 * choix;
            document.write(nombre+ " x " + i + " = "+ multiplication + "<br> /");
        }
    } else {
        choix = Number(prompt("Entrez un nombre entre 2 et 9 : "));
    }
}