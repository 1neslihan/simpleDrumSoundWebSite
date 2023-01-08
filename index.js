const drumButtons = document.querySelectorAll(".drum");
for (let i = 0; i < drumButtons.length; i++) {
  drumButtons[i].addEventListener("click", function () {
    //var buttonsInnerHTML = this.innerHTML;
    MakeSound(this.innerHTML);
  });
}

document.addEventListener("keydown", function (event) {
  //const keyVal=event.key;
  MakeSound(event.key);
  buttonAnimation(event.key);
});

function MakeSound(key) {
  switch (key) {
    case "w":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "d":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    default:
      break;
  }
}

function buttonAnimation(currentKey) {
  const activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("activated");
  setTimeout(function () {
    activeButton.classList.remove("activated");
  }, 150);
  console.log(activeButton);
}
