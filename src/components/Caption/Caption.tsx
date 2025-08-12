import React from 'react';
import cx from 'classnames';

import * as styles from './Caption.module.css';

export interface CaptionProps {
    classNames?: string;
    children?: React.ReactNode;
}

export const Caption = ({ classNames, children }: CaptionProps) => {
    return <p className={cx(styles.Caption, classNames)}>{children}</p>;
};
