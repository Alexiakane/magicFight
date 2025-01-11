/* nom perso :
    Vishnu (hindi)
    Takumi (samourai)
    Shadow (ninja)
    Alex (jeune)
    Ryuk (géant)
    Venus (rousse) */

class Fighter {
  constructor(name, hp, pm, origin, special, spepm, base, atk2, atk2pm, atk3, atk3pm, soin, soinpm, urlImg,img) {
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
    this.img = img;
  }

  changeTour() {
    tourJ1 = !tourJ1;
        if (tourJ1) {
          which.textContent = "A votre tour joueur 1 !";
        } else {
          which.textContent = "A votre tour joueur 2 !";
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
