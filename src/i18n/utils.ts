import { FlattenObjectKeys, flatten } from '@/lib/flatten';
import en from './translations/en.json';
import fr from './translations/fr.json';

export const languages = {
  en: 'English',
  fr: 'Français',
};

export type Lang = keyof typeof languages;

export const defaultLang = 'en';

const translations = {
  en: flatten(en) as {
    [K in FlattenObjectKeys<typeof en>]: string;
  },
  fr: flatten(fr) as {
    [K in FlattenObjectKeys<typeof fr>]: string;
  },
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in translations) return lang as keyof typeof translations;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof translations) {
  return function t(key: keyof (typeof translations)[typeof defaultLang]) {
    return translations[lang][key] || translations[defaultLang][key];
  };
}
