let btnBase = document.getElementById("base");
let btnSpell2 = document.getElementById("spell2");
let btnSpell3 = document.getElementById("spell3");
let btnSpe = document.getElementById("atkspe");
let btnHeal = document.getElementById("soin");

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
