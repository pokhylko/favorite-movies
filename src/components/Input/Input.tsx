import React, { ChangeEventHandler, FC, HTMLInputTypeAttribute } from 'react';

import styles from './Input.module.scss';

interface Props {
  type: HTMLInputTypeAttribute,
  placeholder: string,
  value: string | number | undefined,
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined
}

export const Input: FC<Props> = ({
  type, placeholder, value, onChange,
}) => (
  <input
    className={styles.input}
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);
