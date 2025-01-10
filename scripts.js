const titre1 = document.querySelector("#titre1");
titre1.addEventListener("click", () => {
  console.log("bip bip");
  titre1.style.display = "none";
  menu.style.display = "flex";
});
const joueurs = document.querySelector("#j2");
const page1 = document.querySelector(".page1");
const page2 = document.querySelector(".page2");
const page3 = document.querySelector(".page3");
const page4 = document.querySelector(".page4");

let player1choice;
let player2choice;
let tourJ1 = true;

let meterLifeJ1 = document.getElementById("lifeBarJ1");
let meterManaJ1 = document.getElementById("manaBarJ1");
let meterLifeJ2 = document.getElementById("lifeBarJ2");
let meterManaJ2 = document.getElementById("manaBarJ2");

joueurs.addEventListener("click", () => {
  nextScreen();
});

function nextScreen() {
  page1.classList.add("fade-out");

  page1.addEventListener(
    "animationend",
    () => {
      page1.style.display = "none";
      page1.classList.remove("fade-out");

      page2.style.display = "flex";
      page2.classList.add("fade-in");

      setTimeout(() => {
        page2.classList.add("visible");
      }, 50);
    },
    { once: true },
  );
}

function nextScreen2() {
  page2.classList.add("fade-out");

  page2.addEventListener(
    "animationend",
    () => {
      page2.style.display = "none";
      page2.classList.remove("fade-out");

      page3.style.display = "flex";
      page3.classList.add("fade-in");

      setTimeout(() => {
        page3.classList.add("visible");
      }, 50);
    },
    { once: true },
  );
}
function nextScreen3() {
  page3.classList.add("fade-out");

  page3.addEventListener(
    "animationend",
    () => {
      page3.style.display = "none";
      page3.classList.remove("fade-out");

      page4.style.display = "flex";
      page4.classList.add("fade-in");

      setTimeout(() => {
        page4.classList.add("visible");
      }, 50);
    },
    { once: true },
  );
}

joueurs.addEventListener("click", () => {
  nextScreen();
});

function nextScreen() {
  page1.classList.add("fade-out");

  page1.addEventListener(
    "animationend",
    () => {
      page1.style.display = "none";
      page1.classList.remove("fade-out");

      page2.style.display = "flex";
      page2.classList.add("fade-in");

      setTimeout(() => {
        page2.classList.add("visible");
      }, 50);
    },
    { once: true },
  );
}

function nextScreen2() {
  page2.classList.add("fade-out");

  page2.addEventListener(
    "animationend",
    () => {
      page2.style.display = "none";
      page2.classList.remove("fade-out");

      page3.style.display = "flex";
      page3.classList.add("fade-in");

      setTimeout(() => {
        page3.classList.add("visible");
      }, 50);
    },
    { once: true },
  );
}
/* nom perso :
    Vishnu (hindi)
    Takumi (samourai)
    Shadow (ninja)
    Alex (jeune)
    Ryuk (géant)
    Venus (rousse) */

let character1 = document.querySelector(".perso1");
let character2 = document.querySelector(".perso2");
let character3 = document.querySelector(".perso3");
let character4 = document.querySelector(".perso4");
let character5 = document.querySelector(".perso5");
let character6 = document.querySelector(".perso6");

let choix = document.createElement("img");
choix.src = "images/point.png";
choix.style.width = "100%";
choix.style.height = "75%";
let choix2 = document.createElement("img");
choix2.src = "images/point.png";
choix2.style.width = "100%";
choix2.style.height = "75%";

let photo1 = document.querySelector(".photoPersoJ1");
let photo2 = document.querySelector(".photoPersoJ2");
let nomJ1 = document.querySelector(".nom");
let nomJ2 = document.querySelector(".nom2");
let statsJ1 = document.getElementById("statsJ1");
let statsJ2 = document.getElementById("statsJ2");

photo1.appendChild(choix);
photo2.appendChild(choix2);

let readyPlayer1 = false;

