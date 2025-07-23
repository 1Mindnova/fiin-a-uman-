
const verses = [
  [0, 10, "Der Kapitel was ich zitiere heißt Al Insan, der Mensch und das ist der 76 Kapitel aus dem Kuran."],
  [10, 14, "Ich suche Schutz bei Gott, vor dem Teufel der verflucht ist."],
  [14, 17, "Und ich Spreche im Namen von Gott, dem Liebevoll und dem Barmherzigen."],
  [17, 21, "Caut protecție la Dumnezeu împotriva diavolului, care este blestemat."],
  [21, 24, "În Numele lui Dumnezeu, Cel Iubitor, Cel Milostiv."]
  // Die folgenden Verse wurden auf Wunsch entfernt
];

const audio = document.getElementById("audio");
const verseDisplay = document.getElementById("verseDisplay");
const overlay = document.getElementById("overlay");
const playButton = document.getElementById("playButton");

playButton.addEventListener("click", () => {
  overlay.style.display = "none";
  audio.volume = 1.0;
  audio.play();
});

let currentVerseIndex = 0;

audio.ontimeupdate = () => {
  if (currentVerseIndex >= verses.length) return;

  const [start, end, text] = verses[currentVerseIndex];
  if (audio.currentTime >= start && audio.currentTime <= end) {
    verseDisplay.innerText = text;
    verseDisplay.style.animation = "none";
    void verseDisplay.offsetWidth;
    verseDisplay.style.animation = "";
    verseDisplay.style.animation = "fadeSlide 3s ease-in-out forwards";
  } else if (audio.currentTime > end) {
    verseDisplay.innerText = "";
    currentVerseIndex++;
  }
};
