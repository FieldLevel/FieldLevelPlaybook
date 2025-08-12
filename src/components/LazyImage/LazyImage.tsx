import React from 'react';
import { useInView } from 'react-intersection-observer';
import * as styles from './LazyImage.module.css';
import cx from 'classnames';

export interface LazyImageProps {
    src: string;
    srcSet?: string;
    alt?: string;
    title?: string;
    width: number;
    height: number;
    cover?: boolean;
    classNames?: string;
}

const getImageAttributes = (width: number, height: number, cover?: boolean) => {
    const ratioPadding = (height / width) * 100;
    const wrapperStyle = { position: 'relative', paddingBottom: `${ratioPadding}%` } as React.CSSProperties;
    const coverStyle = cover ? styles.cover : styles.contain;
    const classNames = cx(styles.Image, coverStyle);

    return { classNames, wrapperStyle };
};

const NativeImage = ({ src, srcSet, alt, title, width, height, cover, classNames }: LazyImageProps) => {
    const { classNames: baseClassNames, wrapperStyle } = getImageAttributes(width, height, cover);

    return (
        <div style={wrapperStyle}>
            <img
                loading="lazy"
                src={src}
                srcSet={srcSet}
                width={width}
                height={height}
                alt={alt}
                title={title}
                className={cx(baseClassNames, classNames)}
                role={alt === '' ? 'presentation' : undefined}
            />
        </div>
    );
};

const FallbackImage = ({ src, srcSet, alt, title, width, height, cover, classNames }: LazyImageProps) => {
    const { classNames: baseClassNames, wrapperStyle } = getImageAttributes(width, height, cover);

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
                    srcSet={srcSet}
                    width={width}
                    height={height}
                    alt={alt}
                    title={title}
                    className={cx(baseClassNames, classNames)}
                    role={alt === '' ? 'presentation' : undefined}
                />
            ) : null}
        </div>
    );
};

export const LazyImage = ({ src, srcSet, alt, title, width, height, cover = false, classNames }: LazyImageProps) => {
    const supportsLazyLoading = HTMLImageElement.prototype.hasOwnProperty('loading');
    const finalAlt = alt ?? title;

    if (!width || !height) console.warn('LazyImage requires a height and width to function properly.');

    return (
        <>
            {supportsLazyLoading ? (
                <NativeImage
                    src={src}
                    srcSet={srcSet}
                    alt={finalAlt}
                    title={title}
                    height={height}
                    width={width}
                    cover={cover}
                    classNames={classNames}
                />
            ) : (
                <FallbackImage
                    src={src}
                    srcSet={srcSet}
                    alt={finalAlt}
                    title={title}
                    height={height}
                    width={width}
                    cover={cover}
                    classNames={classNames}
                />
            )}
        </>
    );
};
