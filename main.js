const toggleButton = document.getElementById("toggle-css");
useTheCss();

toggleButton.addEventListener("click", function () {
  const existingLink = document.querySelector("link[href='keybord.css']");
  if (existingLink) {
    existingLink.remove();
    toggleButton.textContent = "I love CSS";
  } else {
    useTheCss();
    toggleButton.textContent = "With Out CSS";
  }
});

function useTheCss() {
  const linkElement = document.createElement("link");
  linkElement.rel = "stylesheet";
  linkElement.type = "text/css";
  linkElement.href = "keybord.css";
  document.head.appendChild(linkElement);
}
