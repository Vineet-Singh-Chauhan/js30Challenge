const divs = document.querySelectorAll("div");

function logText(e) {
  console.log(this.classList.value);
  //* stop bubbling
  //   e.stopPropagation();
}

divs.forEach((e) => {
  //   e.addEventListener("click", logText);

  //* capture : true
  //   e.addEventListener("click", logText, {
  //     capture: true,
  //   });

  //*capture:false (default)
  //   e.addEventListener("click", logText, {
  //     capture: false,
  //   });

  //*once:true // listen for event and then unbound when it fires for first time
  e.addEventListener("click", logText, {
    capture: false,
    once: true,
  });
});
