import React from 'react';
import { Locale } from '../../types';
import { useQuery } from '@apollo/client';
import Preloader from '../../components/Preloader';
import { GET_TEXTS } from '../../operations/queries/getTexts';
import About from '../../pages/About';

export interface AboutQueryData {
    texts: {
        backendText: string;
        frontendText: string;
        aboutText: string;
    };
}

export interface AboutQueryVar {
    locale: Locale;
}

export const AboutContainer: React.FC<{ lang: Locale }> = ({ lang }) => {
    const { data, loading } = useQuery<AboutQueryData, AboutQueryVar>(GET_TEXTS, {
        variables: {
            locale: lang,
        },
    });

    if (loading || !data) {
        return <Preloader />;
    }

    const { aboutText, backendText, frontendText } = data.texts;

    return <About text={aboutText} backend={backendText} frontend={frontendText} lang={lang} />;
};

export default AboutContainer;
