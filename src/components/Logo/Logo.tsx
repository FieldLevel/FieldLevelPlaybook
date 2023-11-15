import React from 'react';
import cx from 'classnames';
import { LazyImage } from '../LazyImage';

import styles from './Logo.module.css';

type size = 'small' | 'large';
type pixelSize = size | 'base';

export interface LogoProps {
    source: string;
    sourceSet?: string;
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

export const Logo = ({ source, sourceSet, size, alt, title, lazy = false }: LogoProps) => {
    const logoStyle = cx(styles.Logo, size && sizeStyles[size]);
    const pixelSize = size ?? 'base';
    const dimension = sizeInPixels[pixelSize];
    const finalAlt = alt ?? title;

    return (
        <span className={logoStyle}>
            {lazy ? (
                <LazyImage
                    src={source}
                    srcSet={sourceSet}
                    height={dimension}
                    width={dimension}
                    alt={finalAlt}
                    title={title}
                    cover={false}
                />
            ) : (
                <img
                    src={source}
                    srcSet={sourceSet}
                    height={dimension}
                    width={dimension}
                    alt={finalAlt}
                    title={title}
                    className={styles.Image}
                />
            )}
        </span>
    );
};
