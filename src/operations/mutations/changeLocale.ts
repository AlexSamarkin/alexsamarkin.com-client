import { ReactiveVar } from '@apollo/client';
import languageService from '../../services/LanguageService';
import { Locale } from '../../types';

export default (localeVar: ReactiveVar<Locale>) => {
    return async (locale: Locale) => {
        await languageService.setLanguage(locale);
        localeVar(locale);
    };
};
