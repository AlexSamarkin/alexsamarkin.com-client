import React, { useMemo } from 'react';
import iconDev from '../../assets/icons/icon-dev.svg';
import parse from 'html-react-parser';
import Card from '../../components/Card/Card';
import Footer from '../../components/Footer/Footer';
import { Locale } from '../../types';
import translates from '../../lang';

export interface AboutStateProps {
    text: string;
    backend: string;
    frontend: string;
    lang: Locale;
}

export type AboutProps = AboutStateProps;

export const About: React.FC<AboutProps> = (props) => {
    const { text, lang, backend, frontend } = props;
    const t = useMemo(() => translates(lang), [lang]);

    return (
        <>
            <div className="pb-0 pb-sm-2">
                <h1 className="title title--h1 first-title title__separate">{t('headers.about')}</h1>
                {parse(text)}
            </div>

            <div className="box-inner pb-0">
                <h2 className="title title--h3">{t('headers.whatiamdoing')}</h2>
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <Card icon={iconDev} title={t('headers.backend')}>
                            {backend}
                        </Card>
                    </div>

                    <div className="col-12 col-lg-6">
                        <Card icon={iconDev} title={t('headers.frontend')}>
                            {frontend}
                        </Card>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
};

export default About;
