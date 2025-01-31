/* eslint-disable @typescript-eslint/no-explicit-any */
import { Meta, StoryObj } from '@storybook/react';

import { Heading } from '../../src';

const meta: Meta<typeof Heading> = {
    component: Heading
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const Default: Story = {
    args: {
        children: 'Heading'
    }
};
