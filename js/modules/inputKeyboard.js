export default class InputKeyboard {
  constructor(container, languageManager) {
    this.textarea = null;
    this.container = container;
    this.languageManager = languageManager;
  }

  focus() {
    this.textarea.focus();
  }

  getKeyStatus(keyData, shiftKey, altKey) {
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

  insertText(keyData, shiftKey, altKey) {
    if (keyData.printable) {
      const cursorPosition = this.textarea.selectionStart;
      const { value } = this.textarea;
      const keyText = this.getKeyStatus(keyData, shiftKey, altKey);
      this.textarea.value = `${value.slice(0, cursorPosition)}${keyText}${value.slice(cursorPosition)}`;
      this.textarea.selectionEnd = cursorPosition + keyText.length;
    }
  }
}
