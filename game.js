import Game from "./classes/game";

let canvas = document.body.insertBefore(document.createElement("canvas"), document.getElementById("gs"));
let game = new Game(canvas);