import React from 'react';
import cx from 'classnames';

import styles from './Avatar.module.css';

type size = 'small' | 'large';

export interface AvatarProps {
    source?: string;
    size?: size;
    alt?: string;
}

const sizeStyles: { [key in size]: string } = {
    small: styles.small,
    large: styles.large
};

export const Avatar = ({ source, size, alt }: AvatarProps) => {
    const avatarStyle = cx(styles.Avatar, size && sizeStyles[size]);

    return (
        <span role="img" className={avatarStyle}>
            <img src={source} className={styles.Image} alt={alt} role="presentation" />
        </span>
    );
};
