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

    if (shiftKey && altKey && keyData[`shiftAlt${formattedLang}`]) {
      return keyData[`shiftAlt${formattedLang}`];
    } else if (shiftKey && keyData[`shift${formattedLang}`]) {
      return keyData[`shift${formattedLang}`];
    } else if (altKey && keyData[`alt${formattedLang}`]) {
      return keyData[`alt${formattedLang}`];
    } else {
      return keyData[lang];
    }
  }

  init() {
    this.textarea = document.createElement('textarea');
    this.textarea.classList.add('textarea');
    this.container.appendChild(this.textarea);
    this.focus();
  }

  getKeyStatus(keyData, shiftKey, altKey) {
    if (keyData.printable) {
      const keyText = this.getKeyValue(keyData, shiftKey, altKey);
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
        // case 'CapsLock':
        //   console.log('CapsLock');
        //   break;
        default:
          break;
      }
    }
  }
}
