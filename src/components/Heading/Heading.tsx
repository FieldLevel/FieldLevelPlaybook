import React from 'react';
import cx from 'classnames';

import * as styles from './Heading.module.css';

export interface HeadingProps {
    as?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    classNames?: string;
    children?: React.ReactNode;
}

export const Heading = ({ as: Element = 'h2', classNames, children }: HeadingProps) => {
    return <Element className={cx(styles.Heading, classNames)}>{children}</Element>;
};
