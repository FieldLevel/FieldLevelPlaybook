import React from 'react';
import cx from 'classnames';
import { LazyImage } from '../LazyImage';

import * as styles from './Avatar.module.css';

type size = 'small' | 'large';
type pixelSize = size | 'base';

export interface AvatarProps {
    source: string;
    sourceSet?: string;
    size?: size;
    alt?: string;
    title?: string;
    lazy?: boolean;
    classNames?: string;
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

export const Avatar = ({ source, sourceSet, size, alt, title, lazy = false, classNames }: AvatarProps) => {
    const avatarStyle = cx(styles.Avatar, size && sizeStyles[size]);
    const pixelSize = size ?? 'base';
    const dimension = sizeInPixels[pixelSize];
    const finalAlt = alt ?? title;

    return (
        <span className={avatarStyle}>
            {lazy ? (
                <LazyImage
                    src={source}
                    srcSet={sourceSet}
                    height={dimension}
                    width={dimension}
                    alt={finalAlt}
                    title={title}
                    cover={true}
                    classNames={classNames}
                />
            ) : (
                <img
                    src={source}
                    srcSet={sourceSet}
                    height={dimension}
                    width={dimension}
                    alt={finalAlt}
                    title={title}
                    className={cx(styles.Image, classNames)}
                />
            )}
        </span>
    );
};
