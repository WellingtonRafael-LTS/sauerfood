import pt from './pt.js';
import es from './es.js';
import en from './en.js';

const DICTIONARIES = { pt, es, en };
const STORAGE_KEY = 'sauer_lang';
const DEFAULT_LANG = 'pt';

export function getCurrentLanguage() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && DICTIONARIES[stored]) {
    return stored;
  }
  return DEFAULT_LANG;
}

export function getTranslation(keyPath, lang = getCurrentLanguage()) {
  const dict = DICTIONARIES[lang] || DICTIONARIES[DEFAULT_LANG];
  const keys = keyPath.split('.');
  let current = dict;

  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = current[key];
    } else {
      return keyPath;
    }
  }

  return current;
}

export function translatePage(lang = getCurrentLanguage()) {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const translation = getTranslation(key, lang);
    if (translation !== undefined) {
      if (translation.includes('<') && translation.includes('>')) {
        el.innerHTML = translation;
      } else {
        el.textContent = translation;
      }
    }
  });

  const htmlElement = document.documentElement;
  if (lang === 'pt') {
    htmlElement.setAttribute('lang', 'pt-BR');
  } else if (lang === 'es') {
    htmlElement.setAttribute('lang', 'es');
  } else if (lang === 'en') {
    htmlElement.setAttribute('lang', 'en');
  }
}

export function setLanguage(lang) {
  if (!DICTIONARIES[lang]) {
    return;
  }
  localStorage.setItem(STORAGE_KEY, lang);
  translatePage(lang);
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

export function initI18n() {
  const currentLang = getCurrentLanguage();
  translatePage(currentLang);
}
