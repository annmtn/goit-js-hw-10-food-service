import refs from './refs.js';
const { body, checkbox } = refs;

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const { LIGHT, DARK } = Theme;

let themeClass = localStorage.getItem('theme');
body.classList.add(themeClass === null ? LIGHT : themeClass);
if (themeClass === DARK) {
  checkbox.checked = true;
}

checkbox.addEventListener('change', onSwitchClick);

function onSwitchClick(event) {
  if (checkbox.checked) {
    body.classList.replace(LIGHT, DARK);
    localStorage.setItem('theme', DARK);
  } else {
    body.classList.replace(DARK, LIGHT);
    localStorage.setItem('theme', LIGHT);
  }
}
