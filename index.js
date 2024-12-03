const inputField = document.getElementById("input-field");
let container = document.getElementById("container");

const array = [
  "Don't think so",
  "YES!",
  "Would be smart",
  "... what now?",
  "Rethink some more.",
  "NO!",
  "I think you should invest in bitcoins instead.",
  "Sounds stupid",
  "No, don't be like BAX...",
  "suure?",
  "Absolutely fcking NOT!",
  "Whatever floats your boat :)",
  "That's the smartest thing i've heard all day",
];
//for å lage en random index position for arrayet mitt.

//printer ut en av array indexene mine
function generateRandomMessage() {
  let i = Math.floor(Math.random() * array.length);
  container.textContent = array[i];
}

function askQuestion() {
  if (inputField.value == "") {
    alert("You must write something!");
  } else {
    generateRandomMessage();
  }
  inputField.value = " ";
}

inputField.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    askQuestion();
  }
});
