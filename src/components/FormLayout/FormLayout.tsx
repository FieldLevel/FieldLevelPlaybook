import React, { Children } from 'react';
import cx from 'classnames';

import styles from './FormLayout.module.css';

type Size = 'oneThird' | 'oneHalf' | 'twoThirds' | 'full';
interface ItemProps {
    size: Size;
    empty?: boolean;
    children?: React.ReactNode;
}

const sizeStyles: { [key in Size]: string } = {
    oneThird: styles.oneThird,
    oneHalf: styles.oneHalf,
    twoThirds: styles.twoThirds,
    full: ''
};

const Item = ({ size, empty, children }: ItemProps) => {
    const className = cx(styles.Item, size && sizeStyles[size], empty && styles.empty);
    return <div className={className}>{children}</div>;
};

type RowChildren = React.ReactElement<ItemProps> | React.ReactElement<ItemProps>[];
interface RowProps {
    children: RowChildren;
}

const sizeSpanMap: { [key in Size]: number } = {
    oneThird: 2,
    oneHalf: 3,
    twoThirds: 4,
    full: 6
};

// FormLayout.Row can have Items that are smaller than full width. In order to keep the grid intact,
// we figure out what size Item is needed to fill in the empty space and add an empty filler Item.
const getRowFill = (children: RowChildren): JSX.Element | null => {
    const itemSpans = Children.map(children, (child: React.ReactElement<ItemProps>) => {
        return child.props.size ? sizeSpanMap[child.props.size] : 0;
    });
    const totalSpan = itemSpans.reduce((total: number, span: number) => total + span);
    switch (totalSpan) {
        case 0:
        case 6:
            return null;
        case 2:
            return <Item size="twoThirds" empty />;
        case 3:
            return <Item size="oneHalf" empty />;
        case 4:
            return <Item size="oneThird" empty />;
        default:
            console.error('FormLayout.Row has an invalid combination of Item sizes.');
            return null;
    }
};

// Form elements can be placed directly in a FormLayout.Row without needing to explicitly wrap them
// in a FormLayout.Item. In that case we wrap each element in an Item and size them evenly.
const getEvenSize = (children: RowChildren): Size => {
    const itemCount = Children.count(children);
    switch (itemCount) {
        case 1:
            return 'full';
        case 2:
            return 'oneHalf';
        case 3:
            return 'oneThird';
        default:
            console.error('FormLayout.Row cannot have more than 3 Items.');
            return 'full';
    }
};

const Row = ({ children }: RowProps) => {
    const rowFill = getRowFill(children);
    const evenSize = getEvenSize(children);

    const itemsContent = Children.map(children, (child) => {
        if (child.type === Item) {
            return child;
        }
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
        if (child.type === Row) {
            return child;
        }
        return <Item size="full">{child}</Item>;
    });

    return <div className={styles.FormLayout}>{content}</div>;
};

FormLayout.Row = Row;
FormLayout.Item = Item;
