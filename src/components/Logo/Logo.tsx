import React from 'react';
import cx from 'classnames';

import styles from './Logo.module.css';

type size = 'small' | 'large';

export interface LogoProps {
    source?: string;
    size?: size;
}

const sizeStyles: { [key in size]: string } = {
    small: styles.small,
    large: styles.large
};

export const Logo = ({ source, size }: LogoProps) => {
    const logoStyle = cx(styles.Logo, size && sizeStyles[size]);

    return (
        <span role="img" className={logoStyle}>
            <img src={source} className={styles.Image} role="presentation" />
        </span>
    );
};
