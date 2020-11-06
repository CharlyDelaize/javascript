/* var prixht = 1;
var tva = 20;
var montanttva = 1 * 20 / 100;
console.log(montanttva)
var prixttc = prompt(prixht + montanttva);
prixttc = prixht + montanttva;
console.log("le pric ttc est de " + prixttc +'.');
document.write("le pric ttc est de " + prixttc +' € .'); */

var horsTaxe = prompt("Entrer un prix HT : ");

ttc = horsTaxe * 1.2;

document.write("<h2>Le prix ttc de " + horsTaxe + " est de : " + ttc + "</h2>");