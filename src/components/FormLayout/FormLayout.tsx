import React, { Children } from 'react';
import cx from 'classnames';

import styles from './FormLayout.module.css';

type Size = 'oneSixth' | 'oneThird' | 'oneHalf' | 'twoThirds' | 'full';
interface ItemProps {
    size: Size;
    empty?: boolean;
    children?: React.ReactNode;
}

const sizeStyles: { [key in Size]: string } = {
    oneSixth: styles.oneSixth,
    oneThird: styles.oneThird,
    oneHalf: styles.oneHalf,
    twoThirds: styles.twoThirds,
    full: ''
};

const Item = ({ size, empty, children }: ItemProps) => {
    const className = cx(styles.Item, size && sizeStyles[size], empty && styles.empty);
    return <div className={className}>{children}</div>;
};

interface RowProps {
    children?: React.ReactNode;
}

const sizeSpanMap: { [key in Size]: number } = {
    oneSixth: 1,
    oneThird: 2,
    oneHalf: 3,
    twoThirds: 4,
    full: 6
};

// FormLayout.Row can have Items that are smaller than full width. In order to keep the grid intact,
// we figure out what size Item is needed to fill in the empty space and add an empty filler Item.
const getRowFill = (children?: React.ReactNode): React.ReactNode => {
    const itemSpans = Children.map(children, (child) => {
        const childEl = child as React.ReactElement<ItemProps>;
        return childEl.props.size ? sizeSpanMap[childEl.props.size] : 0;
    });
    const totalSpan = itemSpans && itemSpans.reduce((total: number, span: number) => total + span);
    switch (totalSpan) {
        case 0:
        case 6:
            return null;
        case 1:
            return (
                <>
                    <Item size="oneSixth" empty />
                    <Item size="twoThirds" empty />
                </>
            );
        case 2:
            return <Item size="twoThirds" empty />;
        case 3:
            return <Item size="oneHalf" empty />;
        case 4:
            return <Item size="oneThird" empty />;
        case 5:
            return <Item size="oneSixth" empty />;
        default:
            console.error('FormLayout.Row has an invalid combination of Item sizes.');
            return null;
    }
};

// Form elements can be placed directly in a FormLayout.Row without needing to explicitly wrap them
// in a FormLayout.Item. In that case we wrap each element in an Item and size them evenly.
const getEvenSize = (children?: React.ReactNode): Size => {
    const itemCount = Children.count(children);
    switch (itemCount) {
        case 1:
            return 'full';
        case 2:
            return 'oneHalf';
        case 3:
            return 'oneThird';
        case 4:
        case 5:
            console.error(`FormLayout.Row cannot evenly space ${itemCount} Items.`);
            return 'full';
        case 6:
            return 'oneSixth';
        default:
            console.error('FormLayout.Row cannot have more than 6 Items.');
            return 'full';
    }
};

const Row = ({ children }: RowProps) => {
    const filteredChildren = Children.toArray(children).filter((child) => {
        return child != null;
    });

    const rowFill = getRowFill(filteredChildren);

    const itemsContent = Children.map(filteredChildren, (child) => {
        const childEl = child as React.ReactElement<ItemProps>;
        if (childEl.type === Item) {
            return child;
        }
        const evenSize = getEvenSize(filteredChildren);
        return <Item size={evenSize}>{child}</Item>;
    });

    return (
        <>
            {itemsContent}
            {rowFill}
        </>
    );
};

export interface FormLayoutProps {
    children:
        | React.ReactElement<ItemProps>[]
        | React.ReactElement<ItemProps>
        | React.ReactElement<RowProps>[]
        | React.ReactElement<RowProps>;
}

interface FormLayoutChildren {
    Row?: typeof Row;
    Item?: typeof Item;
}

export const FormLayout = ({ children }: FormLayoutProps & FormLayoutChildren) => {
    const content = Children.map(children, (child) => {
        if (!child || child.type === Row) {
            return child;
        }
        return <Item size="full">{child}</Item>;
    });

    return <div className={styles.FormLayout}>{content}</div>;
};

FormLayout.Row = Row;
FormLayout.Item = Item;
