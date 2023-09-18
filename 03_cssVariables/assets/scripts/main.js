const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
  console.log(this.dataset);
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputs.forEach((e) => {
  e.addEventListener("change", handleUpdate);
  e.addEventListener("mousemove", handleUpdate);
});
