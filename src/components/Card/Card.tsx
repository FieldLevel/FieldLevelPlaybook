import React, { Children } from 'react';
import cx from 'classnames';

import { Heading } from '../Heading';
import { Subheading } from '../Subheading';

import * as styles from './Card.module.css';

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

const Header = ({ title, subtitle }: { title: string; subtitle?: string }) => {
    const subtitleContent = subtitle && <p className={styles.Subtitle}>{subtitle}</p>;
    return (
        <div className={styles.Header}>
            <Heading>{title}</Heading>
            {subtitleContent}
        </div>
    );
};

type spacing = 'none' | 'tight' | 'loose';

export interface CardProps {
    title?: string;
    subtitle?: string;
    spacing?: spacing;
    classNames?: string;
    children?: React.ReactNode;
}

interface CardChildren {
    Section?: typeof Section;
}

const spacingStyles: { [s in spacing]: string } = {
    none: styles.spaceNone,
    tight: styles.spaceTight,
    loose: styles.spaceLoose
};

export const Card = ({ title, subtitle, spacing, classNames, children }: CardProps & CardChildren) => {
    const headerContent = title && <Header title={title} subtitle={subtitle} />;
    const cardStyle = cx(styles.Card, spacing && spacingStyles[spacing], classNames);

    const content = Children.map(children, (child) => {
        if (child === null || child === undefined) {
            return null;
        }

        if (!React.isValidElement<React.ReactNode>(child)) {
            return <Section>{child}</Section>;
        }

        if (child.type === Section) {
            return child;
        }
        return <Section>{child}</Section>;
    });

    return (
        <div className={cardStyle}>
            {headerContent}
            {content}
        </div>
    );
};

Card.Section = Section;
