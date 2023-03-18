import React from 'react';

import styles from './PageHeader.module.scss';

import bg from '../../images/footer-bg.jpg';

export const PageHeader = ({ children }) => (
  <div className={styles.page_header} style={{ backgroundImage: `url(${bg})` }}>
    <h1 className={styles.page_header__title}>{children}</h1>
  </div>
);
