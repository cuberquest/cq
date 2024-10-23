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
  update() {}
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

let canvas = document.body.insertBefore(document.createElement("canvas"), document.getElementById("gs"));
canvas.id = "game";
const game = new Game(canvas);

(function resize() {
  game.canvas.width = innerWidth;
  game.canvas.height = innerHeight;
  game.run();
  addEventListener("resize", resize);
})();