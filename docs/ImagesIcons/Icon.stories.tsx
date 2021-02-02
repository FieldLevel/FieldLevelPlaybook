/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { Stack, Icon, HomeMajor } from '../../src';

export const Default = (args: any) => <Icon {...args} source={HomeMajor} />;

export const Color = () => (
    <Stack vertical>
        <Stack.Item>
            <Icon source={HomeMajor} />
        </Stack.Item>
        <Stack.Item>
            <Icon source={HomeMajor} color="current" />
        </Stack.Item>
        <Stack.Item>
            <Icon source={HomeMajor} color="muted" />
        </Stack.Item>
        <Stack.Item>
            <Icon source={HomeMajor} color="critical" />
        </Stack.Item>
        <Stack.Item>
            <Icon source={HomeMajor} color="warning" />
        </Stack.Item>
        <Stack.Item>
            <Icon source={HomeMajor} color="success" />
        </Stack.Item>
        <Stack.Item>
            <Icon source={HomeMajor} color="highlight" />
        </Stack.Item>
    </Stack>
);
