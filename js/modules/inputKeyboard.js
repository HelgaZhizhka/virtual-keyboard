export default class InputKeyboard {
  constructor(container, languageManager) {
    this.textarea = null;
    this.container = container;
    this.languageManager = languageManager;
  }

  focus() {
    this.textarea.focus();
  }

  insertText(text) {
    const cursorPosition = this.textarea.selectionStart;
    const { value } = this.textarea;
    if (!text) {
      this.textarea.value = `${value.slice(0, cursorPosition - 1)}${value.slice(cursorPosition)}`;
      this.textarea.selectionEnd = cursorPosition - 1;
    } else {
      this.textarea.value = `${value.slice(0, cursorPosition)}${text}${value.slice(cursorPosition)}`;
      if (text === '\t') {
        this.textarea.selectionEnd = cursorPosition + 1;
      } else {
        this.textarea.selectionEnd = cursorPosition + text.length;
      }
    }
  }

  getKeyValue(keyData, shiftKey, altKey) {
    const lang = this.languageManager.currentLanguage;
    const formattedLang = `${lang.charAt(0).toUpperCase()}${lang.slice(1)}`;
    let keyValue;

    if (shiftKey && altKey && keyData[`shiftAlt${formattedLang}`]) {
      keyValue = keyData[`shiftAlt${formattedLang}`];
    } else if (shiftKey && keyData[`shift${formattedLang}`]) {
      keyValue = keyData[`shift${formattedLang}`];
    } else if (altKey && keyData[`alt${formattedLang}`]) {
      keyValue = keyData[`alt${formattedLang}`];
    } else {
      keyValue = keyData[lang];
    }
    // if (isCapsLocked && keyValue.match(/[a-zA-Zа-яА-ЯёЁ]/)) {
    //   keyValue = keyValue === keyValue.toUpperCase()
    //     ? keyValue.toLowerCase() : keyValue.toUpperCase();
    // }
    return keyValue;
  }

  init() {
    this.textarea = document.createElement('textarea');
    this.textarea.classList.add('textarea');
    this.container.appendChild(this.textarea);
    this.focus();
  }

  getKeyStatus(keyData, shiftKey, altKey, isCapsLocked) {
    if (keyData.printable) {
      const keyText = this.getKeyValue(keyData, shiftKey, altKey, isCapsLocked);
      this.insertText(keyText);
    } else {
      const { key } = keyData;
      switch (key) {
        case 'Enter':
          this.insertText('\n');
          break;
        case 'Tab':
          this.insertText('\t');
          break;
        case 'Backspace':
          this.insertText();
          break;
        case 'CapsLock':
          if (isCapsLocked) {
            console.log('CapsLock on');
          } else {
            console.log('CapsLock off');
          }
          break;
        case 'Space':
          this.insertText(' ');
          break;
        case 'ShiftLeft':
        case 'ShiftRight':
          console.log('Shift');
          break;
        case 'AltLeft':
        case 'AltRight':
          console.log('Alt');
          break;
        default:
          break;
      }
    }
  }
}
