const elements = document.getElementsByTagName('a');

const playAudio = (i) => {
  const audio = new Audio(`audio/key-${i + 1}.mp3`);
  audio.play();
};
for (let i = 0; i < elements.length; i += 1) {
  elements[i].addEventListener('click', () => {
    playAudio(i);
  });
}
