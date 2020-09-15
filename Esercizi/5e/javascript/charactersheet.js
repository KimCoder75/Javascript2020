/*
  La mia rubrica
  Scrivi un programma per la gestione di una rubrica telefonica.
*/
//Array contenente i nomi da trasformare in oggetti
let playerNames = ["Kim", "Matteo Gabriele", "Erika Valentina", "Rebecca", "Stefano","Marco"],
    raceFantasyList = ["Goblin","Umano","Nano","Elfo","Mezzelfo","Halfling","Tiefling","Orco","Mezzorco"],
    nomiFantasyList = [
      "Quethask",
      "Hiyog",
      "Fasthas",
      "Aimi",
      "Chiangblis",
      "Cymo",
      "Chioya",
      "Es'am",
      "Alorzlith",
      "Basca",
      "Deura",
      "Alza",
      "Ryyl",
      "Wenpus",
      "Thslishsef",
      "Dali",
      "Rali",
      "Datharg",
      "Isssis",
      "Gristli"
    ],
    allineamento5EList = ["Caotico Malvagio","Legale Buono","Neutrale Buono","Caotico Buono","Legale Neutrale","Neutrale Puro","Caotico Neutrale","Legale Malvagio","Neutrale Malvagio","Caotico Malvagio"],
    characterSheet=[];

//constructor function generazione utenti
function Player(name,razzaFantasy,charactersName,allineamento,classeArmatura,d20,puntiFerita){
    this.playersName=name,
    this.charactersName=charactersName,
    this.allineamento=allineamento,
    this.razzaFantasy=razzaFantasy,
    this.classeArmatura=classeArmatura,
    this.d20=d20,
    this.puntiFerita=puntiFerita
  }
//inserimento di type nel prototype di Player
Player.prototype.type="Personaggi D&D 5e";

//Generazione rubrica da array nomi numero telefonico
// utilizzo di forEach per utilizzare anche l'indice
playerNames.forEach((currentValue, index) => {

  let alt = Math.floor(Math.random()*99)+100,
      raceF = raceFantasyList[Math.floor(Math.random()*raceFantasyList.length)],
      nameF = nomiFantasyList[Math.floor(Math.random()*nomiFantasyList.length)],
      all = allineamento5EList[Math.floor(Math.random()*allineamento5EList.length)],
      ca = Math.floor(Math.random()*7)+14,
      roll = Math.floor(Math.random()*20)+1,
      pf = Math.floor(Math.random()*6)+5,
      obj = new Player(currentValue,raceF,nameF,all,ca,roll,pf);
      characterSheet.push(obj);
// console.log(characterSheet[index].schedaGiocatore);
});
console.table(characterSheet);
