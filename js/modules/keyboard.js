const _privateData = Symbol('privateData');

export class MagicKeyboard {
  constructor(containerKeyboard, data, inputKeyboard, languageManager) {
    this.container = null;
    this.keys = {};
    this.currentLanguage = 'en';
    this.containerKeyboard = containerKeyboard;
    this.inputKeyboard = inputKeyboard;
    this.languageManager = languageManager;
    this.data = data;
    this[_privateData] = [].concat(...data);
  }

  static toggleButtonState(keyCode, active) {
    const button = document.querySelector(`[data-key="${keyCode}"]`);
    active ? button.classList.add('active') : button.classList.remove('active');
  }

  handleKeyDown(event, isMouseEvent) {
    event.preventDefault();
    this.inputKeyboard.focus();
    const key = isMouseEvent ? event.target.closest('.keyboard__key') : this.keys[event.code];
    if (key) {
      const keyCode = key.dataset.key;
      MagicKeyboard.toggleButtonState(keyCode, true);
      const keyData = this[_privateData].find((data) => data.key === keyCode);
      const { shiftKey, altKey } = event;
      // const keyText = this.getKeyStatus(keyData, shiftKey, altKey);
      this.inputKeyboard.insertText(keyData, shiftKey, altKey);
    }
  }

  handleKeyUp(event, isMouseEvent) {
    event.preventDefault();
    const key = isMouseEvent ? event.target.closest('.keyboard__key') : this.keys[event.code];
    if (key) {
      const keyCode = key.dataset.key;
      MagicKeyboard.toggleButtonState(keyCode, false);
    }
  }

  init() {
    this.container = this.containerKeyboard.appendChild(document.createElement('div'));
    this.container.classList.add('keyboard');

    this.data.forEach((row) => {
      const rowElement = document.createElement('div');
      rowElement.classList.add('keyboard__row');
      this.container.appendChild(rowElement);

      row.forEach((keyData) => {
        const key = document.createElement('button');
        key.classList.add('keyboard__key', 'key');
        key.dataset.key = keyData.key;
        key.textContent = keyData.en;
        rowElement.appendChild(key);
        this.keys[keyData.key] = key;
      });
    });

    document.addEventListener('mousedown', (event) => this.handleKeyDown(event, true));
    document.addEventListener('mouseup', (event) => this.handleKeyUp(event, true));
    document.addEventListener('keydown', (event) => this.handleKeyDown(event));
    document.addEventListener('keyup', (event) => this.handleKeyUp(event));
  }
}
