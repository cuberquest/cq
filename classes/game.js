class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.player = new Player(this);
    this.players = [];
    this.sounds = [];
  }

  run() {
    // start()
    this.frame = requestAnimationFrame(this.update);
  }
  update() {
    // updateGameArea()
    this.clear();
  }
  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  end() {
    cancelAnimationFrame(this.frame);
  }
}