const pressed = [];
const secretCode = "wesbos";

window.addEventListener("keyup", (e) => {
  pressed.push(e.key);
  //splicing pressed array from behind
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join("").includes(secretCode)) {
    cornify_add();
  }
});
