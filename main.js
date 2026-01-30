document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for navigation links
  document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Theme toggle
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  const applyTheme = (theme) => {
    if (theme === 'light') {
      body.classList.add('light-theme');
      themeToggle.textContent = '☀️';
    } else {
      body.classList.remove('light-theme');
      themeToggle.textContent = '🌙';
    }
  };

  themeToggle.addEventListener('click', () => {
    const isLightTheme = body.classList.contains('light-theme');
    if (isLightTheme) {
      localStorage.setItem('theme', 'dark');
      applyTheme('dark');
    } else {
      localStorage.setItem('theme', 'light');
      applyTheme('light');
    }
  });

  // Apply saved theme on load
  const savedTheme = localStorage.getItem('theme') || 'dark';
  applyTheme(savedTheme);
});