import { en } from './locales/en';
import { ru } from './locales/ru';
import { getLocale } from './get-locale';
import type { Locale, Translation } from './types';

const dictionaries: Record<Locale, Translation> = { ru, en };

export const getTranslation = (language?: string): Translation => dictionaries[getLocale(language)];
