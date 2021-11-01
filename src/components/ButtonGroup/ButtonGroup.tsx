import React from 'react';
import cx from 'classnames';

import styles from './ButtonGroup.module.css';

type spacing = 'tight' | 'loose';

type distribute = 'end' | 'between';

export interface ButtonGroupProps {
    spacing?: spacing;
    distribute?: distribute;
    children?: React.ReactNode;
}

const spacingStyles: { [key in spacing]: string } = {
    tight: styles.tight,
    loose: styles.loose
};

const distributeStyles: { [key in distribute]: string } = {
    end: styles.end,
    between: styles.between
};

export const ButtonGroup = ({ spacing, distribute, children }: ButtonGroupProps) => {
    const className = cx(
        styles.ButtonGroup,
        spacing && spacingStyles[spacing],
        distribute && distributeStyles[distribute]
    );

    return <div className={className}>{children}</div>;
};
