const titre1 = document.querySelector("#titre1");

const joueurs = document.querySelector("#j2");

const page1 = document.querySelector(".page1");
const page2 = document.querySelector(".page2");
const page3 = document.querySelector(".page3");
const page4 = document.querySelector(".page4");

const emile = {
  1: "VISHNU",
  2: "ALEX",
  3: "TAKUMI",
  4: "VENUS",
  5: "SHADOW",
  6: "RYUK"
}
const images = {
  1: "inde.jpg",
  2: "jeune.jpg",
  3: "samourai.jpg",
  4: "nature.jpg",
  5: "shinobi.jpg",
  6: "geant.jpg"
}


const VISHNU = {
  name: "VISHNU",
  hp: 100,
  pm: 100,
  origin: "New Delhi",
  special: 50,
  spepm: 110,
  base: 5,
  atk2: 15,
  atk2pm: 20,
  atk3: 25,
  atk3pm: 40,
  soin: 0,
  soinpm: 0,
  urlImg: "images/indeSANSFOND.png",
  img: "images/inde.jpg"
};
const ALEX = {
  name: "ALEX",
  hp: 125,
  pm: 75,
  origin: "Dunkerque",
  special: 60,
  spepm: 85,
  base: 5,
  atk2: 15,
  atk2pm: 25,
  atk3: 25,
  atk3pm: 35,
  soin: 0,
  soinpm: 0,
  urlImg: "images/jeuneSANSFOND.png",
  img: "images/jeune.jpg"
};
const TAKUMI = {
  name: "TAKUMI",
  hp: 150,
  pm: 50,
  origin: "Osaka",
  special: 65,
  spepm: 65,
  base: 5,
  atk2: 25,
  atk2pm: 30,
  atk3: 35,
  atk3pm: 40,
  soin: 0,
  soinpm: 0,
  urlImg: "images/samouraiSANSFOND.png",
  img: "images/samourai.jpg"
};
const VENUS = {
  name: "VENUS",
  hp: 50,
  pm: 150,
  origin: "Melbourne",
  special: 100,
  spepm: 170,
  base: 5,
  atk2: 45,
  atk2pm: 55,
  atk3: 0,
  atk3pm: 0,
  soin: 40,
  soinpm: 60,
  urlImg: "images/natureSANSFOND.png",
  img: "images/nature.jpg"
};

const SHADOW = {
  name: "SHADOW",
  hp: 75,
  pm: 125,
  origin: "Kobe",
  special: 80,
  spepm: 135,
  base: 5,
  atk2: 35,
  atk2pm: 45,
  atk3: 0,
  atk3pm: 0,
  soin: 35,
  soinpm: 40,
  urlImg: "images/shinobiSANSFOND.png",
  img: "images/shinobi.jpg"
};
const RYUK = {
  name: "RYUK",
  hp: 200,
  pm: 0,
  origin: "Possenhofen",
  special: 60,
  spepm: 10,
  base: 15,
  atk2: 0,
  atk2pm: 0,
  atk3: 0,
  atk3pm: 0,
  soin: 0,
  soinpm: 0,
  urlImg: "images/geantSANSFOND.png",
  img: "images/geant.jpg"
};