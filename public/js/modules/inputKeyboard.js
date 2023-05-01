export default class InputKeyboard {
  constructor(container, languageManager) {
    this.textarea = null;
    this.container = container;
    this.languageManager = languageManager;
  }

  formattingLang() {
    return `${this.languageManager.currentLanguage.charAt(0).toUpperCase()}${this.languageManager.currentLanguage.slice(1)}`;
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
      this.textarea.selectionEnd = cursorPosition + text.length;
    }
  }

  getKeyValue(keyData, shiftKey = false, altKey = false, isCapsLocked = false) {
    const langCode = this.formattingLang();
    let keyValue;

    if (shiftKey && altKey && keyData[`shiftAlt${langCode}`]) {
      keyValue = keyData[`shiftAlt${langCode}`];
    } else if (shiftKey && keyData[`shift${langCode}`]) {
      keyValue = keyData[`shift${langCode}`];
    } else if (altKey && keyData[`alt${langCode}`]) {
      keyValue = keyData[`alt${langCode}`];
    } else {
      keyValue = keyData[this.languageManager.currentLanguage];
    }
    return !isCapsLocked ? keyValue : keyValue.toUpperCase();
  }

  keyDetection(keyData, shiftKey, altKey, isCapsLocked) {
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
        case 'Space':
          this.insertText(' ');
          break;
        default:
          break;
      }
    }
  }

  init() {
    this.textarea = document.createElement('textarea');
    this.textarea.classList.add('textarea');
    this.textarea.autocomplete = "off";
    this.container.appendChild(this.textarea);
    this.focus();
  }
}
