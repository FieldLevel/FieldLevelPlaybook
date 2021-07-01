import React, { Children } from 'react';
import cx from 'classnames';

import styles from './Stack.module.css';

interface ItemProps {
    fill?: boolean;
    children?: React.ReactNode;
}

const Item = ({ fill = false, children }: ItemProps) => {
    const className = cx(styles.Item, fill && styles.itemFill);
    return <div className={className}>{children}</div>;
};

type spacing = 'none' | 'tight' | 'loose';

type align = 'start' | 'center' | 'end';

type distribute = 'start' | 'center' | 'end' | 'between' | 'fill';

export interface StackProps {
    spacing?: spacing;
    align?: align;
    distribute?: distribute;
    vertical?: boolean;
    full?: boolean;
    noWrap?: boolean;
    children?: React.ReactNode;
}

const spacingStyles: { [s in spacing]: string } = {
    none: styles.spaceNone,
    tight: styles.spaceTight,
    loose: styles.spaceLoose
};

const alignStyles: { [s in align]: string } = {
    start: styles.alignStart,
    center: styles.alignCenter,
    end: styles.alignEnd
};

const distributeStyles: { [s in distribute]: string } = {
    start: styles.distributeStart,
    end: styles.distributeEnd,
    center: styles.distributeCenter,
    between: styles.distributeBetween,
    fill: styles.distributeFill
};

interface StackChildren {
    Item?: typeof Item;
}

export const Stack = ({ spacing, align, distribute, vertical, noWrap, full, children }: StackProps & StackChildren) => {
    const className = cx(
        styles.Stack,
        spacing && spacingStyles[spacing],
        align && alignStyles[align],
        distribute && distributeStyles[distribute],
        vertical && styles.vertical,
        noWrap && styles.noWrap,
        full && styles.full
    );

    const content = Children.map(children, (child) => {
        if (child === null || child === undefined) {
            return null;
        }

        if (!React.isValidElement<React.ReactNode>(child)) {
            return <Item>{child}</Item>;
        }

        if (child.type === Item) {
            return child;
        }
        return <Item>{child}</Item>;
    });

    return <div className={className}>{content}</div>;
};

Stack.Item = Item;
