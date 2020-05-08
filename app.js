//jshint esversion: 6

const quoteArray = [
  "Whenever you find yourself on the side of the majority, it is time to pause and reflect.",
  "Ideas are more powerful than guns. We would not let our enemies have guns, why should we let them have ideas?",
  "Our enemies are innovative and resourceful, and so are we. They never stop thinking about new ways to harm our country and our people, and neither do we.",
  "What is best in life? To crush your enemies, see them driven before you, and to hear the lamentation of their women!"
];

const authorArray = ["Mark Twain", "Joseph Stalin", "George W. Bush", "Conan"];
const button = document.querySelector("button");
let image = document.querySelector("img");
let mainQuote = document.querySelector(".mb-0");
let author = document.querySelector(".blockquote-footer");

button.addEventListener("click", changeStuff);

function changeStuff() {

  let quoteSelector = Math.floor(Math.random() * 4);

  if (quoteSelector == 0) {

    image.style.transform = "scale(1)";
    image.src = "Images/mark_twain.jpeg";
    mainQuote.innerText = quoteArray[0];
    author.innerText = authorArray[0];

  }

  if (quoteSelector == 1) {

    image.style.transform = "scale(1)";
    image.src = "Images/joseph_stalin.jpeg";
    mainQuote.innerText = quoteArray[1];
    author.innerText = authorArray[1];

  }

  if (quoteSelector == 2) {

    image.style.transform = "scale(0.33)";
    image.src = "Images/george_w_bush.jpg";
    mainQuote.innerText = quoteArray[2];
    author.innerText = authorArray[2];

  }

  if (quoteSelector == 3) {

    image.style.transform = "scale(0.5)";
    image.src = "Images/conan.jpeg";
    mainQuote.innerText = quoteArray[3];
    author.innerText = authorArray[3];

  }

}
