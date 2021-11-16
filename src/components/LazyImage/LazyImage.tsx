import React from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './LazyImage.module.css';
import cx from 'classnames';

export interface LazyImageProps {
    src: string;
    alt?: string;
    title?: string;
    width: number;
    height: number;
    cover?: boolean;
}

const getImageAttributes = (width: number, height: number, cover?: boolean) => {
    const ratioPadding = (height / width) * 100;
    const wrapperStyle = { position: 'relative', paddingBottom: `${ratioPadding}%` } as React.CSSProperties;
    const coverStyle = cover ? styles.cover : styles.contain;
    const classNames = cx(styles.Image, coverStyle);

    return { classNames, wrapperStyle };
};

const NativeImage = ({ src, alt, title, width, height, cover }: LazyImageProps) => {
    const { classNames, wrapperStyle } = getImageAttributes(width, height, cover);

    return (
        <div style={wrapperStyle}>
            <img
                loading="lazy"
                src={src}
                width={width}
                height={height}
                alt={alt}
                title={title}
                className={classNames}
                role="presentation"
            />
        </div>
    );
};

const FallbackImage = ({ src, alt, title, width, height, cover }: LazyImageProps) => {
    const { classNames, wrapperStyle } = getImageAttributes(width, height, cover);

    const { ref, inView } = useInView({
        rootMargin: '200px 0px',
        triggerOnce: true,
        skip: false
    });

    return (
        <div ref={ref} style={wrapperStyle}>
            {inView ? (
                <img
                    src={src}
                    width={width}
                    height={height}
                    alt={alt}
                    title={title}
                    className={classNames}
                    role="presentation"
                />
            ) : null}
        </div>
    );
};

export const LazyImage = ({ src, alt, title, width, height, cover = false }: LazyImageProps) => {
    const supportsLazyLoading = HTMLImageElement.prototype.hasOwnProperty('loading');

    if (!width || !height) console.warn('LazyImage requires a height and width to function properly.');

    return (
        <>
            {supportsLazyLoading ? (
                <NativeImage src={src} alt={alt} title={title} height={height} width={width} cover={cover} />
            ) : (
                <FallbackImage src={src} alt={alt} title={title} height={height} width={width} cover={cover} />
            )}
        </>
    );
};
