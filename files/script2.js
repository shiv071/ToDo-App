const toggleDarkMode = document.querySelector('.toggle-dark-mode');

toggleDarkMode.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
});