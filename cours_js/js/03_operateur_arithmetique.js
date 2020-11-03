/* 
1. Addition +
    (je peux déclarer plusieurs variables à la suite)
*/
/* Je déclare mes variables */
var nb1, nb2, resultat;

nb1 = 10;
nb2 = 5;


/* j'utilise mes variables avec un calcul */
resultat = nb1 + nb2;
/* J'affiche mon résultat dans ma console */
console.log("Le résultat de l'addition est " + resultat);

/* 
2. Soustraction - */

resultat = nb1 - nb2;
console.log("Le résultat de la soustraction est " + resultat);

/* 
3. Multiplication * */

resultat = nb1 * nb2;
console.log("Le résultat de la multiplication est " + resultat);

/* 
4. Division / */

resultat = nb1 / nb2;
console.log("Le résultat de la division est " + resultat);

/* 
5. Modulo %

Le modulo retourne le reste d'un division 
*/

resultat = nb1 % nb2;
console.log("Le résultat du modulo est " + resultat);

// Je réaffecte une valeur nb1
nb1 = 11;
resultat = nb1 % nb2;
console.log("Le reste de la division de " + nb1 + " par " + nb2 + " " + "est égal à : " + resultat);

/* 
6. Ecriture simplifiée 
*/
nb1 = 15;
nb1 = nb1 + 5; //égal à 20

nb1 += 10; //égal à 30

console.log("Le résultat de nb += 10 est" + " " +nb1); //égal à 30, alternance de guillemets simples et doubles pour ne pas casser ma chaine de caractère

//si j'utilise un ' (apostrophe) dans une phrase concaténée, je peux échapper le caractère à l'aide d'un antislash \ (alt gr + 8)
