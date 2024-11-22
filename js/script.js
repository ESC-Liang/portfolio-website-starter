// Add custom JavaScript here
function runTypingEffect() {
  const text = "I am Brad Traversy.";
  const typingElement = document.getElementById("tying-text");
  const typingDelay = 100;

  typeText(text, typingElement, typingDelay);
}

function typeText(text, tyingElement, delay) {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      tyingElement.textContent += text.charAt(i);
    }, delay * i);
  }
}

document.addEventListener("DOMContentLoaded", runTypingEffect);
