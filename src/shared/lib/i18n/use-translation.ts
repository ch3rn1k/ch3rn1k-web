import { useMemo } from 'react';
import { getTranslation } from './get-translation';

export const useTranslation = () => useMemo(() => getTranslation(), []);
