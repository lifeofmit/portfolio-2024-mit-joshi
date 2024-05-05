// Define DOM elements
const toggleButton = document.querySelector("#toggle-button");
const root = document.querySelector(":root");
const storageKey = "color-mode";
const defaultMode = "light-mode";

// Load the user's preffered color mode from local storage.
function loadColorMode() {
  const colorMode = localStorage.getItem(storageKey);
  root.classList.add(colorMode || defaultMode);
  updateToggleButton();
}

loadColorMode();

// Toggle the color mode
toggleButton.addEventListener("click", () => {
  saveColorMode();
});

// Save the users's preffered color mode to local storage
function saveColorMode() {
  // Check if the root element has a class of "dark-mode". If yes, then the current mode is switched to light, and vice versa.
  const currentMode = root.classList.contains("dark-mode")
    ? "light-mode"
    : "dark-mode";
  root.classList.remove("light-mode", "dark-mode");
  root.classList.add(currentMode);
  localStorage.setItem(storageKey, currentMode);
  updateToggleButton();
}

function updateToggleButton() {
  if (root.classList.contains("dark-mode")) {
    toggleButton.style.backgroundImage = "url(https://github.com/lifeofmit/portfolio-2024-mit-joshi/assets/75907060/63db0a08-dd22-45d1-a13e-88457654178f)";
  } else {
    toggleButton.style.backgroundImage = "url(https://github.com/lifeofmit/portfolio-2024-mit-joshi/assets/75907060/c21919ab-e4b8-4388-a817-257fe6622c7b)";
  }
}
