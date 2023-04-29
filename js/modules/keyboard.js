const _privateData = Symbol('privateData');

export class MagicKeyboard {
  constructor(containerKeyboard, data, inputKeyboard) {
    this.container = null;
    this.keys = {};
    this.currentLanguage = 'en';
    this.containerKeyboard = containerKeyboard;
    this.inputKeyboard = inputKeyboard;
    this.data = data;
    this[_privateData] = [].concat(...data);
  }

  getKeyStatus(keyData, shiftKey, altKey) {
    if (shiftKey && altKey && keyData.shiftAlt) {
      return keyData.shiftAlt;
    } else if (shiftKey && keyData.shift) {
      return keyData.shift;
    } else if (altKey && keyData.alt) {
      return keyData.alt;
    } else {
      return keyData[this.currentLanguage];
    }
  }

  static toggleButtonState(keyCode, active) {
    const button = document.querySelector(`[data-key="${keyCode}"]`);
    active ? button.classList.add('active') : button.classList.remove('active');
  }

  handleKeyDown(event) {
    event.preventDefault();
    this.inputKeyboard.focus();
    // const key = this.keys.find((key) => key.dataset.key === event.code);
    const key = this.keys[event.code];
    if (key) {
      MagicKeyboard.toggleButtonState(event.code, true);
      const keyData = this[_privateData].find((data) => data.key === event.code);
      const { shiftKey, altKey } = event;
      const keyText = this.getKeyStatus(keyData, shiftKey, altKey);
      this.inputKeyboard.insertText(keyText);
    }
  }

  handleKeyUp(event) {
    event.preventDefault();
    const key = this.keys[event.code];
    // const key = this.keys.find((key) => key.dataset.key === event.code);
    if (key) {
      MagicKeyboard.toggleButtonState(event.code, false);
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
        // this.keys.push(key);
        this.keys[keyData.key] = key;

        key.addEventListener('click', () => {
          this.inputKeyboard.focus();
          this.inputKeyboard.insertText(key.textContent);
        });
      });
    });

    document.addEventListener('keydown', (event) => this.handleKeyDown(event));
    document.addEventListener('keyup', (event) => this.handleKeyUp(event));
  }
}
