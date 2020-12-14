/* 
Document Object Model (DOM)

3 étapes :
- L'apprentisssage du sélécteur (comment séléctionner un élément)
- L'évenement (sur quel évènement on va déclencher cette sélection)
- La manipulation (comment faire des opérations, modifications, etc...)
*/

// ----- SELECTEUR ById -----

var monId = document.getElementById('maSection');
console.log('maBalise : ' + monId);
console.log('maBalise : ' + monId.innerHTML);

// ----- SELECTEUR ByTagName -----

var maBalise = document.getElementsByTagName('span');
console.log('maBalise : ' + maBalise);
console.log('maBalise : ' + maBalise[0].innerHTML);

// ----- SELECTEUR ClassName -----

var mesClasses = document.getElementsByClassName('avion');
console.log("typeof : " + typeof mesClasses);
console.log("mes classes : " + mesClasses);
console.log('mesClasses[0] : '+ mesClasses[0].innerHTML);

var i ;
for (i = 0 ; i < mesClasses.length ; i++)
{
    console.log("boucle " + i + " : " + mesClasses[i].innerHTML);
}

// ----- SELECTEUR querySelector -----

var p = document.querySelector('p');
console.log('querySelector : ' + p.innerHTML);

// ----- SELECTEUR querySelectorAll -----

var lesP = document.querySelectorAll("p");
console.log("querySelectorAll : " + lesP[0].innerHTML);
console.log("querySelectorAll : " + lesP[1].innerHTML);