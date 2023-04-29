import { data } from './modules/data.js';
import InputKeyboard from './modules/inputKeyboard.js';
import { getLayoutBase } from './modules/getLayoutBase.js';
import { MagicKeyboard } from './modules/keyboard.js';

const onLoadPage = () => {
  // generate basic layout for start page
  const layout = getLayoutBase();
  document.body.insertAdjacentHTML('afterBegin', layout);
  const sectionInput = document.querySelector('.section__textarea');
  const sectionContainer = document.querySelector('.section__container');
  // init class for keyboard and append layout to main container
  const inputKeyboard = new InputKeyboard(sectionInput);
  const keyboard = new MagicKeyboard(sectionContainer, data, inputKeyboard);
  inputKeyboard.init();
  keyboard.init();
};

document.addEventListener("DOMContentLoaded", onLoadPage);
