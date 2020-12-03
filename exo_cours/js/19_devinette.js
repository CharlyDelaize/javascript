alert("Bienvenue, je vais te poser une devinette");
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
}