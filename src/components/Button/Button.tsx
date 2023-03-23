import React, { FC, ReactNode } from 'react';
import cn from 'classnames';

import './Button.scss';

interface Props {
  onClick: () => void | Promise<void>;
  children: ReactNode;
  size?: 'default' | 'small';
  variant?: 'primary' | 'outline';
  className?: string;
}

export const Button: FC<Props> = ({
  children,
  onClick,
  size = 'default',
  variant = 'primary',
  className = '',
}) => (
    <button
        className={cn(
          'button',
          {
            [`button--${variant}`]: variant,
            [`button--${size}`]: size !== 'default',
          },
          className,
        )}
        type="button"
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onClick={onClick}
    >
        {children}
    </button>
);
