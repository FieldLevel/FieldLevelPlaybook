/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { Link } from '../../src';

export const Default = (args: any) => (
    <Link url="#" {...args}>
        Default link
    </Link>
);

export const Action = () => <Link onClick={() => {}}>Recruiting Guidance</Link>;

export const External = () => (
    <Link external url="https://recruiting.fieldlevel.com">
        Recruiting Guidance
    </Link>
);
