import React, { useMemo } from 'react';
import ButtonLink from '../ButtonLink';
import SocialLink from '../SocialLink/SocialLink';
import Avatar from '../Avatar/Avatar';
import { Locale } from '../../types';
import translates from '../../lang';
import { LangSwitcher } from '../LangSwitcher';

export interface SidebarStateProps {
    cvUrl: string;
    lang: Locale;
}

export interface SidebarDispatchProps {
    onLangChange: (lang: Locale) => void;
}

export type SidebarProps = SidebarStateProps & SidebarDispatchProps;

export const Sidebar: React.FC<SidebarProps> = (props) => {
    const { cvUrl, lang, onLangChange } = props;
    const t = useMemo(() => {
        return translates(lang);
    }, [lang]);

    return (
        <aside className="col-12 col-md-12 col-xl-3">
            <div className="sidebar box shadow pb-0 sticky-column">
                <Avatar avatar={'../../assets/images/me.webp'} />
                <div className="text-center">
                    <div className="text-md-center">
                        <LangSwitcher langs={[Locale.RU, Locale.EN]} activeLang={lang} onChange={onLangChange} />
                    </div>
                    <h3 className="title title--h3 sidebar__user-name">
                        <span className="weight--500">{t('captions.alexander')}</span> {t('captions.samarkin')}
                    </h3>
                    <div className="badge badge--dark">Frontend - developer</div>

                    <div className="social">
                        <SocialLink link={'https://www.instagram.com/alex.samarkin'} icon={'icon-instagram'} />
                        <SocialLink link={'https://www.github.com/AlexSamarkin'} icon={'icon-github'} />
                        <SocialLink
                            link={'https://www.linkedin.com/in/александр-самаркин-362bb9102/'}
                            icon={'icon-linkedin2'}
                        />
                    </div>
                </div>

                <div className="sidebar__info box-inner box-inner--rounded">
                    <ul className="contacts-block">
                        <li className="contacts-block__item" data-toggle="tooltip" data-placement="top" title="Address">
                            <i className="font-icon icon-location" />
                            {t('header.location')}
                        </li>
                        <li className="contacts-block__item" data-toggle="tooltip" data-placement="top" title="E-mail">
                            <a href="mailto:alexgui@yandex.ru">
                                <i className="font-icon icon-envelope" />
                                alexgui@yandex.ru
                            </a>
                        </li>
                        <li className="contacts-block__item" data-toggle="tooltip" data-placement="top" title="Skype">
                            <a href="skype:alexandersamarkin">
                                <i className="font-icon icon-skype" />
                                alexandersamarkin
                            </a>
                        </li>
                    </ul>

                    <ButtonLink title={t('buttons.cv')} href={cvUrl} icon={'icon-download'} />
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
