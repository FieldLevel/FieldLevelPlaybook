import React, { Children } from 'react';
import cx from 'classnames';

import styles from './ButtonGroup.module.css';

interface ItemProps {
    children?: React.ReactNode;
}

const Item = ({ children }: ItemProps) => {
    return <div className={styles.Item}>{children}</div>;
};

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
    const content = Children.map(children, (child) => <Item>{child}</Item>);

    return <div className={className}>{content}</div>;
};
