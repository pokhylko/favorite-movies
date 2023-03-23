import React, { Dispatch, FC, ReactNode, SetStateAction } from 'react';

import styles from './Content.module.scss';

interface Props {
  children: ReactNode;
  setIsActive: Dispatch<SetStateAction<boolean>>;
}

export const Content: FC<Props> = ({ children, setIsActive }) => {
  const closeModal = () => {
    setIsActive(false);
  };

  return (
        <div className={styles.content}>
            {children}
            <button
                className={styles.content__close}
                type="button"
                onClick={closeModal}
            >
                <i className="bx bx-x"></i>
            </button>
        </div>
  );
};
