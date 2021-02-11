import React from 'react';

import { Button } from '../Button';

export interface LinkProps {
    url?: string;
    external?: boolean;
    onClick?(): void;
    children?: React.ReactNode;
}

export const Link = ({ url, external, onClick, children }: LinkProps) => {
    function handleClick() {
        onClick && onClick();
    }

    const target = external ? '_blank' : '';
    const rel = external ? 'noopener noreferrer' : '';

    return url ? (
        <a href={url} target={target} rel={rel}>
            {children}
        </a>
    ) : (
        <Button variant="text" onClick={handleClick}>
            {children}
        </Button>
    );
};
