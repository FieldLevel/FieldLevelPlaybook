/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { Link } from '../../src';

export const Default = (args: any) => (
    <Link url="#" {...args}>
        Default link
    </Link>
);

export const Unstyled = () => (
    <Link unstyled url="https://www.fieldlevel.com">
        <div className="p-6 border rounded">This whole card is a link.</div>
    </Link>
);

export const Target = () => (
    <Link url="https://recruiting.fieldlevel.com" target="_blank">
        Recruiting Guidance
    </Link>
);

export const ClickEvent = () => (
    <Link url="#" onClick={() => alert('Clicked!')}>
        Click me!
    </Link>
);
