const audio = document.getElementById("audio");
const verseDisplay = document.getElementById("verse-display");

let verses = [];
let lastText = "";

fetch("verses_der_mensch_FINALFULL.json")
  .then((response) => response.json())
  .then((data) => {
    verses = data;

    audio.addEventListener("timeupdate", () => {
      const time = audio.currentTime;

      const verse = verses.find((v) => time >= v.start && time <= v.end);

      if (verse && verse.text !== lastText) {
        verseDisplay.classList.remove("show");
        setTimeout(() => {
          verseDisplay.textContent = verse.text;
          verseDisplay.classList.add("show");
        }, 100);
        lastText = verse.text;
      }
    });
  });
