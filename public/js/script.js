// public/js/script.js

// Function to check OS theme preference and apply the respective mode
function applyTheme() {
  const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (isDarkMode) {
    document.body.classList.add('dark-mode');
    document.getElementById("theme-toggle").textContent = "☀️"; // Sun icon for light mode
  } else {
    document.body.classList.remove('dark-mode');
    document.getElementById("theme-toggle").textContent = "🌙"; // Moon icon for dark mode
  }
}

// Apply theme on page load
applyTheme();

// Optionally, listen for changes in the theme preference
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyTheme);

// Dark/light mode toggle button functionality
document.addEventListener("DOMContentLoaded", () => {
  const themeToggleButton = document.getElementById("theme-toggle");

  themeToggleButton.addEventListener("click", () => {
    // Toggle dark mode class
    document.body.classList.toggle("dark-mode");

    // Save the user's preference
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
      themeToggleButton.textContent = "☀️"; // Sun icon for light mode
    } else {
      localStorage.setItem("theme", "light");
      themeToggleButton.textContent = "🌙"; // Moon icon for dark mode
    }
  });

  // Check local storage to set the theme on initial load
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme) {
    document.body.classList.toggle("dark-mode", currentTheme === "dark");
    themeToggleButton.textContent = currentTheme === "dark" ? "☀️" : "🌙"; // Set the icon based on current theme
  }
});
