const chaine = "1 037,25 € Hors champ d'application de la TVA";

const chaine_tronque = chaine.split("€");

const nombre = parseFloat(chaine_tronque[0].replace(' ', '').replace(',', '.'));

console.log(nombre);
