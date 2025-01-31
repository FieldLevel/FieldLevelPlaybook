import React from 'react';

import * as styles from './Subheading.module.css';

export interface SubheadingProps {
    as?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    children?: React.ReactNode;
}

export const Subheading = ({ as: Element = 'h2', children }: SubheadingProps) => {
    return <Element className={styles.Subheading}>{children}</Element>;
};
