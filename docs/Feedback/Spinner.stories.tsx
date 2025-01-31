/* eslint-disable @typescript-eslint/no-explicit-any */
import { Meta, StoryObj } from '@storybook/react';

import { Spinner } from '../../src';

const meta: Meta<typeof Spinner> = {
    component: Spinner
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {};

export const Small: Story = {
    args: {
        size: 'small'
    }
};
