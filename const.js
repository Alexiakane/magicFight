const titre1 = document.getElementById("titre1");

const joueurs = document.getElementById("j2");

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");

const VISHNU = {
  name: "VISHNU",
  hp: 100,
  pm: 100,
  origin: "New Delhi",
  special: 60,
  spepm: 110,
  base: 5,
  atk2: 25,
  atk2pm: 25,
  atk3: 40,
  atk3pm: 35,
  soin: 0,
  soinpm: 0,
  urlImg: "images/indeSf.png",
  img: "images/inde.jpg",
  spe: "Udann Chakra !"
};
const ALEX = {
  name: "ALEX",
  hp: 115,
  pm: 85,
  origin: "Dunkerque",
  special: 60,
  spepm: 95,
  base: 5,
  atk2: 25,
  atk2pm: 25,
  atk3: 40,
  atk3pm: 35,
  soin: 0,
  soinpm: 0,
  urlImg: "images/jeunePx.png",
  img: "images/jeune.jpg",
  spe: "Moules Frites !"
};
const TAKUMI = {
  name: "TAKUMI",
  hp: 150,
  pm: 50,
  origin: "Osaka",
  special: 60,
  spepm: 60,
  base: 5,
  atk2: 25,
  atk2pm: 25,
  atk3: 40,
  atk3pm: 35,
  soin: 0,
  soinpm: 0,
  urlImg: "images/samouraiPied.png",
  img: "images/samourai.jpg",
  spe: "Bankaï !"
};
const VENUS = {
  name: "VENUS",
  hp: 80,
  pm: 120,
  origin: "Melbourne",
  special: 100,
  spepm: 130,
  base: 5,
  atk2: 25,
  atk2pm: 25,
  atk3: 0,
  atk3pm: 0,
  soin: 40,
  soinpm: 60,
  urlImg: "images/natureSf.png",
  img: "images/nature.jpg",
  spe: "Breaking Balls !"
};

const SHADOW = {
  name: "SHADOW",
  hp: 95,
  pm: 105,
  origin: "Kobe",
  special: 80,
  spepm: 135,
  base: 5,
  atk2: 25,
  atk2pm: 25,
  atk3: 0,
  atk3pm: 0,
  soin: 35,
  soinpm: 50,
  urlImg: "images/shinobiSfPx.png",
  img: "images/shinobiPxSf.jpg",
  spe: "Kage Bunshin No Jutsu !"
};
const RYUK = {
  name: "RYUK",
  hp: 200,
  pm: 0,
  origin: "Possenhofen",
  special: 60,
  spepm: 10,
  base: 10,
  atk2: 0,
  atk2pm: 0,
  atk3: 0,
  atk3pm: 0,
  soin: 0,
  soinpm: 0,
  urlImg: "images/geantSf.png",
  img: "images/geant.jpg",
  spe: "Ich bin Kartoffel !"
};