// 1. импортируем шаблон
import menuTemplate from "../templates/menu.hbs"

// 2. подключаем файл с данными для шаблона
import dataMenu from "../data/menu.json"

// 3. создаем разметку, вызываем шаблон и передаем аргументом массив даных
const template = menuTemplate(dataMenu);

// 4. получить доступ к элементу, куда будем встраивать шаблон
import menuRefs from "./refs.js"
const { menuEl } = menuRefs

// 5. встраиваем полученный шаблон
menuEl.insertAdjacentHTML('afterbegin', template)