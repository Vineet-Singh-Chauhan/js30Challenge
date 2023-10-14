const triggers = document.querySelectorAll("a");
const highlighter = document.createElement("span");
highlighter.classList.add("highlight");
document.body.append(highlighter);

function highlight() {
  const { height, left, right, top, width, x, y, bottom } =
    this.getBoundingClientRect();
  highlighter.style.width = `${width}px`;
  highlighter.style.height = `${height}px`;
  highlighter.style.transform = `translate(${left + window.scrollX}px,${
    top + window.scrollY
  }px)`;
}
triggers.forEach((e) => e.addEventListener("mouseenter", highlight));
