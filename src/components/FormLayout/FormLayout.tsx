import React, { Children } from 'react';

import styles from './FormLayout.module.css';

interface ItemProps {
    children?: React.ReactNode;
}

const Item = ({ children }: ItemProps) => {
    return <div className={styles.Item}>{children}</div>;
};

interface GroupProps {
    children?: React.ReactNode;
}

const Group = ({ children }: GroupProps) => {
    const itemsContent = Children.map(children, (child) => <Item>{child}</Item>);
    return <div className={styles.Items}>{itemsContent}</div>;
};

export interface FormLayoutProps {
    children?: React.ReactNode;
}

interface FormLayoutChildren {
    Group?: typeof Group;
}

export const FormLayout = ({ children }: FormLayoutProps & FormLayoutChildren) => {
    const content = Children.map(children, (child) => {
        if (!React.isValidElement<React.ReactNode>(child)) {
            return null;
        }
        if (child.type === Group) {
            return child;
        }
        return <Item>{child}</Item>;
    });

    return <div className={styles.FormLayout}>{content}</div>;
};

FormLayout.Group = Group;
