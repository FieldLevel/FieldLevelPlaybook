import React, { Children } from 'react';

import { Heading } from '../Heading';
import { Subheading } from '../Subheading';

import styles from './Card.module.css';

const Title = ({ title }: { title: string }) => {
    return (
        <div className={styles.Title}>
            <Heading>{title}</Heading>
        </div>
    );
};

const SectionTitle = ({ title }: { title: string }) => {
    return (
        <div className={styles.SectionTitle}>
            <Subheading>{title}</Subheading>
        </div>
    );
};

interface SectionProps {
    title?: string;
    children?: React.ReactNode;
}

const Section = ({ title, children }: SectionProps) => {
    const titleContent = title && <SectionTitle title={title} />;

    return (
        <div className={styles.Section}>
            {titleContent}
            {children}
        </div>
    );
};

export interface CardProps {
    title?: string;
    children?: React.ReactNode;
}

interface CardChildren {
    Section?: typeof Section;
}

export const Card = ({ title, children }: CardProps & CardChildren) => {
    const titleContent = title && <Title title={title} />;

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
            {titleContent}
            {content}
        </div>
    );
};

Card.Section = Section;
