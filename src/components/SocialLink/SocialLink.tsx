import React from 'react';

export interface SocialLinkProps {
    link: string;
    icon: string;
}

export const SocialLink: React.FC<SocialLinkProps> = ({ link, icon }) => {
    const className = `font-icon ${icon}`;
    return (
        <a target="_blank" rel="noreferrer" className="social__link" href={link}>
            <i className={className} />
        </a>
    );
};

export default SocialLink;
