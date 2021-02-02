import React, { Children } from 'react';

import { Heading } from '../Heading';

import styles from './Card.module.css';

interface HeaderProps {
    title: React.ReactNode;
}

const Header = ({ title }: HeaderProps) => {
    return (
        <div className={styles.Header}>
            <Heading>{title}</Heading>
        </div>
    );
};

interface SectionProps {
    children?: React.ReactNode;
}

const Section = ({ children }: SectionProps) => {
    return <div className={styles.Section}>{children}</div>;
};

export interface CardProps {
    title?: React.ReactNode;
    children?: React.ReactNode;
}

interface CardChildren {
    Header?: typeof Header;
    Section?: typeof Children;
}

export const Card = ({ title, children }: CardProps & CardChildren) => {
    const headerMarkup = title ? <Header title={title} /> : null;

    const content = Children.map(children, (child) => {
        if (!React.isValidElement<React.ReactNode>(child)) {
            return <Section>{child}</Section>;
        }
        if (child.type === Section) {
            return child;
        }
        return <Section>{child}</Section>;
    });

    return (
        <div className={styles.Card}>
            {headerMarkup}
            {content}
        </div>
    );
};

Card.Header = Header;
Card.Section = Section;
