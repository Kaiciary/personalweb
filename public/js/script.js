// Function to check OS theme preference and apply the respective mode
function applyTheme() {
  const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (isDarkMode) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
}

// Apply theme on page load
applyTheme();

// Optionally, listen for changes in the theme preference
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyTheme);
