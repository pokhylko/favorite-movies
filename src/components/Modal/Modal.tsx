import React, { FC, ReactNode, useEffect, useState } from 'react';
import cn from 'classnames';

import { Content } from './components/Content';

import styles from './Modal.module.scss';

interface Props {
  children: ReactNode;
  id: string;
  isActive?: boolean;
}

export const Modal: FC<Props> = ({ children, id, isActive = false }) => {
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
            <Content setIsActive={setIsActiveModal}>{children}</Content>
        </div>
  );
};
