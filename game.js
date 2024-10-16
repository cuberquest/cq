import Game from "./classes/game.js";

let canvas = document.body.insertBefore(document.createElement("canvas"), document.getElementById("gs"));
const game = new Game(canvas);