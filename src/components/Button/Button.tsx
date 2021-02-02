import React from 'react';
import cx from 'classnames';

import { Icon } from '../Icon';

import styles from './Button.module.css';

type size = 'slim' | 'large';

type variant = 'basic' | 'primary' | 'plain' | 'destructive';

export interface ButtonProps {
    size?: size;
    variant?: variant;
    icon?: React.FC<React.SVGProps<SVGSVGElement>>;
    children?: string | React.ReactElement;
    onClick?(): void;
}

const sizeStyles: { [key in size]: string } = {
    slim: styles.slim,
    large: styles.large
};

const variantStyles: { [key in variant]: string } = {
    basic: styles.basic,
    primary: styles.primary,
    destructive: styles.destructive,
    plain: styles.plain
};

export const Button = ({ size, variant = 'basic', icon, onClick, children }: ButtonProps) => {
    const className = cx(styles.Button, size && sizeStyles[size], variant && variantStyles[variant]);
    const iconContent = icon && (
        <span className={styles.Icon}>
            <Icon source={icon} color="current" />
        </span>
    );

    return (
        <button className={className} onClick={onClick}>
            {iconContent}
            {children}
        </button>
    );
};
