import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useQuery } from '@apollo/client';
import { GET_LOCALE } from '../../operations/queries/getLocale';
import localeMutations from '../../operations/mutations';

const SidebarContainer: React.FC = () => {
    const localeQueryResult = useQuery(GET_LOCALE);
    const lang = localeQueryResult.data.lang;
    const { changeLocale } = localeMutations;

    return <Sidebar lang={lang} onLangChange={changeLocale} />;
};

export default SidebarContainer;
