import i18n from 'i18next';
import { initReactI18next  } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import Cookies from 'universal-cookie';

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

const cookies = new Cookies();
let cached_language : string | undefined = cookies.get('language');

if (cached_language === undefined ) {
  cached_language = "en_us";
}

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next ) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: cached_language, // use en if detected lng is not available
    supportedLngs: ['en_us', 'zh_cn'],
    keySeparator: false, // we do not use keys in form messages.welcome
  });

export default i18n;