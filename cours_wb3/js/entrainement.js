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

document.write("<br>");

//SI a est SUPERIEUR à b ET si b est SUPERIEUR à c
if(a > b && b > c){
    document.write('VRAI');
}

document.write("<br>");

if(a > b || b < c){
    document.write('VRAI');
}

document.write("<br>");

if(a > b && b < c){
    document.write('VRAI');
} else {
    document.write('FAUX');
}

document.write("<br>");

var maVariable = 1, maVariable2 = "1";
if(maVariable == maVariable2){
    document.write('VRAI');
}

document.write("<br>");

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

document.write("<br>");

//déclarer une variable age ensuite vérifier si l'age saisi de l'utilisateur (vous) est majeur ou mineur

var agePersonne = 26
if(agePersonne >= 18){
    document.write("Vous etes majeur");
}else{
    document.write("vous etes mineur");
}

document.write("<br>");

//déclarer et afficher une constante

const AGE_PERSONNE = 26;
document.write(AGE_PERSONNE);

document.write("<br>");

//déclarer une variable string et afficher son type dans la console

var mot = "renard";
console.log(typeof mot);

//écrire une condition ternaire qui vérifie si 2 est plus petit que 4
var chiffre1 = 2, chiffre2 = 4;
document.write((chiffre1 < chiffre2) ? 'oui' : 'non');

document.write("<br>");

//écrire une variable nom qui a pour valeur 10 et vérifier que le nombre est bien un "number"
document.write("<br>");
var chiffre3 = 10;
document.write(typeof chiffre3);
document.write("<br>");
if(typeof nombre == "number")
{
    document.write('nombre est de type number');
}

document.write("<br>");

//calculer le prix TTC de ma PS5 à 499.99€ et afficher le résultat (la TVA est à 19.6%), le prix est 597.98 TTC
var prixht = 499.99, tva = 19.6
var prixttc;
var prixtva;
prixtva = prixht * tva / 100;
prixttc = prixht + prixtva;
document.write(prixttc);

document.write("<br>");

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

document.write("<br>");

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

document.write("<br>");

var resultat = "10" + "2";
var resultat2 = 1 + 1;
document.write(resultat);
document.write(resultat2);

document.write("<br>");

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
    k++;
}


//Boucle for : demander l'age de l'utilisateur tant que celui ci n'est pas majeur

/* var i
for(i = 0; i < 1; i++) // ne marche que si on enlève l'incrémenation
{
    age = prompt("quel est votre age");
    if(age >= 18){
        alert("Vous etes majeur");
        break;
    }
}while(true); */

//Boucle while : demander l'age de l'utilisateur tant que celui ci n'est pas majeur

/* var age;
while(true){
    age = prompt("Quel age a tu ?");
    if(age >= 18) {
        alert('vous etes majeur'); 
    }
} */

//Boucle do while : demander l'age de l'utilisateur tant que celui ci n'est pas majeur

/* do{
    age = prompt("Quel age as-tu");
    if(age >= 18){
        alert("vous etes majeur");
        break;
    }
}while(true) */

document.write("<h2>Tableau multi-dimensionnel<h2>");

var list_fruits2 = [['fraise', 'pomme', 'kiwi'],['tomate', 'mangue'],['Pierre','Paul','Jacques']];

document.write((list_fruits2[0][0]) + "<br>"); //fraise
document.write((list_fruits2[0][1]) + "<br>"); //pomme
document.write((list_fruits2[1][0]) + "<br>"); //tomate
document.write((list_fruits2[1][1]) + "<br>"); //mangue
document.write('<br>');
for(var i = 0 ; i < list_fruits2.length ; i++){
    for(var j = 0 ; j < list_fruits2[i].length ; j++)
    {
        document.write(list_fruits2[i][j] + "<br>");
    }
}

// Déclarer une liste de prénom minimum 10 prénom
// Premier exercice afficher un message de bienvenue lorsque vous avez un "pierre" dans votre liste de contact
// Deuxième étape, afficher le nombre de pierre dans votre tableau

var liste_prenom = ['Pierre', 'Paul', 'Jacques', 'Jean', 'Pierre', 'Paul', 'Jacques', 'Jean', 'Louis', 'Pierre'];
var compteur = 0;
for(i = 0 ; i < liste_prenom.length ; i++)
{
    if(liste_prenom[i] == "Pierre"){
        document.write("Bienvenue à toi ! " + liste_prenom[i] + "<br>");
        compteur++;
    }
}

