var heure = (prompt("Entrer une heure"));
var minute = (prompt("Entrer des minutes"));
var seconde = (prompt("Entrer des secondes"));

/* if((heure >= 0) && (heure <= 23)){
    seconde++;
    document.write("Dans une seconde, il sera " + heure + " heure " + minute + " minutes et " + seconde + " secondes" );
}else if(heure >= 24){
    alert("L'heure choisie n'est pas valide");
}else if((minute >= 0) && (minute <= 59)){
    document.write("Dans une seconde, il sera " + heure + " heure " + minute + " minutes et " + seconde + " secondes" );
}else if(minute > 60){
    alert("La minute choisie n'est pas valide");
}else if((seconde >= 0) && (seconde < 59)){
    seconde++;
    document.write("Dans une seconde, il sera " + heure + " heure " + minute + " minutes et " + seconde + " secondes" );
}else if(seconde >= 60){
    alert("La seconde choisie n'est pas valide");
}else if((heure === 23) && (seconde === 59) && (minute === 59)){
    seconde = 0;
    minute = 0;
    heure = 0;
    document.write("Dans une seconde, il sera " + heure + " heure " + minute + " minutes et " + seconde + " secondes" );
}else if((seconde === 59) && (minute === 59)){
    seconde = 0;
    minute = 0;
    heure++;
    document.write("Dans une seconde, il sera " + heure + " heure " + minute + " minutes et " + seconde + " secondes" );
}else if(seconde === 59){
    seconde = 0;
    minute++;
    document.write("Dans une seconde, il sera " + heure + " heure " + minute + " minutes et " + seconde + " secondes" );
}else{
    document.write("erreur");
} */

if((heure >= 0) && (heure <= 23) && (minute >= 0) && (minute <= 59) && (seconde >= 0) && (seconde <= 59)){
    seconde++;
    if(seconde === 60){
        seconde = 0;
        minute++;
        if(minute === 60){
            minute = 0;
            heure++;
            if(heure === 24){
                heure = 0;
            }
        }
    }
    document.write("<p> Dans une seconde, il sera " + heure + " h " + minute + " min " + seconde + " sec.</p>");
} else{
    document.write("Heure incorrecte !");
}

/* var heure = prompt(" Veuillez entrer le nombre d'une heure :");
var minute = prompt("Veuillez entrer le nombre d'une minute:");
var seconde = prompt("Veuillez entrer le nombre d'une seconde :");
var time = new Date();
time.setHours(heure);
time.setMinutes(minute);
time.setSeconds(seconde); 
time.setSeconds( time.getSeconds() +1 );

document.write( time.getHours() +" h " +time.getMinutes() +" min " +time.getSeconds() +" s ");
  */