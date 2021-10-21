import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';

import './Header.scss';

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
  const { pathname } = useLocation();
  const headerRef = useRef(null);

  const active = HEADER_NAV.findIndex((e) => e.path === pathname);

  useEffect(() => {
    const shrinkHeader = () => {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        headerRef.current.classList.add('header--shrink');
      } else {
        headerRef.current.classList.remove('header--shrink');
      }
    };

    window.addEventListener('scroll', shrinkHeader);

    return () => {
      window.removeEventListener('scroll', shrinkHeader);
    };
  }, []);

  return (
    <div className="header" ref={headerRef}>
      <div className="header__wrapper container">
        <div className="header__logo">
          <Link to="/">Logo</Link>
        </div>

        <nav className="header__nav">
          <ul className="header__nav-list">
            {HEADER_NAV.map(({ display, path }, i) => (
              <li
                className={cn('header__nav-item', {
                  'header__nav-item--active': i === active,
                })}
                key={path}
              >
                <Link to={path}>{display}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};
