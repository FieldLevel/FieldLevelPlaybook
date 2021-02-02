import React from 'react';
import cx from 'classnames';

import styles from './Title.module.css';

type size = 'small' | 'large' | 'extraLarge';

const sizeStyles: { [key in size]: string } = {
    small: styles.small,
    large: styles.large,
    extraLarge: styles.extraLarge
};

export interface TitleProps {
    as?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
    size?: size;
    children?: React.ReactNode;
}

export const Title = ({ as: Element = 'p', size, children }: TitleProps) => {
    const className = cx(styles.Title, size && sizeStyles[size]);
    return <Element className={className}>{children}</Element>;
};
