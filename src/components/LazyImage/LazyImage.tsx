import React from 'react';
import { useInView } from 'react-intersection-observer';

import styles from './LazyImage.module.css';
export interface LazyImageProps {
    src?: string;
    alt?: string;
    width: number;
    height: number;
    lazy?: boolean;
}

export const LazyImage = ({ src, alt, width, height, lazy }: LazyImageProps) => {
    const ratioPadding = (height / width) * 100;
    const supportsLazyLoading = HTMLImageElement.prototype.hasOwnProperty('loading');
    const { ref, inView } = useInView({
        rootMargin: '200px 0px',
        triggerOnce: true,
        skip: supportsLazyLoading !== false
    });

    return (
        <div ref={ref} style={{ position: 'relative', paddingBottom: `${ratioPadding}%` }}>
            {inView || supportsLazyLoading ? (
                <img
                    loading={lazy ? 'lazy' : 'eager'}
                    src={src}
                    width={width}
                    height={height}
                    alt={alt}
                    className={styles.Image}
                    role="presentation"
                />
            ) : null}
        </div>
    );
};
