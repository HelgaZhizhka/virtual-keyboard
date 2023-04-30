export class LanguageManager {
  constructor() {
    this.language = 'en';
    this.loadLanguageFromLocalStorage();
  }

  get currentLanguage() {
    return this.language;
  }

  set currentLanguage(newValue) {
    this.language = newValue;
    this.saveLanguageToLocalStorage();
  }

  saveLanguageToLocalStorage() {
    localStorage.setItem('currentLanguage', this.language);
  }

  loadLanguageFromLocalStorage() {
    const storedLanguage = localStorage.getItem('currentLanguage');
    if (storedLanguage) {
      this.language = storedLanguage;
    }
  }

  toggleLanguage() {
    this.currentLanguage = this.currentLanguage === 'en' ? 'ru' : 'en';
  }
}
