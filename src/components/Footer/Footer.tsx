import React from 'react';
import cn from 'classnames';

import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../images/logo.svg';

import bg from '../../images/footer-bg.jpg';

import style from './Footer.module.scss';

export const Footer = () => (
  <div className={style.footer} style={{ backgroundImage: `url(${bg})` }}>
    <div className={cn(style.footer__content, 'container')}>
      <div className={style.footer__logo}>
        <Link to="/">
          <Logo className={style.footer__logo_image} />
        </Link>
      </div>
      <div className={style.footer__menus}>
        <div className={style.footer__menu}>
          <Link to="/">Home</Link>
          <Link to="/">Contact us</Link>
          <Link to="/">Term of services</Link>
          <Link to="/">About us</Link>
        </div>
        <div className={style.footer__menu}>
          <Link to="/">Live</Link>
          <Link to="/">FAQ</Link>
          <Link to="/">Premium</Link>
          <Link to="/">Pravacy policy</Link>
        </div>
        <div className={style.footer__menu}>
          <Link to="/">You must watch</Link>
          <Link to="/">Recent release</Link>
          <Link to="/">Top IMDB</Link>
        </div>
      </div>
    </div>
  </div>
);
