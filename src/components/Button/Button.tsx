import {FC, MouseEventHandler, ReactNode} from 'react';
import cn from 'classnames';

import './Button.scss';

export interface Props {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    children: ReactNode;
    size?: 'default' | 'small';
    type?: "button" | "submit" | "reset";
    variant?: 'primary' | 'outline';
    className?: string;
}

export const Button: FC<Props> = ({
                                      children,
                                      size = 'default',
                                      type = 'button',
                                      variant = 'primary',
                                      className = '',
                                      ...props
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
        type={type}
        {...props}
    >
        {children}
    </button>
);
