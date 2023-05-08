class MagicKey {
  constructor(keyData, languageManager) {
    this.keyData = keyData;
    this.languageManager = languageManager;
    this.element = this.createKeyElement();
  }

  createKeyElement() {
    const key = document.createElement('button');
    key.classList.add('keyboard__key', 'key');
    key.dataset.key = this.keyData.key;
    key.dataset.print = +this.keyData.printable;

    const span = document.createElement('span');
    span.classList.add('key__value');
    span.textContent = this.keyData[this.languageManager.currentLanguage];
    key.appendChild(span);

    return key;
  }
}

export default MagicKey;
