import React from 'react';
import { NavLink as Link } from 'react-router-dom';

export interface MenuItemProps {
    title: string;
    link: string;
    onClick: () => void;
}

export const MenuItem: React.FC<MenuItemProps> = ({ title, onClick, link }) => {
    return (
        <li className="nav__item">
            <Link onClick={onClick} to={link}>
                {title}
            </Link>
        </li>
    );
};

export default MenuItem;
