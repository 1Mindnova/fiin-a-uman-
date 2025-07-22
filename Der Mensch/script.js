const audio = document.getElementById('audio');
const versesContainer = document.getElementById('verses');

fetch('verses.json')
    .then(response => response.json())
    .then(verses => {
        verses.forEach((verse, index) => {
            const div = document.createElement('div');
            div.classList.add('verse');
            div.textContent = verse.text;
            div.dataset.start = verse.start;
            div.dataset.end = verse.end;
            div.addEventListener('click', () => {
                audio.currentTime = verse.start;
                audio.play();
            });
            versesContainer.appendChild(div);
        });

        audio.addEventListener('timeupdate', () => {
            const currentTime = audio.currentTime;
            document.querySelectorAll('.verse').forEach(div => {
                const start = parseFloat(div.dataset.start);
                const end = parseFloat(div.dataset.end);
                if (currentTime >= start && currentTime <= end) {
                    div.classList.add('active');
                } else {
                    div.classList.remove('active');
                }
            });
        });
    });