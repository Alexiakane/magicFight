titre1.addEventListener("click", () => {
    console.log("bip bip");
    titre1.style.display = "none";
    menu.style.display = "flex";
  });
  
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
