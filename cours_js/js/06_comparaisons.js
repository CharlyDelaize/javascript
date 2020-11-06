var nb1 = 123; // var type number et plus précisemnt integer (int)
var nb2 = "123"; //var de type chaine de caractère (string ou str)

console.log(nb1 == nb2); //retourne un booléen (true)
// == signifie "égal à"

console.log(nb1 === nb2); //retourne un booléen (false)
// === signifie "égal en type et en valeur"

console.log(nb1 != nb2); // retourne false
// != signifie différent

console.log(nb1 !== nb2); // retourne false
// !== signifie "strictement différent en valeur et en type"

//EXERCICE
//prombt, condition, comparaisons

var prenomBDD, ageBDD;

prenomBDD = "Charly";
ageBDD = 26;


var prenomCompte = prompt("Quel est votre prénom ?");

if(prenomBDD === prenomCompte){
    var ageCompte = parseInt(prompt("Votre âge ?"));
    if(ageBDD === ageCompte){
        alert("Bienvenue " + prenomBDD)
    }else{
        alert("Erreur d'âge");
    }
}else{
    alert("Attention, prénom non reconnu !")
}