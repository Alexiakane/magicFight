let player1choice;
let player2choice;
let tourJ1 = true;

let meterLifeJ1 = document.getElementById("lifeBarJ1");
let meterManaJ1 = document.getElementById("manaBarJ1");
let meterLifeJ2 = document.getElementById("lifeBarJ2");
let meterManaJ2 = document.getElementById("manaBarJ2");

let character1 = document.querySelector(".perso1");
let character2 = document.querySelector(".perso2");
let character3 = document.querySelector(".perso3");
let character4 = document.querySelector(".perso4");
let character5 = document.querySelector(".perso5");
let character6 = document.querySelector(".perso6");

let characters = {
    1: character1,
    2: character2,
    3: character3,
    4: character4,
    5: character5,
    6: character6
  }

let choix = document.createElement("img");
let choix2 = document.createElement("img");

let photo1 = document.querySelector(".photoPersoJ1");
let photo2 = document.querySelector(".photoPersoJ2");
let nomJ1 = document.querySelector(".nom");
let nomJ2 = document.querySelector(".nom2");
let statsJ1 = document.getElementById("statsJ1");
let statsJ2 = document.getElementById("statsJ2");

let readyPlayer1 = false;

let button = document.querySelector(".button");

let which = document.getElementById("whichP");

let replay = document.getElementById("replay");

let vishnu = new Fighter(
    VISHNU.name,
    VISHNU.hp,
    VISHNU.pm,
    VISHNU.origin,
    VISHNU.special,
    VISHNU.spepm,
    VISHNU.base,
    VISHNU.atk2,
    VISHNU.atk2pm,
    VISHNU.atk3,
    VISHNU.atk3pm,
    VISHNU.soin,
    VISHNU.soinpm,
    VISHNU.urlImg,
    VISHNU.img
);
let alex = new Fighter(
    ALEX.name,
    ALEX.hp,
    ALEX.pm,
    ALEX.origin,
    ALEX.special,
    ALEX.spepm,
    ALEX.base,
    ALEX.atk2,
    ALEX.atk2pm,
    ALEX.atk3,
    ALEX.atk3pm,
    ALEX.soin,
    ALEX.soinpm,
    ALEX.urlImg,
    ALEX.img
);

let takumi = new Fighter(
    TAKUMI.name,
    TAKUMI.hp,
    TAKUMI.pm,
    TAKUMI.origin,
    TAKUMI.special,
    TAKUMI.spepm,
    TAKUMI.base,
    TAKUMI.atk2,
    TAKUMI.atk2pm,
    TAKUMI.atk3,
    TAKUMI.atk3pm,
    TAKUMI.soin,
    TAKUMI.soinpm,
    TAKUMI.urlImg,
    TAKUMI.img
);
let venus = new Fighter(
    VENUS.name,
    VENUS.hp,
    VENUS.pm,
    VENUS.origin,
    VENUS.special,
    VENUS.spepm,
    VENUS.base,
    VENUS.atk2,
    VENUS.atk2pm,
    VENUS.atk3,
    VENUS.atk3pm,
    VENUS.soin,
    VENUS.soinpm,
    VENUS.urlImg,
    VENUS.img
);

let shadow = new Fighter(
    SHADOW.name,
    SHADOW.hp,
    SHADOW.pm,
    SHADOW.origin,
    SHADOW.special,
    SHADOW.spepm,
    SHADOW.base,
    SHADOW.atk2,
    SHADOW.atk2pm,
    SHADOW.atk3,
    SHADOW.atk3pm,
    SHADOW.soin,
    SHADOW.soinpm,
    SHADOW.urlImg,
    SHADOW.img
);

let ryuk = new Fighter(
    RYUK.name,
    RYUK.hp,
    RYUK.pm,
    RYUK.origin,
    RYUK.special,
    RYUK.spepm,
    RYUK.base,
    RYUK.atk2,
    RYUK.atk2pm,
    RYUK.atk3,
    RYUK.atk3pm,
    RYUK.soin,
    RYUK.soinpm,
    RYUK.urlImg,
    RYUK.img
);

let btnBase = document.getElementById("base");
let btnSpell2 = document.getElementById("spell2");
let btnSpell3 = document.getElementById("spell3");
let btnSpe = document.getElementById("atkspe");
let btnHeal = document.getElementById("soin");