character1.addEventListener("click", function (event) {
  if (readyPlayer1 === false) {
    readyPlayer1 = true;
    character1.style.border = "solid";
    character1.style.borderColor = "blue";
    player1choice = vishnu;
  } else {
    if (character1.style.borderColor != "blue") {
      character1.style.border = "solid";
      character1.style.borderColor = "red";
      player2choice = vishnu;
      chargement();
    }
  }
});
character2.addEventListener("click", function (event) {
  if (readyPlayer1 === false) {
    readyPlayer1 = true;
    character2.style.border = "solid";
    character2.style.borderColor = "blue";
    player1choice = alex;
  } else {
    if (character2.style.borderColor != "blue") {
      character2.style.border = "solid";
      character2.style.borderColor = "red";
      player2choice = alex;
      chargement();
    }
  }
});
character3.addEventListener("click", function (event) {
  if (readyPlayer1 === false) {
    readyPlayer1 = true;
    character3.style.border = "solid";
    character3.style.borderColor = "blue";
    player1choice = takumi;
  } else {
    if (character3.style.borderColor != "blue") {
      character3.style.border = "solid";
      character3.style.borderColor = "red";
      player2choice = takumi;
      chargement();
    }
  }
});
character4.addEventListener("click", function (event) {
  if (readyPlayer1 === false) {
    readyPlayer1 = true;
    character4.style.border = "solid";
    character4.style.borderColor = "blue";
    player1choice = venus;
  } else {
    if (character4.style.borderColor != "blue") {
      character4.style.border = "solid";
      character4.style.borderColor = "red";
      player2choice = venus;
      chargement();
    }
  }
});
character5.addEventListener("click", function (event) {
  if (readyPlayer1 === false) {
    readyPlayer1 = true;
    character5.style.border = "solid";
    character5.style.borderColor = "blue";
    player1choice = shadow;
  } else {
    if (character5.style.borderColor != "blue") {
      character5.style.border = "solid";
      character5.style.borderColor = "red";
      player2choice = shadow;
      chargement();
    }
  }
});
character6.addEventListener("click", function (event) {
  if (readyPlayer1 === false) {
    readyPlayer1 = true;
    character6.style.border = "solid";
    character6.style.borderColor = "blue";
    player1choice = ryuk;
  } else {
    if (character6.style.borderColor != "blue") {
      character6.style.border = "solid";
      character6.style.borderColor = "red";
      player2choice = ryuk;
      chargement();
    }
  }
});
function showStats(perso) {
  let result = "Points de vie : " + perso.hp + "<br> Points de mana : " + perso.pm + "<br> Origine : " + perso.origin;
  return result;
}
character1.addEventListener("mouseover", function (event) {
  if (readyPlayer1 === true) {
    choix2.src = "images/inde.jpg";
    nomJ2.innerHTML = "VISHNU";
    statsJ2.innerHTML = showStats(VISHNU);
  } else {
    choix.src = "images/inde.jpg";
    nomJ1.innerHTML = "VISHNU";
    statsJ1.innerHTML = showStats(VISHNU);
  }
});
character2.addEventListener("mouseover", function (event) {
  if (readyPlayer1 === true) {
    choix2.src = "images/jeune.jpg";
    nomJ2.innerHTML = "ALEX";
    statsJ2.innerHTML = showStats(ALEX);
  } else {
    choix.src = "images/jeune.jpg";
    nomJ1.innerHTML = "ALEX";
    statsJ1.innerHTML = showStats(ALEX);
  }
});
character3.addEventListener("mouseover", function (event) {
  if (readyPlayer1 === true) {
    choix2.src = "images/samourai.jpg";
    nomJ2.innerHTML = "TAKUMI";
    statsJ2.innerHTML = showStats(TAKUMI);
  } else {
    choix.src = "images/samourai.jpg";
    nomJ1.innerHTML = "TAKUMI";
    statsJ1.innerHTML = showStats(TAKUMI);
  }
});
character4.addEventListener("mouseover", function (event) {
  if (readyPlayer1 === true) {
    choix2.src = "images/nature.jpg";
    nomJ2.innerHTML = "VENUS";
    statsJ2.innerHTML = showStats(VENUS);
  } else {
    choix.src = "images/nature.jpg";
    nomJ1.innerHTML = "VENUS";
    statsJ1.innerHTML = showStats(VENUS);
  }
});
character5.addEventListener("mouseover", function (event) {
  if (readyPlayer1 === true) {
    choix2.src = "images/shinobi.jpg";
    nomJ2.innerHTML = "SHADOW";
    statsJ2.innerHTML = showStats(SHADOW);
  } else {
    choix.src = "images/shinobi.jpg";
    nomJ1.innerHTML = "SHADOW";
    statsJ1.innerHTML = showStats(SHADOW);
  }
});
character6.addEventListener("mouseover", function (event) {
  if (readyPlayer1 === true) {
    choix2.src = "images/geant.jpg";
    nomJ2.innerHTML = "RYUK";
    statsJ2.innerHTML = showStats(RYUK);
  } else {
    choix.src = "images/geant.jpg";
    nomJ1.innerHTML = "RYUK";
    statsJ1.innerHTML = showStats(RYUK);
  }
});

