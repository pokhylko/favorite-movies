import {Link} from 'react-router-dom';

import {Container} from "../Container";

import {ReactComponent as Logo} from '../../images/logo.svg';

import bg from '../../images/footer-bg.jpg';

import styles from './Footer.module.scss';

export const Footer = () => (
    <div className={styles.footer} style={{backgroundImage: `url(${bg})`}}>
        <Container className={styles.footer__content}>
            <div className={styles.footer__logo}>
                <Link to="/">
                    <Logo className={styles.footer__logo_image}/>
                </Link>
            </div>
            <div className={styles.footer__menus}>
                <div className={styles.footer__menu}>
                    <Link to="/">Home</Link>
                    <Link to="/">Contact us</Link>
                    <Link to="/">Term of services</Link>
                    <Link to="/">About us</Link>
                </div>
                <div className={styles.footer__menu}>
                    <Link to="/">Live</Link>
                    <Link to="/">FAQ</Link>
                    <Link to="/">Premium</Link>
                    <Link to="/">Pravacy policy</Link>
                </div>
                <div className={styles.footer__menu}>
                    <Link to="/">You must watch</Link>
                    <Link to="/">Recent release</Link>
                    <Link to="/">Top IMDB</Link>
                </div>
            </div>
        </Container>
    </div>
);
