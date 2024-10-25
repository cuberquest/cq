class Sound {
  constructor(src) {
    this.sound = new Audio(src);
    this.sound.preload = "auto";
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
  }
  play() {
    this.sound.play();
  }
  stop() {
    this.sound.pause();
  }
}