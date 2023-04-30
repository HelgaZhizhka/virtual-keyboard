const _privateData = Symbol('privateData');
const isWindows = /Win/.test(window.navigator.userAgent);

export class MagicKeyboard {
  constructor(containerKeyboard, data, inputKeyboard, languageManager) {
    this.container = null;
    this.keys = {};
    this.isCapsLocked = false;
    this.isShiftPressed = false;
    this.isAltPressed = false;
    this.containerKeyboard = containerKeyboard;
    this.inputKeyboard = inputKeyboard;
    this.languageManager = languageManager;
    this.data = data;
    this[_privateData] = [].concat(...data);
  }

  getArrayKeys() {
    return Object.keys(this.keys).map((key) => this.keys[key]);
  }

  toggleButtonState(keyCode, active) {
    const button = this.keys[keyCode];
    active ? button.classList.add('active') : button.classList.remove('active');
  }

  updateCapsLockLabels() {
    const buttons = this.getArrayKeys().filter((btn) => +btn.dataset.print && btn.textContent.match(/[a-zA-Zа-яА-ЯёЁ]/));
    buttons.forEach((btn) => {
      const button = btn;
      if (this.isCapsLocked) {
        button.textContent = button.textContent.toUpperCase();
      } else {
        button.textContent = button.textContent.toLowerCase();
      }
    });
  }

  updateKeyLabels(shiftPressed, altPressed) {
    this[_privateData].forEach((keyData) => {
      const key = this.keys[keyData.key];
      const keyValue = this.inputKeyboard.getKeyValue(keyData, shiftPressed, altPressed);
      key.textContent = keyValue;
    });
  }

  handleKeyDown(event, isMouseEvent = false) {
    event.preventDefault();
    this.inputKeyboard.focus();
    const key = isMouseEvent ? event.target.closest('.keyboard__key') : this.keys[event.code];
    if (key) {
      const keyCode = key.dataset.key;
      const keyData = this[_privateData].find((keyObj) => keyObj.key === keyCode);
      const { shiftKey, altKey } = event;
      if (keyCode === 'CapsLock') {
        key.classList.toggle('active');
        this.isCapsLocked = !this.isCapsLocked;
        this.updateCapsLockLabels();
      } else {
        this.toggleButtonState(keyCode, true);
      }

      if (isMouseEvent) {
        if (['ShiftLeft', 'ShiftRight'].includes(keyCode)) {
          this.isShiftPressed = !this.isShiftPressed;
          this.updateKeyLabels(this.isShiftPressed, this.isAltPressed);
        }
        if (['AltLeft', 'AltRight'].includes(keyCode)) {
          this.isAltPressed = !this.isAltPressed;
          this.updateKeyLabels(this.isShiftPressed, this.isAltPressed);
        }
      } else if (['ShiftLeft', 'ShiftRight', 'AltLeft', 'AltRight'].includes(keyCode)) {
        this.updateKeyLabels(event.shiftKey, event.altKey);
      }

      this.inputKeyboard.keyDetection(keyData, shiftKey, altKey, this.isCapsLocked);
    }
  }

  handleKeyUp(event, isMouseEvent = false) {
    event.preventDefault();
    const key = isMouseEvent ? event.target.closest('.keyboard__key') : this.keys[event.code];
    if (key) {
      const keyCode = key.dataset.key;

      if (keyCode === 'CapsLock') {
        if (!isMouseEvent && !isWindows) {
          key.classList.toggle('active');
          this.isCapsLocked = !this.isCapsLocked;
          this.updateCapsLockLabels();
        }
      } else {
        this.toggleButtonState(keyCode, false);
      }

      if (isMouseEvent) {
        if (['ShiftLeft', 'ShiftRight'].includes(keyCode)) {
          this.isShiftPressed = false;
          this.updateKeyLabels(this.isShiftPressed, this.isAltPressed);
        }
        if (['AltLeft', 'AltRight'].includes(keyCode)) {
          this.isAltPressed = false;
          this.updateKeyLabels(this.isShiftPressed, this.isAltPressed);
        }
      } else if (['ShiftLeft', 'ShiftRight', 'AltLeft', 'AltRight'].includes(keyCode)) {
        this.updateKeyLabels(event.shiftKey, event.altKey);
      }
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
        key.dataset.print = +keyData.printable;
        key.textContent = keyData[this.languageManager.currentLanguage];
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
