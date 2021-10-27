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

const NativeLazyImage = ({ src, alt, width, height, lazy }: LazyImageProps) => {
    return (
        <img
            loading={lazy ? 'lazy' : 'eager'}
            src={src}
            width={width}
            height={height}
            alt={alt}
            className={styles.Image}
            role="presentation"
        />
    );
};

const FallbackLazyImage = ({ src, alt, width, height }: LazyImageProps) => {
    const ratioPadding = (height / width) * 100;
    const { ref, inView } = useInView({
        rootMargin: '200px 0px',
        triggerOnce: true,
        skip: false
    });

    return (
        <div ref={ref} style={{ position: 'relative', paddingBottom: `${ratioPadding}%` }}>
            {inView ? (
                <img src={src} width={width} height={height} alt={alt} className={styles.Image} role="presentation" />
            ) : null}
        </div>
    );
};

export const LazyImage = ({ src, alt, width, height, lazy }: LazyImageProps) => {
    const supportsLazyLoading = HTMLImageElement.prototype.hasOwnProperty('loading');

    return (
        <>
            {supportsLazyLoading && false ? (
                <NativeLazyImage lazy={lazy} src={src} alt={alt} height={height} width={width} />
            ) : (
                <FallbackLazyImage src={src} alt={alt} height={height} width={width} />
            )}
        </>
    );
};
