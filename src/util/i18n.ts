import i18n from 'i18next';
import { initReactI18next  } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import transENUS from '../assets/i18n/en_us.json';
import transZHCN from '../assets/i18n/zh_cn.json';

const resources = {
    en_us: {
        translation: transENUS
    },
    zh_cn: {
        translation: transZHCN
    }
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next ) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en_us",
    fallbackLng: "en_us", // use en if detected lng is not available

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;