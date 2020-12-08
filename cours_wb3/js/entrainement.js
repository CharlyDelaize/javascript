/* Le commentaire
sur 
plusieurs
lignes */

//Le commentaire sur une ligne

// AFFICHAGE

document.write("<h2>Commentaire, Affichage et Concaténation</h2>");
console.log('Hello world');

// CONCATENATION

//"+"

document.write('Bonjour'+'Tout le monde');

document.write("<h2>Variables, contantes et type de données</h2>");

// VARIABLE

// Qu'est-ce qu'une variable ?
// Une variable est un espace nommé appelé mémoire qui permet de conserver une valeur

var age = 15;
var monText = "Hello world";
var monTableau = [1, 2, 3];

//OUI : monAge, mon_age, age, age1
//NON : MONage, Monage, MonAge, 1age, mon-age, /age, mon.age

var nom = "JAAGOUB", prenom = "Yassine", age = 15;

prenom = "Jack";
//prembom += "jack"

document.write(prenom); //Jack

var fruits = "pomme";

document.write(fruits); //pomme

fruits += "fraise";

document.write(fruits); //fraise

//CONSTANTE

const MA_VARIABLE = 20;
const MAX = 199;

console.log(typeof age);
console.log(typeof monText);
console.log(typeof monTableau);

document.write("<h2>Opérateurs arithmétiques</h2>");


//ADDITION
var addition = 10 + 5; //15
document.write(addition);

//SOUSTRACTION
var soustraction = 10 - 5; //5
document.write(soustraction);

//MULTIPLICATION
var multiplication = 10 * 5; //50
document.write(multiplication);

//DIVISION
var division = 10 / 5; //50
document.write(division);

//var fruits += fraises
var a = 5;
a += 5;
//a = a + 9
//5 = 5 + 9
document.write(a);//14

//a *= 10;
//a -= 10;
//a /= 2;

document.write("<h2>Opérateurs comparaisons</h2>");

// > strictement supérieur
// < strictement inférieur
// >= supérieur ou égal
// <= inférieur ou égal
// = affectation
// == comparaison de VALEUR
// === comparaison de VALEUR et du TYPE
// != différent de
// && ET
// || OU

document.write("<h2>Conditions</h2>");

//déclaration de 3 variables a, b et c, et dans un premeier temps, je vais demander SI a est SUPERIEUR à b
var a = 99, b = 43, c = 22;

if (a > b){
    //instruction
    document.write('Oui a est supérieur à b');
}

//SI a est SUPERIEUR à b ET si b est SUPERIEUR à c
if(a > b && b > c){
    document.write('VRAI');
}


if(a > b || b < c){
    document.write('VRAI');
}

if(a > b && b < c){
    document.write('VRAI');
} else {
    document.write('FAUX');
}

var maVariable = 1, maVariable2 = "1";
if(maVariable == maVariable2){
    document.write('VRAI');
}

if(maVariable === maVariable2){
    document.write('VRAI');
} else {
    document.write('FAUX');
}

// Condition ternaire
var voiture = "bmw";
document.write((voiture == 'bmw') ? 'oui' : 'non');

//NaN = Not a Number
var nombre = "toto";

document.write("<br>");
resultat = parseInt(nombre) + age;

document.write(resultat + "<br>")

if (!isNaN(nombre)){
    document.write('VRAI');
}else{
    document.write('FAUX');
}

//déclarer une variable age ensuite vérifier si l'age saisi de l'utilisateur (vous) est majeur ou mineur

var agePersonne = 26
if(agePersonne >= 18){
    document.write("Vous etes majeur");
}else{
    document.write("vous etes mineur");
}

//déclarer et afficher une constante

const AGE_PERSONNE = 26;
document.write(AGE_PERSONNE);

//déclarer une variable string et afficher son type dans la console

var mot = "renard";
console.log(typeof mot);

//écrire une condition ternaire qui vérifie si 2 est plus petit que 4
var chiffre1 = 2, chiffre2 = 4;
document.write((chiffre1 < chiffre2) ? 'oui' : 'non');

//écrire une variable nom qui a pour valeur 10 et vérifier que le nombre est bien un "number"
document.write("<br>");
var chiffre3 = 10;
document.write(typeof chiffre3);
document.write("<br>");
if(typeof nombre == "number")
{
    document.write('nombre est de type number');
}

//calculer le prix TTC de ma PS5 à 499.99€ et afficher le résultat (la TVA est à 19.6%), le prix est 597.98 TTC
var prixht = 499.99, tva = 19.6
var prixttc;
var prixtva;
prixtva = prixht * tva / 100;
prixttc = prixht + prixtva
document.write(prixttc);

//Conditions switch

var couleur = "jaune";

switch(couleur)
{
    case 'bleu':
        document.write('vous aimez le bleu');
        break;
    case 'rouge':
        document.write('vous aimez le rouge');
        break;
    case 'rose':
        document.write('vous aimez le rose');
        break;
    case 'jaune':
        document.write('vous aimez le jaune');
        break;
    default:
        document.write('vous aimez aucune couleur');
        break;
}

var age = prompt("saisir un age");
console.log("le type d'age est : " + typeof age);
// SI le nombre saisi est bien un "number"
// vérifier si l'utlisateur est majeur ou mineur
if(!isNaN(age)){
    if(age >= 18)
    {
        document.write('Majeur');
    } else {
        document.write('mineur');
    }
}

var resultat = "10" + "2";
var resultat2 = 1 + 1;
document.write(resultat);
document.write(resultat2);

document.write("<h2>Les Boucles</h2>");

var a = 10;

for (var i = 0 ; i < a ; i++)
{
    document.write("C'est le tour nuréro : " + i + "<br>");
}

var b = 0;

for (var i = 10 ; i > b ; i--)
{
    document.write("C'est le tour nuréro : " + i + "<br>");
}

var j = 0
while(j > a)
{
    document.write('Je suis le tour numéro : ' + j + "<br>");
    j++;
}

var k = 0;
do{
    document.write('Je suis le tour numéro : ' + k + "<br>");
    k++;
}while(k < a);

document.write("<h2>Array (tableaux)</h2>");

var liste_fruits = ['banane', 'orange', 'framboise', 'fraise', 'poire', 'kiwi', 'cerise'];
//liste_fruits = "banane" + "orange" + framboise

document.write(liste_fruits.join('-') + "<br>");

for(var i = 0 ; i < 7 ; i++)
{
    document.write(liste_fruits[i] + "<br>");
}

var k = 0
document.write("boucle while")
while(k < liste_fruits.length){
    document.write(liste_fruits[k] + "<br>");
    k++
}

var liste_nombre = [1, 2, 3, 4, 19, 918];
for(var l = 0; l < 6; l++)
{
    document.write(liste_fruits[l] + "<br>");
}