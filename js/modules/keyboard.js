const _privateData = Symbol('privateData');

export class MagicKeyboard {
  constructor(containerKeyboard, data, inputKeyboard, languageManager) {
    this.container = null;
    this.keys = {};
    this.currentLanguage = 'en';
    this.isCapsLocked = false;
    this.containerKeyboard = containerKeyboard;
    this.inputKeyboard = inputKeyboard;
    this.languageManager = languageManager;
    this.data = data;
    this[_privateData] = [].concat(...data);
  }

  toggleButtonState(keyCode, active) {
    const button = this.keys[keyCode];
    active ? button.classList.add('active') : button.classList.remove('active');
  }

  updateKeys() {
    const buttons = Object.keys(this.keys)
      .map((key) => this.keys[key]).filter((btn) => +btn.dataset.print);
    buttons.forEach((btn) => {
      const button = btn;
      if (this.isCapsLocked && button.textContent.match(/[a-zA-Zа-яА-ЯёЁ]/)) {
        button.textContent = button.textContent.toUpperCase();
      } else {
        button.textContent = button.textContent.toLowerCase();
      }
    });
  }

  keyDetection(keyData, shiftKey, altKey) {
    if (keyData.printable) {
      // const keyText = this.getKeyValue(keyData, shiftKey, altKey);
      // this.insertText(keyText);
    } else {
      const { key } = keyData;
      switch (key) {
        case 'Enter':
          this.inputKeyboard.insertText('\n');
          break;
        case 'Tab':
          this.inputKeyboard.insertText('\t');
          break;
        case 'Backspace':
          this.inputKeyboard.insertText();
          break;
        case 'CapsLock':
          if (this.isCapsLocked) {
            console.log('CapsLock on');
            this.updateKeys();
          } else {
            console.log('CapsLock off');
          }
          break;
        case 'Space':
          this.inputKeyboard.insertText(' ');
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

  handleKeyDown(event, isMouseEvent) {
    event.preventDefault();
    this.inputKeyboard.focus();
    const key = isMouseEvent ? event.target.closest('.keyboard__key') : this.keys[event.code];
    if (key) {
      const keyCode = key.dataset.key;
      const keyData = this[_privateData].find((data) => data.key === keyCode);
      const { shiftKey, altKey } = event;
      const capsKey = isMouseEvent ? event.target.closest('.keyboard__key').dataset.key === 'CapsLock' : event.getModifierState('CapsLock');
      if (keyCode === 'CapsLock' || (isMouseEvent && keyCode === 'CapsLock')) {
        key.classList.toggle('active');
        this.isCapsLocked = isMouseEvent ? !this.isCapsLocked : capsKey;
      } else {
        this.toggleButtonState(keyCode, true);
      }
      this.keyDetection(keyData, shiftKey, altKey);
      // this.inputKeyboard.getKeyStatus(keyData, shiftKey, altKey, this.isCapsLocked, dataKeys);
    }
  }

  handleKeyUp(event, isMouseEvent) {
    event.preventDefault();
    const key = isMouseEvent ? event.target.closest('.keyboard__key') : this.keys[event.code];
    if (key) {
      const keyCode = key.dataset.key;
      if (keyCode !== 'CapsLock' || (!isMouseEvent && keyCode === 'CapsLock')) {
        this.toggleButtonState(keyCode, false);
      }
      if (!isMouseEvent && keyCode === 'CapsLock') {
        this.isCapsLocked = event.getModifierState('CapsLock'); 
      }
    }
    console.log(this.isCapsLocked);
    this.updateKeys();
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
        key.dataset.print = +keyData.printable;
        key.textContent = keyData[this.currentLanguage];
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
