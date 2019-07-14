window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const colors = [
    "red",
    "orangered",
    "orange",
    "green",
    "greenyellow",
    "yellow"
  ];

  // also press keys to play music, possibility to refactor the play sound part too since it's repeted. See the comment at the botton for a possible solution coz I don't want to touch further your beautiful code :D
  document.addEventListener("keydown", function(event) {
    const getKey = event.which;
    const createKeys = [68, 70, 71, 72, 74, 75]; // key codes for d f g h j k
    const getKeyIndex = createKeys.indexOf(getKey);
    if (createKeys.includes(getKey)) {
      sounds[getKeyIndex].currentTime = 0;
      sounds[getKeyIndex].play();
      createBalls(getKeyIndex);
    }
  });

  // Volume
  var audioVolume = document.getElementById("volume");
  audioVolume.volume = 0.2;

  /// Lets do the sound
  pads.forEach((pad, index) => {
    pad.addEventListener("click", function() {
      sounds[index].currentTime = 0;
      sounds[index].play();
      createBalls(index);
    });
  });

  // create a function to make the balls animation
  const createBalls = index => {
    const balls = document.createElement("div");
    visual.appendChild(balls);
    balls.style.backgroundColor = colors[index];
    balls.style.animation = "jump 1s ease";
    balls.addEventListener("animationend", function() {
      visual.removeChild(this);
    });
  };
});
