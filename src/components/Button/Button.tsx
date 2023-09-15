import React from 'react';
import type { Ref } from 'react';
import cx from 'classnames';

import { Icon } from '../Icon';
import { Link } from '../Link';

import styles from './Button.module.css';

type size = 'slim' | 'large';

type variant = 'primary' | 'secondary' | 'plain' | 'destructive';

export interface ButtonProps {
    size?: size;
    variant?: variant;
    disabled?: boolean;
    fullWidth?: boolean;
    url?: string;
    submit?: boolean;
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
    secondary: styles.secondary,
    plain: styles.plain,
    destructive: styles.destructive
};

export const Button = React.forwardRef(function Button(
    { size, variant, disabled, fullWidth, url, submit, icon, onClick, children }: ButtonProps,
    forwardedRef: Ref<HTMLButtonElement>
) {
    const className = cx(
        styles.Button,
        size && sizeStyles[size],
        variant && variantStyles[variant],
        disabled && styles.disabled,
        fullWidth && styles.fullWidth
    );

    const iconContent = icon && (
        <span className={styles.Icon}>
            <Icon source={icon} color="current" />
        </span>
    );

    const buttonContent = (
        <button
            ref={forwardedRef}
            className={className}
            disabled={disabled}
            type={submit ? 'submit' : 'button'}
            onClick={onClick}
        >
            {iconContent}
            {children}
        </button>
    );

    return url ? (
        <Link unstyled url={url}>
            {buttonContent}
        </Link>
    ) : (
        buttonContent
    );
});
