import React from 'react';

export interface LinkProps {
    url?: string;
    external?: boolean;
    children?: React.ReactNode;
}

export const Link = ({ url, external, children }: LinkProps) => {
    const target = external ? '_blank' : '';
    const rel = external ? 'noopener noreferrer' : '';

    return (
        <a href={url} target={target} rel={rel}>
            {children}
        </a>
    );
};
