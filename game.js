let canvas = document.body.insertBefore(document.createElement("canvas"), document.getElementById("gs")),
header = document.getElementById("header");
canvas.id = "game";
const game = new Game(canvas);


addEventListener("keydown", key);

if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
  document.body.classList.remove("light");
  document.body.classList.add("dark");
} else if (window.matchMedia & window.matchMedia("(prefers-color-scheme: light)")) {
  document.body.classList.remove("dark");
}
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  const newColorScheme = e.matches ? "dark" : "light";
  document.body.classList.add(newColorScheme);
});

function key(e) {
  switch (e.code) {
    case "":
      break;
    case "":
      break;
    case "":
      break;
    case "":
      break;
  }
}

(function resize() {
  game.canvas.width = innerWidth;
  game.canvas.height = innerHeight;
  game.update();
  addEventListener("resize", resize);
})();

header.addEventListener("mouseenter", () => header.classList.add("stay"));
header.addEventListener("mouseleave", () => header.classList.remove("stay"));