import React, { useCallback } from 'react';

export interface ButtonLinkProps {
    title: string;
    href: string;
    icon?: string;
    disabled?: boolean;
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({ title, href, icon, disabled }) => {
    const renderIcon = useCallback(() => {
        if (!icon) {
            return null;
        }

        const className = `font-icon ${icon}`;
        return <i className={className} />;
    }, [icon]);

    return (
        <a className={`btn ${disabled ? 'disabled' : ''}`} rel="noreferrer" target={'_blank'} href={href ?? '#'}>
            {icon && renderIcon()}
            {title}
        </a>
    );
};

export default ButtonLink;
