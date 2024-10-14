const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/acoustic_guitar.png") {
    myImage.setAttribute("src", "images/mandolin.jpg");
  } else {
    myImage.setAttribute("src", "images/acoustic_guitar.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Come jam with us at Dawson Street Pub on January 3rd, ${myName}!`;
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome back ${storedName}! Have you come to jam some more?`;
  }

  myButton.onclick = () => {
    setUserName();
  };