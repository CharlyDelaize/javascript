// alert("welcome")

//structure de base IF

if (true){// (la condition à vérifier)
    //code
}

var nb1 = 10;
if (nb1 < 50){
    console.log("nb1 est inférieur à 50");
}

if (true){
    //code pour true
}else{
    //code pour faux
}

if (nb1 > 50){
    console.log("nb1 est supérieur à 50");
}else{
    console.log("nb1 est inférieur à 50");
}

//Exercice :On vérifie l'age d'un internaute
//Si il est majeur, je lui souhaite la bienvenue, 
//Sinon, je lui signale(1) et je lui renvoie sur un autre site(2)  -> document.location

var internaute1 = prompt("Quel âge avez-vous ?"); /* parseInt("") : force le type de variable à être un entier */
if (internaute1 >= 18){
    document.write("Bienvenue !");
}else{
    alert("vous n'êtez pas majeur !");
    document.location = 'https://www.google.com/' ;
    document.write(document.location);
}