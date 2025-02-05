/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { LazyImage, LazyImageProps, Stack } from '../../src';

const meta: Meta<typeof LazyImage> = {
    component: LazyImage
};

export default meta;

type Story = StoryObj<typeof LazyImage>;

export const Default: Story = {
    render: (args: Partial<LazyImageProps>) => (
        <div className="h-10 w-10">
            <LazyImage src={'http://placekitten.com/80/80'} width={40} height={40} {...args} />
        </div>
    )
};

export const Cover: Story = {
    render: () => (
        <Stack>
            <div className="h-20 w-20">
                <LazyImage src="http://placekitten.com/80/120" height={80} width={80} />
            </div>
            <div className="h-20 w-20">
                <LazyImage src="http://placekitten.com/80/120" height={80} width={80} cover />
            </div>
        </Stack>
    )
};
