import {FC, ReactNode} from "react";
import {Typography} from "@mui/material";

import styles from './SectionTitle.module.scss';

interface Props {
    children: ReactNode;
}

export const SectionTitle: FC<Props> = ({children}) => (
    <Typography className={styles.section_title} variant="h3" component="h3" gutterBottom>{children}</Typography>
)
