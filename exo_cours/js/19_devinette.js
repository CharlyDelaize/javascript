/* alert("Bienvenue, je vais te poser une devinette");
var devinette = prompt("Donne un chiffre entre 1 et 100");
var i;
var min = 1;
var max = 101;
chiffre = 0;
function getRandomArbitrary(min, max){
    return Math.random(chiffre) * (max - min) + min;
}

for(i=1; i <= 6; i++){
    if(devinette === chiffre){
        document.write("Vous avez gagné ! Le chiffre était " + chiffre)
    }else if(devinette > chiffre){
        alert("C'est plus, essai " + i);
        prompt(devinette);
    }else if(devinette < chiffre){
        alert("C'est moins");
        prompt(devinette);
    }else{
        document.write("Vous avez perdu ! le chiffre était " + chiffre);
    }
} */

/*
 Activité : jeu de devinette
 */alert("Hello et bienvenue !");// Cette ligne génère aléatoirement un nombre entre 1 et 100
 var solution = Math.floor(Math.random() * 100) + 1;// TEST pour mieux vérifier le programme
 console.log("(La solution est " + solution + ")");for (var i = 1; i <= 6; i++) {
     nbJoueur = parseInt(prompt("Le but du jeu est simple. Je pense à un nombre entre 0 et 100. A ton avis, quel est ce nombre ? Notes le dans la zone ci-dessous, tu as 6 essais."));
     if (!isNaN(nbJoueur)) {
         if (solution === nbJoueur) {
             alert("Bravo vous avez trouvé !");
             i = 6;
         } else {
             if (solution < nbJoueur) {
                 alert("Le nombre est plus petit, essai " + i + " sur 6");
             } else {
                 alert("Le nombre est plus grand, essai " + i + " sur 6");
             }
         }
     } else {
         alert("Vous n'avez pas saisi un nombre !");
     }
 }