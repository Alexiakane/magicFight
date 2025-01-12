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

choix.src = "images/point.png";
choix.style.width = "55vh";
choix.style.height = "45vh";

choix2.src = "images/point.png";
choix2.style.width = "55vh";
choix2.style.height = "45vh";

photo1.appendChild(choix);
photo2.appendChild(choix2);

function showStats(perso) {
  return "Points de vie : " + perso.hp +  "\n Points de mana : " + perso.pm + "\n Attaque spéciale : \n" + perso.spe + "\n Origine : " + perso.origin;
}

function overCharac(playerChoice) {
  if (readyPlayer1 === true) {
    choix2.src = playerChoice.img;
    nomJ2.textContent = playerChoice.name;
    statsJ2.innerText = showStats(playerChoice);
  } else {
    choix.src =  playerChoice.img;
    nomJ1.textContent = playerChoice.name;
    statsJ1.innerText = showStats(playerChoice);
  }
}

character1.addEventListener("mouseover", function (event) {
  overCharac(vishnu);
});
character2.addEventListener("mouseover", function (event) {
  overCharac(alex);
});
character3.addEventListener("mouseover", function (event) {
  overCharac(takumi);
});
character4.addEventListener("mouseover", function (event) {
  overCharac(venus);
});
character5.addEventListener("mouseover", function (event) {
  overCharac(shadow);
});
character6.addEventListener("mouseover", function (event) {
  overCharac(ryuk);
});

function chargementJ1() {
  meterLifeJ1.value += player1choice.hp;
  meterManaJ1.value += player1choice.pm;
  let photoJ1 = document.createElement("img");
  photoJ1.src = player1choice.urlImg;
  photoJ1.style.width = "100%";
  photoJ1.style.height = "75%";
  imgJ1.appendChild(photoJ1);
  let player1 = document.querySelector(".p1txt");
  player1.textContent = player1choice.name;
}
function chargementJ2() {
  meterLifeJ2.value += player2choice.hp;
  meterManaJ2.value += player2choice.pm;
  let photoJ2 = document.createElement("img");
  photoJ2.src = player2choice.urlImg;
  photoJ2.style.width = "100%";
  photoJ2.style.height = "75%";
  imgJ2.appendChild(photoJ2);
  let player2 = document.querySelector(".p2txt");
  player2.textContent = player2choice.name;
}

function chargement() {
  document.body.style.backgroundImage = "url(images/chargement.jpg)";
  let selection = document.querySelector(".selectPerso");
  let aleatory = document.getElementById("buttonR")
  selection.style = "display : none";
  aleatory.style = "display : none";
  chargementJ1();
  chargementJ2();
  photoReverse();
  nextScreen2();
  music.src = "music/ChopSuey8Bit.mp3";
  music.play();
}

function choixPerso(character, playerChoice) {
  if (readyPlayer1 === false) {
    readyPlayer1 = true;
    character.style.border = "solid";
    character.style.borderColor = "blue";
    player1choice = playerChoice;
  } else {
    if (character.style.borderColor != "blue") {
      player2choice = playerChoice;
      chargement();
    }
  }
}

character1.addEventListener("click", function (event) {
  choixPerso(character1, vishnu);
});
character2.addEventListener("click", function (event) {
  choixPerso(character2, alex);
});
character3.addEventListener("click", function (event) {
  choixPerso(character3, takumi);
});
character4.addEventListener("click", function (event) {
  choixPerso(character4, venus);
});
character5.addEventListener("click", function (event) {
  choixPerso(character5, shadow);
});
character6.addEventListener("click", function (event) {
  choixPerso(character6, ryuk);
});

function alea(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;}

button.addEventListener(
  "click", function (event) {
    let r = alea(1, 6);
    console.log(characters[r]);

   overCharac(playersChoice[r]);
   choixPerso(characters[r],playersChoice[r]);

  }
)

function photoReverse() {
  if (alex == player2choice){
    imgJ2.style.transform = "scale(-1,1)";
  }
  if (takumi == player1choice){
    imgJ1.style.transform = "scale(-1,1)";
  }
}