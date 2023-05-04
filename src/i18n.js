import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    backend: {
      loadPath: '/i18n/{{ns}}/{{lng}}.json',
    },
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: false,
    // interpolation: {
    //   escapeValue: false,
    //   formatSeparator: ',',
    // },
    react: {
      useSuspense: true,
    },
    // resources: {
    //   en: {
    //     translation: {
    //       header: {
    //         aboutUs: 'ABOUT US',
    //         recordStudio: 'RECORD STUDIO',
    //         courseDj: 'DJ COURSE',
    //         courseProduction: 'PRODUCTION COURSE',
    //         rent: 'RENT',
    //         podcast: 'PODCAST',
    //         contactUs: 'CONTACT US'
    //       },
    //       aboutUs: {
    //         p1: ' - music studio based in Lviv for those who need a creative underground space (with an underground atmosphere) for communication and creating music.',
    //         p2: 'Comfort and professional equipment will make your creative process full of inspiration and freedom to experiment.'
    //       },
    //       recordStudio: {
    //         p1: 'blablabla'
    //       }
    //     }
    //   },
    //   ua: {
    //     translation: {
    //       header: {
    //         aboutUs: 'ПРО НАС',
    //         recordStudio: 'СТУДІЯ ЗВУКОЗАПИСУ',
    //         courseDj: 'КУРС DJ',
    //         courseProduction: 'КУРС PRODUCTION',
    //         rent: 'ОРЕНДА',
    //         podcast: 'ПОДКАСТ',
    //         contactUs: 'КОНТАКТИ'
    //       },
    //       aboutUs: {
    //         p1: ' - музична студія, що базується у Львові для тих, кому потрібен креативний андерграунд-простір (з атмосферою андерграунду) для спілкування та створення музики.',
    //         p2: 'Комфорт та професійне обладнання зробить ваш творчий процес повним натхнення та свободи експериментів.'
    //       },
    //       recordStudio: {
    //         p1: '123123123123'
    //       }
    //     }
    //   }
    // }
  });

export default i18n;