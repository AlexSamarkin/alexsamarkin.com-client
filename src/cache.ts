import { InMemoryCache, ReactiveVar, makeVar } from '@apollo/client';
import languageService from './services/LanguageService';
import { Locale } from './types';

export const cache: InMemoryCache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                lang: {
                    read() {
                        return localeVar();
                    },
                },
            },
        },
    },
});

export const localeVar: ReactiveVar<Locale> = makeVar<Locale>(languageService.getLanguage());
