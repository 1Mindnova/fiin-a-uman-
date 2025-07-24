
fetch('verses.json')
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

    let activeIndex = -1;

    audio.addEventListener('timeupdate', () => {
      const time = audio.currentTime;
      let currentIndex = -1;

      for (let i = 0; i < verses.length; i++) {
        if (time >= verses[i].start && time < verses[i].end) {
          currentIndex = i;
          break;
        }
      }

      if (currentIndex !== activeIndex) {
        if (currentIndex !== -1) {
          display.textContent = verses[currentIndex].text;
          display.classList.remove('hide');
          display.classList.add('show');
        } else {
          display.classList.remove('show');
          display.classList.add('hide');
        }
        activeIndex = currentIndex;
      }
    });
  });
