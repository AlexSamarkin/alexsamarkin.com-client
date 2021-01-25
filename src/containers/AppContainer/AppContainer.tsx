import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_LOCALE } from '../../operations/queries/getLocale';
import App from '../../components/App';
import { Locale } from '../../types';
import Preloader from '../../components/Preloader';

export interface LocaleData {
    lang: Locale;
}

export const AppContainer: React.FC = () => {
    const { data } = useQuery<LocaleData>(GET_LOCALE);

    if (!data) {
        return <Preloader />;
    }

    return <App lang={data.lang} />;
};

export default AppContainer;
