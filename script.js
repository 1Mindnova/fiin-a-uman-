const verses = [
  { time: 0, text: "Der Kapitel was ich zitiere heißt Al Insan, der Mensch und das ist der 76 Kapitel aus dem Kuran." },
  { time: 10, text: "Ich suche Schutz bei Gott, vor dem Teufel der verflucht ist." },
  { time: 14, text: "Und ich Spreche im Namen von Gott, dem Liebevoll und dem Barmherzigen." },
  { time: 17, text: "Caut protecție la Dumnezeu împotriva diavolului, care este blestemat." },
  { time: 21, text: "În Numele lui Dumnezeu, Cel Iubitor, Cel Milostiv." }
  // Ab diesem Vers KEINER mehr (Wunsch #3)
];

const audio = document.getElementById("audio");
const verseContainer = document.getElementById("verse-container");
const overlay = document.getElementById("overlay");
const playButton = document.getElementById("playButton");

let currentIndex = -1;

playButton.addEventListener("click", () => {
  overlay.style.display = "none";
  audio.volume = 1.0;
  audio.play();
});

audio.addEventListener("timeupdate", () => {
  const currentTime = audio.currentTime;
  for (let i = verses.length - 1; i >= 0; i--) {
    if (currentTime >= verses[i].time) {
      if (currentIndex !== i) {
        verseContainer.innerHTML = "";
        verseContainer.style.animation = "none";
        void verseContainer.offsetWidth;
        verseContainer.innerHTML = verses[i].text;
        verseContainer.style.animation = "fadein 1s";
        currentIndex = i;
      }
      break;
    }
  }
});