import React, { useCallback, useEffect, useState } from 'react';
import Hamburger from '../Hamburger/Hamburger';
import { NavItem } from '../../types';
import MenuItem from './MenuItem';

export interface MenuStateProps {
    items: NavItem[];
}

export type MenuProps = MenuStateProps;

export const Menu: React.FC<MenuProps> = (props) => {
    const { items } = props;
    const [active, setActive] = useState<boolean>(false);

    const handleHamburgerClick = useCallback(() => {
        setActive(!active);
    }, [active, setActive]);

    useEffect(() => {
        if (active) {
            document.body.classList.add('open-menu');
        }

        return () => {
            document.body.classList.remove('open-menu');
        };
    }, [active]);

    const handleClick = () => {
        setActive(false);
    };

    const classNames = `inner-menu js-menu js-tabs ${active ? 'is-active' : ''}`;
    const navClassnames = `nav ${active && 'open'}`;

    return (
        <>
            <Hamburger isOpen={active} onClick={handleHamburgerClick} />
            <div className={classNames}>
                <ul className={navClassnames}>
                    {items &&
                        items.map((item: NavItem) => {
                            return (
                                <MenuItem key={item.link} title={item.title} link={item.link} onClick={handleClick} />
                            );
                        })}
                </ul>
            </div>
        </>
    );
};

export default Menu;
