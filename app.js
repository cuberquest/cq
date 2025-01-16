let header = document.getElementById("header"),
up = document.getElementById("up");

function themeUpdate() {
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
  } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
    document.body.classList.remove("dark");
  }
}
themeUpdate();
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => {
  themeUpdate(e);
  const newColorScheme = e.matches ? "dark" : "light";
  document.body.classList.add(newColorScheme);
});

header.addEventListener("mouseenter", () => header.classList.add("stay"));
header.addEventListener("mouseleave", () => header.classList.remove("stay"));
up.addEventListener("click", () => scroll(0, 0));