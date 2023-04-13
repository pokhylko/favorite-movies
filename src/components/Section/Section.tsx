import {FC, ReactNode} from "react";
import cn from "classnames";

import styles from './Section.module.scss';

interface Props {
    className?: string;
    bottomSpace?: null | 'small' | 'medium' | 'large';
    children: ReactNode;
}

export const Section: FC<Props> = ({
                                       className,
                                       bottomSpace = null,
                                       children
                                   }) => <section
    className={cn(styles.section, {
        [styles['section--small-space']]: bottomSpace === 'small',
        [styles['section--large-space']]: bottomSpace === 'large',
        [styles['section--large-space']]: bottomSpace === 'large',
    }, className)}>
    {children}
</section>;
