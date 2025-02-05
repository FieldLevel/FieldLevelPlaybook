/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Stack, Icon, HomeMajor } from '../../src';

const meta: Meta<typeof Icon> = {
    component: Icon
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
    args: {
        source: HomeMajor
    }
};

export const Color: Story = {
    render: () => (
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
    )
};
