import React from 'react';
import cx from 'classnames';
import { Image } from '../Image';

import styles from './Logo.module.css';

type size = 'small' | 'large';
type pixelSize = size | 'base';

export interface LogoProps {
    source?: string;
    size?: size;
    alt?: string;
    lazy?: boolean;
}

const sizeStyles: { [key in size]: string } = {
    small: styles.small,
    large: styles.large
};

const sizeInPixels: { [key in pixelSize]: number } = {
    small: 20,
    base: 40,
    large: 60
};

export const Logo = ({ source, size, alt, lazy }: LogoProps) => {
    const logoStyle = cx(styles.Logo, size && sizeStyles[size]);
    const pixelSize = size ?? 'base';
    const dimension = sizeInPixels[pixelSize];

    return (
        <span role="img" className={logoStyle}>
            <Image src={source} height={dimension} width={dimension} alt={alt} lazy={lazy} />
        </span>
    );
};