function chargement() {
  document.body.style.backgroundImage = "url(images/chargement.jpg)";
  let selection = document.querySelector(".selectionperso");
  let aleatory = document.querySelector(".buttonR")
  selection.style = "display : none";
  aleatory.style = "display : none";
  meterLifeJ1.value += player1choice.hp;
  meterManaJ1.value += player1choice.pm;
  meterLifeJ2.value += player2choice.hp;
  meterManaJ2.value += player2choice.pm;
  let imgJ1 = document.getElementById("imgJ1");
  let photoJ1 = document.createElement("img");
  photoJ1.src = player1choice.urlImg;
  photoJ1.style.width = "100%";
  photoJ1.style.height = "75%";
  imgJ1.appendChild(photoJ1);
  let player1 = document.querySelector(".p1txt");
  player1.innerHTML = player1choice.name;
  let imgJ2 = document.getElementById("imgJ2");
  let photoJ2 = document.createElement("img");
  photoJ2.src = player2choice.urlImg;
  photoJ2.style.width = "100%";
  photoJ2.style.height = "75%";
  imgJ2.appendChild(photoJ2);
  let player2 = document.querySelector(".p2txt");
  player2.innerHTML = player2choice.name;
  nextScreen2();
}



function alea(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;

};
let emile = {
  1: "VISHNU",
  2: "ALEX",
  3: "TAKUMI",
  4: "VENUS",
  5: "SHADOW",
  6: "RYUK"
}
let images = {
  1: "inde.jpg",
  2: "jeune.jpg",
  3: "samourai.jpg",
  4: "nature.jpg",
  5: "shinobi.jpg",
  6: "geant.jpg"
}

let button = document.querySelector(".button");
let characters = {
  1: character1,
  2: character2,
  3: character3,
  4: character4,
  5: character5,
  6: character6
}

button.addEventListener(
  "click", function (event) {
    let r = alea(1, 6);
    console.log(characters[r]);

    if (readyPlayer1 === true) {
      choix2.src = `images/${images[r]}`;
      nomJ2.innerHTML = emile[r];
    } else {
      choix.src = `images/${images[r]}`;
      nomJ1.innerHTML = emile[r];
    }

    if (readyPlayer1 === false) {
      readyPlayer1 = true;
      characters[r].style.border = "solid";
      characters[r].style.borderColor = "blue";
    } else {
      if (characters[r].style.borderColor != "blue") {
        characters[r].style.border = "solid";
        characters[r].style.borderColor = "red";
        chargement();
      }
    }


  }
)
let which = document.getElementById("whichP");
which.innerHTML = "A votre tour joueur 1 !";

let replay = document.getElementById("replay");

replay.addEventListener("click", function (event) {
  page4.classList.add("fade-out");  
  page4.addEventListener(
      "animationend",
      () => {
        page4.style.display = "none";
        page4.classList.remove("fade-out");
  
        page2.style.display = "flex";
        page2.classList.add("fade-in");
  
        setTimeout(() => {
          page2.classList.add("visible");
        }, 50);
      },
      { once: true },
    );
  }
);
