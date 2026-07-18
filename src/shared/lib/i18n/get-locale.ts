import type { Locale } from './types';

export const getLocale = (language = navigator.language): Locale => {
  const base = language.toLowerCase().split('-')[0];
  return base === 'ru' ? 'ru' : 'en';
};
