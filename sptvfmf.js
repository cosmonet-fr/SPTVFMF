const chaine = "1 037,25 € Hors champ d'application de la TVA";

const chaine_tronque = chaine.split("€");

const chaine_tronque_espace = chaine_tronque[0].replace(' ', '');

const nombre = parseFloat(chaine_tronque_espace.replace(',', '.'));

console.log(nombre);
