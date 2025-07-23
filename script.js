
let verses = [];
let currentIndex = 0;
const audio = document.getElementById("audio");
const verseText = document.getElementById("verseText");
const audioContainer = document.getElementById("audioContainer");

fetch("verses_der_mensch_FINALFULL.json")
  .then(response => response.json())
  .then(data => {
    verses = data;
  });

audio.addEventListener("play", () => {
  audioContainer.classList.add("hidden");
});

audio.addEventListener("timeupdate", () => {
  if (!verses.length) return;

  const currentTime = audio.currentTime;

  if (
    currentIndex < verses.length &&
    currentTime >= verses[currentIndex].start
  ) {
    showVerse(verses[currentIndex].text);
    currentIndex++;
  }
});

function showVerse(text) {
  verseText.classList.remove("show", "hide");

  setTimeout(() => {
    verseText.classList.add("hide");
  }, 10);

  setTimeout(() => {
    verseText.innerText = text;
    verseText.classList.remove("hide");
    verseText.classList.add("show");
  }, 1000);
}
