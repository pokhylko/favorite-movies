import {useEffect, useRef} from 'react';
import {Link, useLocation} from 'react-router-dom';
import cn from 'classnames';

import {Container} from "../Container";

import {ReactComponent as Logo} from '../../images/logo.svg';

import styles from './Header.module.scss';

const HEADER_NAV = [
    {
        display: 'Home',
        path: '/',
    },
    {
        display: 'Movies',
        path: '/movie',
    },
    {
        display: 'TV Series',
        path: '/tv',
    },
];

export const Header = () => {
    const {pathname} = useLocation();
    const headerRef = useRef<HTMLInputElement>(null);

    const active = HEADER_NAV.findIndex((e) => e.path === pathname);

    useEffect(() => {
        const shrinkHeader = () => {
            if (
                document.body.scrollTop > 100 ||
                document.documentElement.scrollTop > 100
            ) {
                headerRef.current?.classList.add(styles['header--shrink']);
            } else {
                headerRef.current?.classList.remove(styles['header--shrink']);
            }
        };

        window.addEventListener('scroll', shrinkHeader);

        return () => {
            window.removeEventListener('scroll', shrinkHeader);
        };
    }, []);

    return (
        <div className={styles.header} ref={headerRef}>
            <Container className={styles.header__wrapper}>
                <Link to="/">
                    <Logo className={styles.header__logo}/>
                </Link>

                <nav>
                    <ul className={styles.header__nav_list}>
                        {HEADER_NAV.map(({display, path}, i) => (
                            <li
                                className={cn(styles.header__nav_item, {
                                    [styles['header__nav_item--active']]: i === active,
                                })}
                                key={path}
                            >
                                <Link to={path}>{display}</Link>
                            </li>
                        ))}

                        <li
                            className={cn(styles.header__nav_item, {
                                [styles['header__nav_item--active']]: pathname === '/login',
                            })}
                        >
                            <Link to='/login'>Login</Link>
                        </li>
                    </ul>
                </nav>
            </Container>
        </div>
    );
};
