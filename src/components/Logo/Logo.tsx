import React from 'react';
import cx from 'classnames';
import { LazyImage } from '../LazyImage';

import styles from './Logo.module.css';

type size = 'small' | 'large';
type pixelSize = size | 'base';

export interface LogoProps {
    source: string;
    size?: size;
    alt?: string;
    title?: string;
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

export const Logo = ({ source, size, alt, title, lazy = false }: LogoProps) => {
    const logoStyle = cx(styles.Logo, size && sizeStyles[size]);
    const pixelSize = size ?? 'base';
    const dimension = sizeInPixels[pixelSize];

    return (
        <span role="img" className={logoStyle}>
            {lazy ? (
                <LazyImage src={source} height={dimension} width={dimension} alt={alt} title={title} cover={false} />
            ) : (
                <img
                    src={source}
                    height={dimension}
                    width={dimension}
                    alt={alt}
                    title={title}
                    className={styles.Image}
                />
            )}
        </span>
    );
};
