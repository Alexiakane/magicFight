which.textContent = "A votre tour joueur 1 !";

btnBase.addEventListener("click", () => {
    if (tourJ1) {
        player1choice.atkBase(player2choice);
    } else {
        player2choice.atkBase(player1choice);
    }
});
btnSpell2.addEventListener("click", () => {
    if (tourJ1) {
        player1choice.spell2(player2choice);
    } else {
        player2choice.spell2(player1choice);
    }
});
btnSpell3.addEventListener("click", () => {
    if (tourJ1) {
        player1choice.spell3(player2choice);
    } else {
        player2choice.spell3(player1choice);
    }
});
btnSpe.addEventListener("click", () => {
    if (tourJ1) {
        player1choice.atkSpe(player2choice);
    } else {
        player2choice.atkSpe(player1choice);
    }
});

btnHeal.addEventListener("click", () => {
    if (tourJ1) {
        player1choice.sante();
    } else {
        player2choice.sante();
    }
});

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
      chargement();
    }
  );
  