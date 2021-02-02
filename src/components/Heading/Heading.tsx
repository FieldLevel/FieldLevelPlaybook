import React from 'react';

import styles from './Heading.module.css';

export interface HeadingProps {
    as?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    children?: React.ReactNode;
}

export const Heading = ({ as: Element = 'h2', children }: HeadingProps) => {
    return <Element className={styles.Heading}>{children}</Element>;
};
