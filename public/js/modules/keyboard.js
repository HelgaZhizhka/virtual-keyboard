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
    this.transitionEndHandler = MagicKeyboard.handleTransitionEnd.bind(this);
  }

  destroy() {
    Object.values(this.keys).forEach((key) => {
      key.removeEventListener('transitionend', this.transitionEndHandler);
    });
  }

  static handleTransitionEnd(event) {
    event.target.classList.remove('key-fade');
  }

  toggleButtonState(keyCode, active) {
    const button = this.keys[keyCode];
    active ? button.classList.add('active') : button.classList.remove('active');
  }

  updateKeyWithAnimation(keyData, shiftPressed, altPressed, isCaps = false) {
    const key = this.keys[keyData.key].querySelector('.key__value');
    const keyValue = this.inputKeyboard
      .getKeyValue(keyData, shiftPressed, altPressed, this.isCapsLocked);
    key.classList.add('key-fade');
    key.addEventListener('transitionend', this.transitionEndHandler);

    setTimeout(() => {
      if (!isCaps) {
        key.textContent = keyValue;
      } else {
        this.isCapsLocked ? key.textContent = key.textContent.toUpperCase()
          : key.textContent = key.textContent.toLowerCase();
      }
    }, 50);
  }

  updateLanguageLabels() {
    this.languageManager.toggleLanguage();
    const keys = this[_privateData].filter((key) => key.printable && key[this.languageManager.currentLanguage].match(/[a-zA-Zа-яА-ЯёЁ]/));
    keys.forEach((keyData) => this
      .updateKeyWithAnimation(keyData, this.isShiftPressed, this.isAltPressed));
  }

  updateCapsLockLabels() {
    const keys = this[_privateData].filter((key) => key.printable && key[this.languageManager.currentLanguage].match(/[a-zA-Zа-яА-ЯёЁ]/));
    keys.forEach((keyData) => this
      .updateKeyWithAnimation(keyData, this.isShiftPressed, this.isAltPressed, true));
  }

  updateKeyLabels(shiftPressed, altPressed) {
    this[_privateData].forEach((keyData) => {
      this.updateKeyWithAnimation(keyData, shiftPressed, altPressed);
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

      if (event.altKey && event.ctrlKey) {
        this.updateLanguageLabels();
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

        const span = document.createElement('span');
        span.classList.add('key__value');
        span.textContent = keyData[this.languageManager.currentLanguage];
        key.appendChild(span);

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
