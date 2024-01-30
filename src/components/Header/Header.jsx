import React from 'react';
import s from './style.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className={s.header}>
            <div className='container'>
                <nav>
                    <ul className={s.header_list}>
                        <li className={s.header_item}>
                            <NavLink
                                to={'/frontend-challenge/'}
                                className={({ isActive }) => [s.nav_link, isActive ? s.active : ''].join(' ')}
                            >
                                Все котики
                            </NavLink>
                        </li>
                        <li className={s.header_item}>
                            <NavLink
                                to={'/frontend-challenge/favorite'}
                                className={({ isActive }) => [s.nav_link, isActive ? s.active : ''].join(' ')}
                            >
                                Любимые котики
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;
