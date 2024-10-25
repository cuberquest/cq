class Player {
  constructor(game, image) {
    this.game = game;
    this.image = image;
    this.width = this.height = 200;
    this.speed = {
      base: 10,
      mod: 1
    }
  }
}