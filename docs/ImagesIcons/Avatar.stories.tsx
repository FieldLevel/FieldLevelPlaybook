/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Avatar, Stack } from '../../src';

const meta: Meta<typeof Avatar> = {
    component: Avatar
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
    args: {
        source: 'http://placekitten.com/80/80'
    }
};

export const Size: Story = {
    render: () => (
        <Stack align="center">
            <Avatar size="small" source="http://placekitten.com/64/64" />
            <Avatar source="http://placekitten.com/80/80" />
            <Avatar size="large" source="http://placekitten.com/120/120" />
        </Stack>
    )
};

export const Lazy: Story = {
    render: () => {
        const images = 16;
        const urls: string[] = [];

        for (let i = 1; i <= images; i++) {
            urls.push(`http://placekitten.com/80/80?image=${i}`);
        }

        return (
            <Stack vertical>
                {urls.map((url, index) => (
                    <div key={index} className="pb-4">
                        <Avatar lazy source={url} />
                    </div>
                ))}
            </Stack>
        );
    }
};
