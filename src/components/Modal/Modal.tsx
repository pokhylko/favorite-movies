import React, { useEffect, useState } from 'react';
import cn from 'classnames';

import { Content } from './components/Content';

import styles from './Modal.module.scss';

export const Modal = ({ children, id, isActive = false }) => {
  const [isActiveModal, setIsActiveModal] = useState(false);

  useEffect(() => {
    setIsActiveModal(isActive);
  }, [isActive]);

  return (
    <div
      className={cn(styles.modal, {
        [styles['modal--active']]: isActiveModal,
      })}
      id={id}
    >
      <Content setIsActive={setIsActiveModal}>
        {children}
      </Content>
    </div>
  );
};
