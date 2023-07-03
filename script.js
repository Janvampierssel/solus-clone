function loadScreen() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let target = document.querySelector("#loading-logo");
  let targetOriginalValue = target.innerHTML;

  target.style.display = "inline-block";
  let targetSplitArray = target.innerHTML.split("");

  let iterations = 0;
  const interval = setInterval(() => {
    for (let i = 0; i < targetSplitArray.length; i++) {
      if (i < iterations) {
        targetSplitArray[i] = targetOriginalValue[i];
      } else targetSplitArray[i] = letters[Math.floor(Math.random() * 26)];
      target.innerHTML = targetSplitArray.join("");
    }

    if (iterations > targetOriginalValue.length) {
      setTimeout(() => {
        hideLoadingScene();
      }, 100);
      clearInterval(interval);
    }
    iterations += 1 / 6;
  }, 30);
}

function hideLoadingScene() {
  const element = document.getElementById("loading-screen");
  let opacity = 1; // Initial opacity value

  const fadeOut = setInterval(() => {
    if (opacity > 0) {
      opacity -= 0.02; // Reduce opacity by 0.1 (you can adjust the value as needed)
      element.style.opacity = opacity;
    } else {
      clearInterval(fadeOut); // Stop the interval when opacity reaches 0
      element.style.display = "none";
      enableScroll();
    }
  }, 25);
}

function enableScroll() {
  document.body.style.overflow = "scroll";
  console.log("Scroll enabled");
}
