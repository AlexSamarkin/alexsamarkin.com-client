import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_LOCALE } from '../../operations/queries/getLocale';
import App from '../../components/App';
import { Locale } from '../../types';
import Preloader from '../../components/Preloader';

export interface LocaleQueryData {
    lang: Locale;
}

export const AppContainer: React.FC = () => {
    const { data, loading } = useQuery<LocaleQueryData>(GET_LOCALE);

    if (!data || loading) {
        return <Preloader />;
    }

    return <App lang={data.lang} />;
};

export default AppContainer;
