premierChiffre = prompt("Ecrivez un premier chiffre");
deuxiemeChiffre = prompt("Ecrivez un deuxième chiffre");

if (premierChiffre < deuxiemeChiffre){
    alert(premierChiffre + " est inférieur à " + deuxiemeChiffre)
} else if (premierChiffre > deuxiemeChiffre){
    alert(premierChiffre + " est supérieur à " + deuxiemeChiffre)
} else if (premierChiffre = deuxiemeChiffre){
    alert(premierChiffre + " est égal à " + deuxiemeChiffre)
}


/* var premierChiffre = parseInt(prompt("Ecrivez un premier chiffre"));
var deuxiemeChiffre = parseInt(prompt("Ecrivez un deuxième chiffre"));

if((!isNaN(nb1)) &&  (!isNaN(nb2))){
    if (nb1<nb2){
        document.write("Votre premier chiffre : " + premierChiffre + " est plus petit que votre deuxième : " + deuxiemeChiffre);
    }else if (nb1>nb2){
        document.write("Votre premier chiffre : " + premierChiffre + " est plus grand que votre deuxième : " + deuxiemeChiffre);
    }else{
        document.write("Votre premier chiffre : " + premierChiffre + " est égal à votre deuxième : " + deuxiemeChiffre);
    }
}else{
    alert('Vous n\'avez pas saisi de chiffre(s)');
} */

// isNaN : is not a number -> n'est pas un nombre
// !isNaN : is a number -> c'est un nombre
// \ : caractère d'échappement pour éviter que l'apostrophe soit pris en compte