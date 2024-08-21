import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "welcome": "Welcome to My Swap Platform",
      "home": "Home",
      "trade": "Trade",
      "presale": "Presale",
      "market": "Market",
      "staking": "Staking",
      "game": "Game"
    }
  },
  fr: {
    translation: {
      "welcome": "Bienvenue sur My Swap Platform",
      "home": "Accueil",
      "trade": "Échanger",
      "presale": "Prévente",
      "market": "Marché",
      "staking": "Staking",
      "game": "Jeu"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // 默认语言
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;