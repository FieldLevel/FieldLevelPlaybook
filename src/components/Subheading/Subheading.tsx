import React from 'react';
import cx from 'classnames';

import * as styles from './Subheading.module.css';

export interface SubheadingProps {
    as?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    classNames?: string;
    children?: React.ReactNode;
}

export const Subheading = ({ as: Element = 'h2', classNames, children }: SubheadingProps) => {
    return <Element className={cx(styles.Subheading, classNames)}>{children}</Element>;
};
