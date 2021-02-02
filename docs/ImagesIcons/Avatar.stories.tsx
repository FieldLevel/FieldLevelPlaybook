/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { Avatar, Stack } from '../../src';

export const Default = (args: any) => <Avatar {...args} source="http://placekitten.com/80/80" />;

export const Size = () => (
    <Stack align="center">
        <Avatar size="small" source="http://placekitten.com/64/64" />
        <Avatar source="http://placekitten.com/80/80" />
        <Avatar size="large" source="http://placekitten.com/120/120" />
    </Stack>
);
