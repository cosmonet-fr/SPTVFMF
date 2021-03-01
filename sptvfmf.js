const stringToNumber = (string, splittedCharacter) => {
  
  const truncatedString = string.split(splittedCharacter);
  const number = parseFloat(truncatedString[0].replace(' ', '').replace(',', '.'));
  
  console.log(number);
  return number;
  
}
stringToNumber("1 037,25 € Hors champ d'application de la TVA", "€");
