import React from 'react';

import * as styles from './Caption.module.css';

export interface CaptionProps {
    children?: React.ReactNode;
}

export const Caption = ({ children }: CaptionProps) => {
    return <p className={styles.Caption}>{children}</p>;
};
