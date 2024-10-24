class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.player = new Player(this);
    this.players = [];
  }

  run() {
    this.frame = requestAnimationFrame(this.update);
  }
  update() {
    this.clear();
  }
  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  end() {
    cancelAnimationFrame(this.frame);
  }
}

class Player {
  constructor(game) {
    this.game = game;
    this.width = this.height = 200;
    this.speed = {
      base: 10,
      mod: 1
    }
  }
}

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

if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
  document.body.classList.add("dark");
}
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    const newColorScheme = event.matches ? "dark" : "light";
    document.body.classList.add(newColorScheme);
});

let canvas = document.body.insertBefore(document.createElement("canvas"), document.getElementById("gs"));
canvas.id = "game";
const game = new Game(canvas);

(function resize() {
  game.canvas.width = innerWidth;
  game.canvas.height = innerHeight;
  game.update();
  addEventListener("resize", resize);
})();