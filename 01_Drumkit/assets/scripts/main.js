import keys from "../data/keys.json" assert { type: "json" };
import audio from "../data/audio.json" assert { type: "json" };

// populating keys
const keysWrapper = document.getElementsByClassName("keys")[0];
keys.forEach((element) => {
  const keyDiv = document.createElement("div");
  keyDiv.classList.add("key");
  keyDiv.setAttribute("data-key", element.keyCode);
  const kbd = document.createElement("kbd");
  kbd.innerText = element.letter;
  const span = document.createElement("span");
  span.className = "sound";
  span.innerText = element.sound;
  keyDiv.appendChild(kbd);
  keyDiv.appendChild(span);
  keysWrapper.appendChild(keyDiv);
});

// populating audios
audio.forEach((e) => {
  const audio = document.createElement("audio");
  audio.src = e.src;
  audio.setAttribute("data-key", e.keyCode);
  document.body.appendChild(audio);
});

function playsound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  console.log("q");
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  console.log(e);
  console.log("a");
  this.classList.remove("playing");
}

const keyElements = document.querySelectorAll(".key");
console.log(keyElements);
keyElements.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);
});
// listening events
window.addEventListener("keydown", playsound);
