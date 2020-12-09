/* var solution = Math.floor(Math.random() * 100) + 1;// TEST pour mieux vérifier le programme
 console.log("(La solution est " + solution + ")");for (var i = 10; i >= 0 && i <= 10; i--) {
     nbJoueur = parseInt(prompt("Le but du jeu est simple. Je pense à un nombre entre 0 et 100. A ton avis, quel est ce nombre ?"));
     if (!isNaN(nbJoueur)) {
         if (solution === nbJoueur) {
             alert("Bravo vous avez trouvé !");
             i = 0;
         } else {
             if (solution < nbJoueur) {
                 alert("Le nombre est plus petit, essai restant " + i);
                 
             } else {
                 alert("Le nombre est plus grand, essai restant " + i);
             }
         }
     } else {
         alert("Vous n'avez pas saisi un nombre !");
     }
 }
 document.write("La solution est "+ solution); */ 

 /* var solution = parseInt(prompt("Donner un chiffre entre 1 et 100"));

 for (var i = 10; i >= 0 && i <= 10; i--) {
 if(solution > 0 && solution <= 100){
    var nbJoueur = parseInt(prompt("Quel est mon chiffre magique ?"));
    if (!isNaN(nbJoueur)) {
        if (solution === nbJoueur) {
            alert("Bravo vous avez trouvé !");
            i = 0;
        } else {
            if (solution < nbJoueur) {
                alert("Le nombre est plus petit, essai restant  : " + i);
                
            } else {
                alert("Le nombre est plus grand, essai restant : " + i);
            }
        }
    } else {
        alert("Vous n'avez pas saisi un nombre ! essai restant :" + i);
    }
 }else if(solution > 100){
    alert("Le chiffre est trop grand");
 }else{
     alert("Vous n'avez pas saisi un nombre !");
 }
}

document.write("Le chiffre magique était "+ solution); */


/* var nbre = parseInt(prompt("Joueur 1 veuillez saisir un nombre entre 1 et 100"));
var compteur = parseInt(prompt("Joueur 1 veuillir saisir le nombre d'essais"));

while(true)
{
    var reponse = parseInt(prompt("Joueur 2 veuillez saisir votre réponse vous avez " + compteur + " essais"));
    if(!isNaN(reponse)){
        if(reponse >= 1 && reponse <= 100)
        {
            compteur--;

            if(nbre === reponse){
                alert("felicitation vous avez gagnez !");
                break;
            }  else {
                if(nbre < reponse)
                {
                    alert("Moins il vous restes " + compteur + " essais." );
                } else {
                    alert("Plus il vous restes " + compteur + " essais." );
                }

                if(compteur === 0)
                {
                    alert("vous avez perdu ! la solution est : "  + nbre);
                    break;
                }
            }
        } else {
            alert("Veuillez saisir un nombre compris entre 1 et 100 svp !");
        }
    } else {
        alert("Veuillez saisir un nombre svp !");
    }
} */

/* var nbre = parseInt(prompt("Joueur 1 veuillez saisir un nombre entre 1 et 100"));


while(true)
{
    if((nbre >= 1) && (nbre <= 100)){
        var compteur = parseInt(prompt("Joueur 1 veuillir saisir le nombre d'essais"));
        var reponse = parseInt(prompt("Joueur 2 veuillez saisir votre réponse vous avez " + compteur + " essais"));
    if(!isNaN(reponse)){
        if(reponse >= 1 && reponse <= 100)
        {
            compteur--;

            if(nbre === reponse){
                alert("felicitation vous avez gagnez !");
                break;
            }  else {
                if(nbre < reponse)
                {
                    alert("Moins il vous restes " + compteur + " essais." );
                } else {
                    alert("Plus il vous restes " + compteur + " essais." );
                }

                if(compteur === 0)
                {
                    alert("vous avez perdu ! la solution est : "  + nbre);
                    break;
                }
            }
        } else {
            alert("Veuillez saisir un nombre compris entre 1 et 100 svp !");
        }
    } else {
        alert("Veuillez saisir un nombre svp !");
    }
    }else{
        alert("Saisissez un nombre entre 1 et 100 !");
    }
} */

var nbre;do{
    nbre = parseInt(prompt("Joueur 1 veuillez saisir un nombre entre 1 et 100"))
    if(nbre >= 1 && nbre <= 100) {
        var compteur = parseInt(prompt("Joueur 1 veuillir saisir le nombre d'essais"));
        alert("le nombre que vous avez choisi est : " + nbre);
        break;
    } else {
        alert("Veuillez saisir un nombre compris entre 1 et 100 svp !");
    }
}while(true)while(true)
{
    var reponse = parseInt(prompt("Joueur 2 veuillez saisir votre réponse vous avez " + compteur + " essais"));
    if(!isNaN(reponse)){
        if(reponse >= 1 && reponse <= 100)
        {
            compteur--;            if(nbre === reponse){
                alert("felicitation vous avez gagnez !");
                break;
            }  else {
                if(nbre < reponse)
                {
                    alert("Moins il vous restes " + compteur + " essais." );
                } else {
                    alert("Plus il vous restes " + compteur + " essais." );
                }                if(compteur === 0)
                {
                    alert("vous avez perdu ! la solution est : "  + nbre);
                    break;
                }
            }
        } else {
            alert("Veuillez saisir un nombre compris entre 1 et 100 svp !");
        }
    } else {
        alert("Veuillez saisir un nombre svp !");
    }
}