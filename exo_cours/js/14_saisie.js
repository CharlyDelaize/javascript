/* var chiffre = 0;
while((chiffre < 50) || (chiffre > 100)){
    chiffre = Number(prompt("Saisissez un chiffre"));
} */

/* var nombre = parseInt(prompt("Entrez un nombre entre 50 et 100 :"));
while(nombre >= 50 && nombre <= 100){
    alert("Le nombre : " + nombre + " que vous avez saisie est compris entre 50 et 100");
    nombre = prompt("Entrez un nombre entre 50 et 100 :")
} */

// produit l'inverse de ce qui est demandé

nombre = prompt("Entrez un nombre entre 50 et 100 :");
/* while(nombre < 50 || nombre > 100){
    alert("Vous avez saisie " + nombre + " il n'est pas entre 50 et 100");
    nombre = prompt("Entrez un nombre entre 50 et 100 :");
} */

while(nombre != 'quitter'){
    if(nombre >= 50 && nombre <= 100){
        alert("Vous avez saisie " + nombre + " il est entre 50 et 100");
        nombre = prompt("Entrez un nombre entre 50 et 100 :");
    }else if(nombre < 50 || nombre > 100){
        alert("Vous avez saisie " + nombre + " il n'est pas entre 50 et 100");
        nombre = prompt(" Entrez un nombre entre 50 et 100 :");
    }else{
        alert("Erreur ! Entrez un nombre correct");
    }
}
// ajouter choix quiiter mais redemande un nombre meme si on a bien répondu entre 50 et 100 (demande au minimum deux fois un nombre)