import refs from "./refs.js";
const { body, checkbox } = refs;


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const { LIGHT, DARK } = Theme

let themeClass = localStorage.getItem("theme")
body.classList.add(themeClass)
if (themeClass === DARK) {
  checkbox.checked = true
} 

checkbox.addEventListener('change', onSwitchClick)


function onSwitchClick(event) {
  body.classList.toggle(DARK);
  localStorage.getItem("theme")?localStorage.removeItem("theme"):localStorage.setItem("theme", DARK)
}



