const stringToNumber = (string, splittedCharacter) => {
  
  const truncatedString = string.split(splittedCharacter);
  return parseFloat(truncatedString[0].replace(' ', '').replace(',', '.'));
  
}
const number = stringToNumber("1 037,25 € Hors champ d'application de la TVA", "€");
console.log(number);
