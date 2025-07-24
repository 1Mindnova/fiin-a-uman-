
fetch('verses.json')
  .then((response) => response.json())
  .then((verses) => {
    const audio = document.getElementById('audio');
    const display = document.getElementById('verseDisplay');
    const playBtn = document.getElementById('playBtn');

    playBtn.addEventListener('click', () => {
      playBtn.style.display = 'none';
      audio.volume = 1.8;
      audio.play();
    });

    let current = -1;

    function updateVerse(time) {
      for (let i = 0; i < verses.length; i++) {
        if (time >= verses[i].start && time < verses[i].end) {
          if (current !== i) {
            current = i;
            display.innerText = verses[i].text;
            display.classList.remove('fade');
            void display.offsetWidth;
            display.classList.add('fade');
          }
          return;
        }
      }
      display.innerText = '';
    }

    audio.addEventListener('timeupdate', () => {
      updateVerse(audio.currentTime);
    });
  });
