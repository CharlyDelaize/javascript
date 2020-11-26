/* for (var i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
    console.log(i + " est pair");
    }
} */
/* console.log(10 % 2); // Affiche 0 car 10 = 5 * 2 + 0
console.log(11 % 2); // Affiche 1 car 11 = 5 * 2 + 1
console.log(18 % 3); // Affiche 0 car 18 = 3 * 6 + 0
console.log(19 % 3); // Affiche 1 car 19 = 3 * 6 + 1
console.log(20 % 3); // Affiche 2 car 20 = 3 * 6 + 2 */

/* var nombre = prompt("Entrer un chiffre")
for (var i = nombre; i <= 10; i++) {
    if (i % 2 === 0) {
    document.write(i + " est pair <br />");
    }
    else{
        document.write(i + " est impair<br />");
    }
} */

/* var chiffre = parseInt(prompt("Choisir un nombre entier"));
var chiffreMax = (chiffre + 10);
while(chiffre <= chiffreMax){
    if(chiffre % 2 === 0){
        document.write(chiffre + " est pair <br />")
    }else{
        chiffre + " est impair <br />"
    }
    chiffre++
} */

var nbUser = parseInt(prompt("Ton chiffre ?"));
var nbUserMax =(nbUser + 5);
for(var tour = nbUser; tour <= nbUserMax; tour++){
    if(tour % 2 === 0){
        document.write(tour + " est pair<br />");
    }else if (tour % 2 != 0){
        document.write(tour + " est impair<br />");
    }
}