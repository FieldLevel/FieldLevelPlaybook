import React, { ForwardedRef } from 'react';
import cx from 'classnames';

import * as styles from './Link.module.css';

export interface LinkProps {
    url?: string;
    /**
     * @deprecated Use target instead
     */
    external?: boolean;
    target?: string;
    unstyled?: boolean;
    fullWidth?: boolean;
    classNames?: string;
    children?: React.ReactNode;
    onClick?(e?: React.MouseEvent<HTMLAnchorElement>): void;
}

export const Link = React.forwardRef(
    (
        { url, target, external, unstyled, fullWidth, classNames, children, onClick }: LinkProps,
        ref: ForwardedRef<HTMLAnchorElement>
    ) => {
        const targetValue = target || (external ? '_blank' : '');
        const rel = targetValue == '_blank' ? 'noopener noreferrer' : '';
        const style = cx(unstyled && styles.unstyled, fullWidth && styles.fullWidth, classNames);

        if (external) {
            console.warn(`Link :: The external prop has been deprecated. Use target instead.`);
        }

        return (
            <a href={url} target={targetValue} rel={rel} className={style} onClick={onClick} ref={ref}>
                {children}
            </a>
        );
    }
);

Link.displayName = 'Link';
