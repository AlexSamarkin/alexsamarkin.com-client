import React from 'react';

export interface HamburgerProps {
    onClick: () => void;
    isOpen: boolean;
}

export const Hamburger: React.FC<HamburgerProps> = ({ onClick, isOpen }) => {
    const classNames = `hamburger ${isOpen ? 'is-active' : ''}`;
    return (
        <div className="circle-menu">
            <div className={classNames} onClick={onClick}>
                <div className="line" />
                <div className="line" />
                <div className="line" />
            </div>
        </div>
    );
};

export default Hamburger;
