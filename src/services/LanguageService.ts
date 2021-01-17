import { Locale } from '../types';

export class LanguageService {
    public getDefaultLanguage(): Locale {
        return Locale.EN;
    }

    public setLanguage(lang: Locale): void {
        localStorage.setItem('lang', lang);
    }

    public getLanguage(): Locale {
        return (localStorage.getItem('lang') as Locale) || this.getDefaultLanguage();
    }
}

export default new LanguageService();
