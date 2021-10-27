import React from 'react';
import cx from 'classnames';
import { Image } from '../Image';

import styles from './Avatar.module.css';

type size = 'small' | 'large';
type pixelSize = size | 'base';

export interface AvatarProps {
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

export const Avatar = ({ source, size, alt, lazy }: AvatarProps) => {
    const avatarStyle = cx(styles.Avatar, size && sizeStyles[size]);
    const pixelSize = size ?? 'base';
    const dimension = sizeInPixels[pixelSize];

    return (
        <span role="img" className={avatarStyle}>
            <Image src={source} height={dimension} width={dimension} alt={alt} lazy={lazy} />
        </span>
    );
};
