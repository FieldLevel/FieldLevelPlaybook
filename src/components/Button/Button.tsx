import React from 'react';
import cx from 'classnames';

import { Icon } from '../Icon';

import styles from './Button.module.css';

type size = 'slim' | 'large';

type variant = 'primary' | 'plain' | 'destructive';

export interface ButtonProps {
    size?: size;
    variant?: variant;
    disabled?: boolean;
    icon?: React.FC<React.SVGProps<SVGSVGElement>>;
    children?: React.ReactNode;
    onClick?(): void;
}

const sizeStyles: { [key in size]: string } = {
    slim: styles.slim,
    large: styles.large
};

const variantStyles: { [key in variant]: string } = {
    primary: styles.primary,
    plain: styles.plain,
    destructive: styles.destructive
};

export const Button = ({ size, variant, disabled, icon, onClick, children }: ButtonProps) => {
    const className = cx(
        styles.Button,
        size && sizeStyles[size],
        variant && variantStyles[variant],
        disabled && styles.disabled
    );
    const iconContent = icon && (
        <span className={styles.Icon}>
            <Icon source={icon} color="current" />
        </span>
    );

    return (
        <button className={className} disabled={disabled} onClick={onClick}>
            {iconContent}
            {children}
        </button>
    );
};
