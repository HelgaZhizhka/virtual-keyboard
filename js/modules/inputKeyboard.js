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
    if (shiftKey && altKey && keyData.shiftAlt) {
      return keyData.shiftAlt;
    } else if (shiftKey && keyData.shift) {
      return keyData.shift;
    } else if (altKey && keyData.alt) {
      return keyData.alt;
    } else {
      return keyData[this.languageManager.currentLanguage];
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
