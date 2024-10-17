const button = document.getElementById("randomButton");

function randomPosition() {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);
  button.style.position = "absolute";
  button.style.left = `${x}px`;
  button.style.top = `${y}px`;
}

button.addEventListener("mouseenter", () => {
  if (Math.random() < 0.5) {
    randomPosition();
  }
});

button.addEventListener("click", () => {
  randomPosition();
});
