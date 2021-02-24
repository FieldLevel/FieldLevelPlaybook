import React from 'react';
import cx from 'classnames';

import styles from './ButtonGroup.module.css';

type spacing = 'tight' | 'loose';

export interface ButtonGroupProps {
    spacing?: spacing;
    children?: React.ReactNode;
}

const spacingStyles: { [key in spacing]: string } = {
    tight: styles.tight,
    loose: styles.loose
};

export const ButtonGroup = ({ spacing, children }: ButtonGroupProps) => {
    const className = cx(styles.ButtonGroup, spacing && spacingStyles[spacing]);

    return <div className={className}>{children}</div>;
};
