import React from 'react';
import cx from 'classnames';

import styles from './Link.module.css';

export interface LinkProps {
    url?: string;
    /**
     * @deprecated Use target instead
     */
    external?: boolean;
    target?: string;
    unstyled?: boolean;
    fullWidth?: boolean;
    children?: React.ReactNode;
    onClick?(e?: React.MouseEvent<HTMLAnchorElement>): void;
}

export const Link = ({ url, target, external, unstyled, fullWidth, children, onClick }: LinkProps) => {
    const targetValue = target || (external ? '_blank' : '');
    const rel = targetValue == '_blank' ? 'noopener noreferrer' : '';
    const style = cx(unstyled && styles.unstyled, fullWidth && styles.fullWidth);

    if (external) {
        console.warn(`Link :: The external prop has been deprecated. Use target instead.`);
    }

    return (
        <a href={url} target={targetValue} rel={rel} className={style} onClick={onClick}>
            {children}
        </a>
    );
};
