export default class InputKeyboard {
  constructor(container) {
    this.textarea = null;
    this.container = container;
  }

  focus() {
    this.textarea.focus();
  }

  init() {
    this.textarea = document.createElement('textarea');
    this.textarea.classList.add('textarea');
    this.container.appendChild(this.textarea);
    this.focus();
  }

  insertText(text) {
    console.log(text, this.container);
  }
}
