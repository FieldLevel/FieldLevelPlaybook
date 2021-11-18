import React from 'react';

export interface LinkProps {
    url?: string;
    external?: boolean;
    target?: string;
    children?: React.ReactNode;
    onClick?(): void;
}

export const Link = ({ url, target, external, children, onClick }: LinkProps) => {
    const targetValue = target || (external ? '_blank' : '');
    const rel = targetValue == '_blank' ? 'noopener noreferrer' : '';

    return (
        <a href={url} target={targetValue} rel={rel} onClick={onClick}>
            {children}
        </a>
    );
};
