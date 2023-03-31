import {FC, ReactNode} from "react";
import cn from "classnames";

import styles from './Container.module.scss';

interface Props {
    title?: string;
    className?: string;
    children: ReactNode;
}

export const Container: FC<Props> = ({title, className, children}) => <div className={cn(styles.container, className)}>
    {title && <h2 className={styles.container__title}>{title}</h2>}

    {children}
</div>;