document.write("J'ai " + compteur + " Pierre dans mon tableau");

document.write("<h2>Fonctions utilisateurs et predefinies<h2>");

var phrase = "BONSOIR";

document.write(phrase.toLowerCase() + "<br>"); //bonsoir

function afficher(){
    document.write('Hello World');
}

afficher();

function d(arg){
    document.write(arg + "<br>");
}

d("Salut Charly");
d("Salut Uiu");
d(3);
d("Salut Charly" + "Salut Atoi");

function toto(){
    var a = 1;
    return a;
}

document.write(toto());

document.write("<br>");

function plusieursParam(prenom, nom, age){
    document.write("Bonjour " + prenom + " " + nom + " tu as " + age + " ans");
}

plusieursParam("Charly", "Delaize", 26);
document.write("<br>");
plusieursParam("Machin","Chose",62);

//déclarer une fonction qui calcule le prix d'un article
// TVA = 19.6 ou 1.196
// prixTTC(399) -----> 477.204
// prixTTC(14,99) -----> 17.92804
// afficher le prix arrondi à 2 chiffres après la virgule, il existe une fonction prédéfinie (à rechercher sur google)

document.write("<br>");

var prixHT = 399;
var tva = 1.196;
var prixTTC = prixHT * tva;
prixTTC = Math.round(477.204 * 100) / 100 ;
document.write(prixTTC);

document.write("<br>");

var prixHT = 14.99;
var prixTTC = prixHT * tva;
prixTTC = Math.round(17.92804 * 100) / 100;
document.write(prixTTC);

document.write("<br>");

function prixTTC(prix){
    prix = prix * 1.196;
    return Math.round(prix * 100) / 100;
}

var maFunction = function () {
    document.write('nous sommes jeudi');
}

maFunction();

document.write("<br>");

(function(){
    document.write('cette fonction est anonyme et automatiquement executé');
})();

document.write("<br>");

var animal = "chien";

function test(){
    document.write(animal + "<br>");
}

test()

function test2(){
    animal2 = "chat";
    document.write(animal2 + "<br>");
}

test2()
document.write(animal2 + "<br>");

document.write("<h2>Objets</h2>");

var monObjet = {};

monObjet.prenom = 'Charly';
monObjet.nom = 'DELAIZE';

document.write(monObjet.prenom + "<br>");

var Homme = {
    nom : 'Winter',
    prenom : 'Thomas',
    age : 35
};

document.write(Homme.prenom);

var Voiture = {
    marque : 'mercedes',
    modele : 'class A',
    couleur : 'noir',
    changeDeCouleur : function(nouvelle){
        return this.couleur = nouvelle;
    },
    optionDeSerie : ['clim', 'autoradio', 'park-assist'],
    annee : 2020,
    motorisation : {
        energie : 'diesel',
        puissance : '110cv'
    }
};

document.write(Voiture.couleur + "<br>"); //noir
Voiture.changeDeCouleur("rose");
document.write(Voiture.couleur + "<br>"); //rose
document.write(Voiture.optionDeSerie[0] + "<br>"); //clim
document.write(Voiture.motorisation.energie + "<br>"); //diesel

//foreach
for(var element in Voiture){
    document.write(element + " : " + Voiture[element] + "<br>");

    if(typeof Voiture[element] === "object") {
        for(var elementB in voiture.motorisation){
            document.write(elementB + ":" + Voiture.motorisation[elementB] + "<br>");
        }
    }
}

function Animal(nom, espece, categorie, age){
    this.nom = nom;
    this.espece = espece;
    this.categorie = categorie;
    this.age = age;
}

var dauphin = new Animal('Flipper', 'dauphin', 'mammifere', '3');

document.write(dauphin.nom);//Flipper

function Contact(nom, prenom, adresse, age){
    this.nom = nom;
    this.prenom = prenom;
    this.adresse = adresse;
    this.age = age;
}

var contact1 = new Contact('DELAIZE', 'Charly', '45 rue des Spheres', 26);

document.write(contact1.adresse);

document.write("<br>");

//Prototypage

function Vehicule(marque){
    this.marque = marque;
}

var megane = new Vehicule('Renault');

megane.demarrer = function() {
    document.write('vroom vroom je demarres <br>')
}

megane.demarrer()