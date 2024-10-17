let canvas = document.body.insertBefore(document.createElement("canvas"), document.getElementById("gs"));
const game = new Game(canvas);

class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.player = new Player(this);
  }
}

class Player {
  constructor(game) {
    this.game = game;
    this.width = this.height = 200;
  }
}