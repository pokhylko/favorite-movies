import {FC, ReactNode} from "react";
import cn from "classnames";

import styles from './Container.module.scss';

interface Props {
    className?: string;
    children: ReactNode;
}

export const Container: FC<Props> = ({className, children}) => (
    <div className={cn(styles.container, className)}>
        {children}
    </div>
);
