const toggleThemeButton = document.getElementById('toggle-theme');

document.documentElement.setAttribute('data-theme', 'dark');
toggleThemeButton.addEventListener('click', function () {
    const currentTheme = document.documentElement.getAttribute('data-theme');

    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
});
