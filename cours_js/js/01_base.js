// Syntaxe de base

// commentaire sur une ligne

/*
    Ici commentaire sur plusieurs lignes
*/

// Déclarer une variable JS
var prenom; // on peut remplacer par let

// Affecter une valeur
prenom = "Charly";

// Déclarer et affecter
var prenom = "Charly";

// On essaye de finir toutes les instructions par un " ; "

// Plusieur variables déclarées à la suite
inst_1;
inst_2; inst_3;

// Afficher une boite de dialogue :
alert("Bienvenue sur mon site");
window.alert("Hello World");
// fonctionne aussi avec prompt

// Afficher dans la console
console.log(prenom);
// On ouvre la console avec la touche F12

//Afficher dans la page web
document.write("Voilà");

//demander une valeur à l'utilisateur
prompt("Veuillez entrer votre age");
window.prompt("Pareil");

// Pour manipuler la valeur d'un prompt, on le diffuse dans la variable
var age;
prompt("Quel age avez-vous ?");
document.write(age);

// Attention, le JS est sensible à la case sensitive !!!
// Ma variable c'est différent de ma variable en (camelcase) et ma variable en (snakecase)
// Une variable ne peut pas commencer par un chiffre, ne doit pas contenir de caractère alphanumérique, et ne peut pas être un mot réservé

//Les types de variables
// Les chaines de caractère (string)
var vacances = "2025";
var destination = "Australie";

// Les nombres entiers (integer ou int)
var annee = 2025;

// Les nombres décimaux (float)
var nombreAvirgule = -5.35;

// Les booléens (vrai ou faux)
var booleen = false; // ou à l'inverse true

// Les CONSTANTES
/*
    La déclaration de constante permet de rendre la variable accessuible uniquement en lecture. Variable != constante
    Contrairement à une variable après affectation (de valeur), on ne pourra plus la modifier.
*/
//Par convention, les constantes sont en majuscule
const PAYS = "FRANCE";
const AN = '2020';
const BIRTH = 2020;

// Connaître le type d'une variable
console.log(vacances);
console.log(typeof vacances);
console.log(annee);
console.log(typeof annee);

// En JS,les variables sont auto-typés
// On Peut convertir une variable de type NUMBER en STRING et aussi STRING en NUMBER
// On utilisera les fonctions natives de JS ParsInt(), parseFloat et toString

var unChiffre = "12";
console.log(unChiffre);
console.log(typeof unChiffre);

// STRING -> NUMBER
unChiffre = parseInt(unChiffre);
console.log(typeof unChiffre);

unChiffre = "12.22";

// STRING -> FLOAT
unChiffre = parseFloat(unChiffre);

//NUMBER -> STRING
var nbEnLettre = 258;
nbEnLettre = nbEnLettre.toString();
console.log(typeof nbEnLettre);

// FIN