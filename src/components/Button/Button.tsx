import React, { FC, ReactNode } from 'react';
import cn from 'classnames';

import styles from './Button.module.scss';

interface Props {
  onClick: () => void | Promise<void>,
  children: ReactNode,
  size?: 'default' | 'small',
  variant?: 'primary' | 'outline'
  className?: string,
}

export const Button: FC<Props> = ({
  children, onClick, size = 'default', variant = 'primary', className = '',
}) => (
  <button
    className={cn(styles.button, {
      [styles[`button--${variant}`]]: variant,
      [styles[`button--${size}`]]: size !== 'default',
    }, className)}
    type="button"
    onClick={onClick}
  >
    {children}
  </button>
);
