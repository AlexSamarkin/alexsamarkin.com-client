import React from 'react';
import { useQuery } from '@apollo/client';
import { Locale, NavItem } from '../../types';
import Menu from '../../components/Menu';
import { GET_LOCALE } from '../../operations/queries/getLocale';
import { GET_MENU } from '../../operations/queries/getMenu';

export interface MenuData {
    navs: NavItem[];
}

export interface MenuDataVars {
    locale: Locale;
}

const MenuContainer: React.FC = () => {
    const localeQueryResult = useQuery(GET_LOCALE);
    const locale = localeQueryResult.data.lang;
    const { data, loading } = useQuery<MenuData, MenuDataVars>(GET_MENU, {
        variables: { locale },
    });

    if (loading || !data) {
        return null;
    }

    return <Menu items={data.navs} />;
};

export default MenuContainer;
