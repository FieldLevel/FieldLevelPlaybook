import React from 'react';
import cx from 'classnames';
import { LazyImage } from '../LazyImage';

import styles from './Avatar.module.css';

type size = 'small' | 'large';
type pixelSize = size | 'base';

export interface AvatarProps {
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

export const Avatar = ({ source, size, alt, title, lazy = false }: AvatarProps) => {
    const avatarStyle = cx(styles.Avatar, size && sizeStyles[size]);
    const pixelSize = size ?? 'base';
    const dimension = sizeInPixels[pixelSize];

    return (
        <span role="img" className={avatarStyle}>
            {lazy ? (
                <LazyImage src={source} height={dimension} width={dimension} alt={alt} title={title} cover={true} />
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
