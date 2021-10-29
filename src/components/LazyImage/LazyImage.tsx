import React from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './LazyImage.module.css';
import cx from 'classnames';

export interface LazyImageProps {
    src: string;
    alt?: string;
    width: number;
    height: number;
    cover?: boolean;
    className?: string;
}

const NativeImage = ({ src, alt, width, height, className }: LazyImageProps) => {
    const classNames = cx(styles.Image, className);

    return (
        <div style={{ position: 'relative' }}>
            <img
                loading="lazy"
                src={src}
                width={width}
                height={height}
                alt={alt}
                className={classNames}
                role="presentation"
            />
        </div>
    );
};

const FallbackImage = ({ src, alt, width, height, className }: LazyImageProps) => {
    const classNames = cx(styles.Image, className);
    const ratioPadding = (height / width) * 100;
    const { ref, inView } = useInView({
        rootMargin: '200px 0px',
        triggerOnce: true,
        skip: false
    });

    return (
        <div ref={ref} style={{ position: 'relative', paddingBottom: `${ratioPadding}%` }}>
            {inView ? (
                <img src={src} width={width} height={height} alt={alt} className={classNames} role="presentation" />
            ) : null}
        </div>
    );
};

export const LazyImage = ({ src, alt, width, height, cover = false }: LazyImageProps) => {
    const supportsLazyLoading = HTMLImageElement.prototype.hasOwnProperty('loading');
    const className = cover ? styles.Cover : styles.Contain;

    if (!width || !height) console.warn('LazyImage requires a height and width to function properly.');

    return (
        <>
            {supportsLazyLoading ? (
                <NativeImage src={src} alt={alt} height={height} width={width} cover={cover} className={className} />
            ) : (
                <FallbackImage src={src} alt={alt} height={height} width={width} cover={cover} className={className} />
            )}
        </>
    );
};
