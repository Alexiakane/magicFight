class Fighter {
  constructor(name, hp, pm, origin, special, spepm, base, atk2, atk2pm, atk3, atk3pm, soin, soinpm, urlImg) {
    this.name = name;
    this.hp = hp;
    this.pm = pm;
    this.origin = origin;
    this.special = special;
    this.spepm = spepm;
    this.base = base;
    this.atk2 = atk2;
    this.atk2pm = atk2pm;
    this.atk3 = atk3;
    this.atk3pm = atk3pm;
    this.soin = soin;
    this.soinpm = soinpm;
    this.urlImg = urlImg;
  }

  changeTour() {
    tourJ1 = !tourJ1;
        if (tourJ1) {
          which.innerHTML = "A votre tour joueur 1 !";
        } else {
          which.innerHTML = "A votre tour joueur 2 !";
        }
  }
  atkBase(cible) {
    console.log(this.name + " a lancé une attaque basique.");
    cible.hp -= this.base;
    this.pm += 5;
    if (tourJ1 === true) {
      meterLifeJ2.value = cible.hp;
      meterManaJ1.value = this.pm;
    } else {
      meterLifeJ1.value = cible.hp;
      meterManaJ2.value = this.pm;
    }
    if (cible.hp <= 0) {
      alert(this.name + " a gagné !")
      nextScreen3()
    } else {
      this.changeTour();
    }

    console.log("il reste " + cible.hp + " pv à " + cible.name);
    console.log("il reste " + this.pm + " pm à " + this.name);
  }


  spell2(cible) {
    if (this.pm >= this.atk2pm) {
      console.log(this.name + " a lancé le sort 2 !");
      cible.hp -= this.atk2;
      this.pm -= this.atk2pm;
      if (tourJ1 === true) {
        meterLifeJ2.value = cible.hp;
        meterManaJ1.value = this.pm;
      } else {
        meterLifeJ1.value = cible.hp;
        meterManaJ2.value = this.pm;
      }
      console.log("il reste " + cible.hp + " pv à " + cible.name);
      console.log("il reste " + this.pm + " pm à " + this.name);
      if (cible.hp <= 0) {
        alert(this.name + " a gagné !")
        nextScreen3()
      } else {
        this.changeTour();
      }
    } else {
      console.log("vous n'avez pas assez de pm !");
    }
  }

  spell3(cible) {
    if (this.pm >= this.atk3pm) {
      console.log(this.name + " a lancé le sort 3 !");
      cible.hp -= this.atk3;
      this.pm -= this.atk3pm;
      if (tourJ1 === true) {
        meterLifeJ2.value = cible.hp;
        meterManaJ1.value = this.pm;
      } else {
        meterLifeJ1.value = cible.hp;
        meterManaJ2.value = this.pm;
      }
      console.log("il reste " + cible.hp + " pv à " + cible.name);
      console.log("il reste " + this.pm + " pm à " + this.name);
      if (cible.hp <= 0) {
        alert(this.name + " a gagné !")
        nextScreen3()
      } else {
        this.changeTour();
      }
    } else {
      console.log("vous n'avez pas assez de pm !");
    }
  }

  atkSpe(cible) {
    if (this.pm >= this.spepm) {
      console.log(this.name + " a lancé une attaque spécial !");
      cible.hp -= this.special;
      this.pm -= this.spepm;
      if (tourJ1 === true) {
        meterLifeJ2.value = cible.hp;
        meterManaJ1.value = this.pm;
      } else {
        meterLifeJ1.value = cible.hp;
        meterManaJ2.value = this.pm;
      }
      console.log(cible.hp);
      console.log("il reste " + cible.hp + " pv à " + cible.name);
      console.log("il reste " + this.pm + " pm à " + this.name);
      if (cible.hp <= 0) {
        alert(this.name + " a gagné !")
        nextScreen3()
      } else {
        this.changeTour();
      }
    } else {
      console.log("vous n'avez pas assez de pm !");
    }
  }

  sante() {
    if (this.pm >= this.soinpm) {
      console.log(this.name + " a lancé un soin !");
      this.hp += this.soin;
      this.pm -= this.soinpm;
      if (tourJ1 === true) {
        meterLifeJ1.value = this.hp;
        meterManaJ1.value = this.pm;
      } else {
        meterLifeJ2.value = this.hp;
        meterManaJ2.value = this.pm;
      }
      this.changeTour();
      console.log(this.name + " a désormais " + this.hp + " pv");
      console.log("il reste " + this.pm + " pm à " + this.name);
    } else {
      console.log("vous n'avez pas assez de pm !");
    }
  }
 
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
 urlImg: "images/indeSANSFOND.png"
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
  urlImg: "images/jeuneSANSFOND.png"
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
  urlImg: "images/samouraiSANSFOND.png"
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
  urlImg: "images/natureSANSFOND.png"
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
  urlImg: "images/shinobiSANSFOND.png"
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
  urlImg: "images/geantSANSFOND.png"
};

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
  VISHNU.urlImg
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
  ALEX.urlImg
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
  TAKUMI.urlImg
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
  VENUS.urlImg
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
  SHADOW.urlImg
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
  RYUK.urlImg
);





