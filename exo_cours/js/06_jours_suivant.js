var jour = prompt("Quel jour sommes-nous ?");
var lundi = "lundi"
var mardi = "mardi"
var mercredi = "mercredi"
var jeudi = "jeudi"
var vendredi = "vendredi"
var samedi = "samedi"
var dimanche = "dimanche"

/* if(lundi === jour){
    alert("Demain, on sera " + mardi)
}
if (mardi === jour){
    alert("Demain, on sera " + mercredi)
}

if (mercredi === jour){
    alert("Demain, on sera " + jeudi)
}

if (jeudi === jour){
    alert("Demain, on sera " + vendredi)
}

if (vendredi === jour){
    alert("Demain, on sera " + samedi)
}

if (samedi === jour){
    alert("Demain, on sera " + dimanche)
}

if (dimanche === jour){
    alert("Demain, on sera " + lundi)
}

else{
    alert("Désolé, vérifiez votre orthographe et écrivez en minuscule")
}
*/

switch (jour) {
    case lundi:
      // Instructions à exécuter lorsque le résultat
      // de l'expression correspond à valeur1
      alert("demain on sera " + mardi);
      break;
    case mardi:
      // Instructions à exécuter lorsque le résultat
      // de l'expression correspond à valeur2
      alert("demain on sera " + mercredi);
      break;
    case mercredi:
      // Instructions à exécuter lorsque le résultat
      // de l'expression correspond à valeur2
      alert("demain on sera " + jeudi);
      break;
    case jeudi:
      // Instructions à exécuter lorsque le résultat
      // de l'expression correspond à valeur2
      alert("demain on sera " + vendredi);
      break;
    case vendredi:
      // Instructions à exécuter lorsque le résultat
      // de l'expression correspond à valeur2
      alert("demain on sera " + samedi);
      break;
    case samedi:
      // Instructions à exécuter lorsque le résultat
      // de l'expression correspond à valeur2
      alert("demain on sera " + dimanche);
      break;
    case dimanche:
      // Instructions à exécuter lorsque le résultat
      // de l'expression correspond à valeur2
      alert("demain on sera " + lundi);
      break;
    default:
        //alert("Jour incorrect");
        alert(jour + " n'est pas un jour valable");
        break;
}

/* if(jour === "lundi"){
    document.write("Demain, nous serons mardi");
}else if (jour === "mardi"){
    document.write("Demain, nous serons mercredi");
}else if (jour === "mercredi"){
    document.write("Demain, nous serons jeudi");
}else if (jour === "jeudi"){
    document.write("Demain, nous serons vendredi");
}else if (jour === "vendredi"){
    document.write("Bon weekend");
}else if (jour === "samedi"){
    document.write("Demain, nous serons dimanche");
}else if (jour === "dimanche"){
    document.write("Bon courage");
}else{
    document.write("jour inconnu, veillez entrer un jour de la semaine en minuscule");
} */