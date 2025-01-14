const darkMode = () => {
  const htmlElement = document.documentElement; // The <html> element

  // Retrieve the user's saved theme preference
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'dark') {
    htmlElement.classList.add('dark'); // Apply dark mode
  } else if (savedTheme === 'light') {
    htmlElement.classList.remove('dark'); // Apply light mode
  }

  const themeToggle = document.getElementById('theme-toggle'); // Toggle button

  // Listen for toggle button clicks
  themeToggle.addEventListener('click', () => {
    if (htmlElement.classList.contains('dark')) {
      htmlElement.classList.remove('dark'); // Switch to light mode
      localStorage.setItem('theme', 'light'); // Save preference
    } else {
      htmlElement.classList.add('dark'); // Switch to dark mode
      localStorage.setItem('theme', 'dark'); // Save preference
    }
  });
}

export default darkMode;