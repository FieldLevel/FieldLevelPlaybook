import React from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './Image.module.css';
import cx from 'classnames';

export interface ImageProps {
    src: string;
    alt?: string;
    width: number;
    height: number;
    lazy?: boolean;
    cover?: boolean;
    className: string;
}

const NativeImage = ({ src, alt, width, height, lazy, className }: ImageProps) => {
    return (
        <img
            loading={lazy ? 'lazy' : 'eager'}
            src={src}
            width={width}
            height={height}
            alt={alt}
            className={className}
            role="presentation"
        />
    );
};

const FallbackImage = ({ src, alt, width, height, className }: ImageProps) => {
    const ratioPadding = (height / width) * 100;
    const { ref, inView } = useInView({
        rootMargin: '200px 0px',
        triggerOnce: true,
        skip: false
    });

    return (
        <div ref={ref} style={{ position: 'relative', paddingBottom: `${ratioPadding}%` }}>
            {inView ? (
                <img src={src} width={width} height={height} alt={alt} className={className} role="presentation" />
            ) : null}
        </div>
    );
};

export const Image = ({ src, alt, width, height, lazy = false, cover = true }: ImageProps) => {
    const supportsLazyLoading = HTMLImageElement.prototype.hasOwnProperty('loading');
    const fitClass = cover ? styles.Cover : styles.Contain;
    const className = cx(styles.Image, fitClass);
    const useFallbackImage = lazy && !supportsLazyLoading;

    return (
        <>
            {useFallbackImage ? (
                <FallbackImage src={src} alt={alt} height={height} width={width} cover={cover} className={className} />
            ) : (
                <NativeImage
                    lazy={lazy}
                    src={src}
                    alt={alt}
                    height={height}
                    width={width}
                    cover={cover}
                    className={className}
                />
            )}
        </>
    );
};
