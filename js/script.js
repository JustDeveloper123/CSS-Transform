const theme = document.querySelector('.dark-theme');
const themeButton = document.querySelector('.theme-button');

themeButton.onclick = function () {
    theme.classList.toggle('light-theme');
    theme.classList.toggle('dark-theme');
}