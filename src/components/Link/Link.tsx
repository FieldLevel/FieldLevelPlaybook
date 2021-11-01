import React from 'react';

export interface LinkProps {
    url?: string;
    external?: boolean;
    children?: React.ReactNode;
    onClick?(): void;
}

export const Link = ({ url, external, children, onClick }: LinkProps) => {
    const target = external ? '_blank' : '';
    const rel = external ? 'noopener noreferrer' : '';

    return (
        <a href={url} target={target} rel={rel} onClick={onClick}>
            {children}
        </a>
    );
};
