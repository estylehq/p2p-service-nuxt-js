import {
  currencyFormats as koCurrencyFormats,
  dateTimeFormats as koDateTimeFormats,
} from './ko';

export default {
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'Global',
      file: 'en/index.js',
    },
    {
      code: 'ko',
      iso: 'ko-KR',
      name: '한국어',
      file: 'ko/index.js',
    },
  ],
  defaultLocale: 'ko',
  fallbackLocale: 'ko',
  lazy: true,
  langDir: 'lang/',
  seo: true,
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'i18n_redirected',
  },
  vueI18n: {
    numberFormats: {
      ko: koCurrencyFormats,
      'ko-KR': koCurrencyFormats,
    },
    dateTimeFormats: {
      ko: koDateTimeFormats,
      'ko-KR': koDateTimeFormats,
    },
  },
};
