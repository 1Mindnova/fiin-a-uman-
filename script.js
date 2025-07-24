
fetch('./verses.json')
  .then(response => response.json())
  .then(verses => {
    const audio = document.getElementById('audio');
    const display = document.getElementById('verseDisplay');
    const playBtn = document.getElementById('playBtn');

    playBtn.addEventListener('click', () => {
      playBtn.style.display = 'none';
      audio.volume = 1.0;
      audio.play();
    });

    let currentVerseIndex = -1;
    let wasDisplayed = false;

    function updateVerse(time) {
      let found = false;

      for (let i = 0; i < verses.length; i++) {
        if (time >= verses[i].start && time < verses[i].end) {
          found = true;

          if (currentVerseIndex !== i) {
            currentVerseIndex = i;
            wasDisplayed = true;
            display.textContent = verses[i].text;
            display.className = 'show';
          }
          break;
        }
      }

      if (!found && wasDisplayed) {
        display.className = 'hide';
        wasDisplayed = false;
        currentVerseIndex = -1;
      }
    }

    audio.addEventListener('timeupdate', () => {
      updateVerse(audio.currentTime);
    });
  });
