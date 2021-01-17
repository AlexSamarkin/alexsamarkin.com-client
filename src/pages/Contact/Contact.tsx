import React, { useMemo } from 'react';
import Map from '../../components/Map/Map';
import { ContactsContainer } from '../../containers/ContactContainer/ContactContainer';
import Footer from '../../components/Footer/Footer';
import { Locale } from '../../types';
import translates from '../../lang';

export interface ContactProps {
    lang: Locale;
}

export const Contact: React.FC<ContactProps> = ({ lang }) => {
    const t = useMemo(() => translates(lang), [lang]);
    return (
        <>
            <div className="pb-3">
                <h1 className="title title--h1 first-title title__separate">{t('headers.contact')}</h1>
            </div>

            <Map lat={55.751244} lon={37.618423} />

            <h2 className="title title--h3">{t('headers.contactForm')}</h2>

            <ContactsContainer />

            <div className="box-inner box-inner--rounded">
                <Footer />
            </div>
        </>
    );
};

export default Contact;
