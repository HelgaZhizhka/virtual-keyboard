import { keyGenerator } from './modules/keyGenerator.js';


const onLoadPage = () => {
  const mainContainer = document.createElement('main');
  const section = document.createElement('section');
  const textArea = document.createElement('textarea');
  const keyboard = document.createElement('div');
  const sectionDescription = document.createElement('div');
  const sectionHeading = document.createElement('h1');
  const description = `<p>Клавиатура создана в операционной системе MacOs</p>
                        <p>Для переключения языка комбинация: левыe ctrl + alt</p>`;
  const heading = `RSS Виртуальная клавиатура`;
  mainContainer.classList.add('container');
  section.classList.add('section');
  textArea.classList.add('textarea', 'section__textarea');
  textArea.rows = 5;
  keyboard.classList.add('section__container', 'keyboard');
  sectionDescription.classList.add('section__description');
  sectionDescription.insertAdjacentHTML('afterBegin', description);
  sectionHeading.insertAdjacentHTML('afterBegin', heading);
  sectionHeading.classList.add('section__heading');
  document.body.append(mainContainer);
  mainContainer.append(section);
  section.append(sectionHeading, textArea, keyboard, sectionDescription);
  

  keyGenerator.forEach((row) => {
    const rowElement = document.createElement('div');
    rowElement.classList.add('keyboard__row');
    row.forEach((key) => {
      const keyElement = document.createElement('button');
      console.log(key);
      keyElement.classList.add('key','keyboard__key');
      keyElement.dataset.key = key.key;
      keyElement.textContent = key.en
      rowElement.appendChild(keyElement);
    });
    keyboard.appendChild(rowElement);
  })
}
  
document.addEventListener("DOMContentLoaded", onLoadPage);
