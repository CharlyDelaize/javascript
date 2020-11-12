/*
L'opérateur ET : && ou AND
*/
// L'opérateur && ou AND permet de cumuler deux conditions

if ((prenomBDD === prenomCompte) && (ageBDD === ageCompte));{
    //code si les 2 condition sont validés
}

=> si a est FAUX et b est VRAI => FAUX
=> si a est VRAI et b est FAUX => FAUX
=> si a est FAUX et b est FAUX => FAUX
=> si a est VRAI et b est VRAI => VRAI

/*
    L'opérateur OU : || ou OR  ( | -> alt gr + 6)
*/
//L'opérateur || ou OR permet de rentrer dans la condition si au moins une des deux est vrai

if ((prenomBDD === prenomCompte) || (ageBDD === ageCompte));{
    //code si uen des 2 condition est validée
}

=> si a est FAUX et b est VRAI => VRAI
=> si a est VRAI et b est FAUX => VRAI
=> si a est FAUX et b est FAUX => FAUX
=> si a est VRAI et b est VRAI => VRAI

/*
    L'opérateur contraire : !
*/

var utilisateurLog = true;

if (utilisateurLog){
    // code si l'utilisateur n'est pas connecté
}
// Ce qui revient à écrire
if(utilisateurLog == false){
    // code si l'utilisateur n'est pas connecté
}

