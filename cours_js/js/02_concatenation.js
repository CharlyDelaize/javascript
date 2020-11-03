//alert("Welcome to the Javascript Universe !");         // = une ligne  /* plusieurs lignes */

/* ---- LA CONCATENATION ---- */

/* var prenom = "charly"
var age = 26
var chomage = false
console.log(prenom)
var prenom = "amine"
console.log(prenom) */

var annee = 2020;
var futur = 1;
var calcul = annee + futur;
// console.log(calcul)
document.write(calcul + "<br>"); // -> 2021 avec saut de ligne

var mois = "7";
var calcul2 = annee + mois;
console.log(calcul2 + "<br>"); // -> 20207<br>
//document.write(calcul2 + "<br>")

var DebutPhrase = "Aujourd'hui ";
var NbrStagiares = 11;
var SuitePhrase = " stagiaires";
var finPhrase = "sont présents.";

// Affichez la phrase en un seul morceau en utilisant la concaténation (console ou document)

document.write(DebutPhrase + NbrStagiares + SuitePhrase + ' ' + finPhrase);
/* console.log(DebutPhrase+NbrStagiares+SuitePhrase+ ' ' +finPhrase); */