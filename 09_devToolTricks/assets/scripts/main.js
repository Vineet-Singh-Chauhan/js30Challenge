const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular
console.log("hello");
// Interpolated
console.log("hello I am a %s string!", "interpolated");
// Styled
console.log("%c I am styled log statement", "font-size:50px; color:#bafa6a");
// warning!
console.warn("Warning is here !");
// Error :|
console.error("Error is consoled ");
// Info
console.info("Some usefull info");
// Testing
console.assert(1 === 2, "That is wrong");
// clearing
// console.clear();
// Viewing DOM Elements
const p = document.querySelector("p");
console.dir(p);
// Grouping together
dogs.forEach((dog) => {
  console.group(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(` ${dog.name} is ${dog.age} years old`);
  console.log(` ${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(` ${dog.name}`);
});

// counting
console.count("Wes");
console.count("Wes");
console.count("steve");
console.count("Wes");
console.count("steve");
console.count("Wes");

// timing
console.time("Fetching data");
fetch("https://api.github.com/users/wesbos")
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("Fetching data");
    console.log(data);
  });

// table
console.table(dogs);
