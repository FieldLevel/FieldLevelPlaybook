/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { Logo, Stack } from '../../src';

export const Default = (args: any) => <Logo {...args} source="http://placekitten.com/80/80" />;

export const Size = () => (
    <Stack align="center">
        <Logo size="small" source="http://placekitten.com/64/64" />
        <Logo source="http://placekitten.com/80/80" />
        <Logo size="large" source="http://placekitten.com/120/120" />
    </Stack>
);
