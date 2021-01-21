import React from 'react';
import { Locale } from '../../types';
import LangButton from './LangButton';

export interface Props {
    langs: Locale[];
    activeLang: Locale;
    onChange: (lang: Locale) => void;
}

export const LangSwitcher: React.FC<Props> = (props) => {
    const { langs, activeLang, onChange } = props;
    return (
        <div className="btn-group btn-group-toggle btn-group-sm lang-switcher" data-toggle="buttons">
            {langs &&
                langs.map((lang: Locale) => {
                    return <LangButton key={lang} active={lang !== activeLang} lang={lang} onChange={onChange} />;
                })}
        </div>
    );
};

export default LangSwitcher;
