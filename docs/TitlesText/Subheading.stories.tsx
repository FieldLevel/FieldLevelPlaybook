/* eslint-disable @typescript-eslint/no-explicit-any */
import { Meta, StoryObj } from '@storybook/react';

import { Subheading } from '../../src';

const meta: Meta<typeof Subheading> = {
    component: Subheading
};

export default meta;

type Story = StoryObj<typeof Subheading>;

export const Default: Story = {
    args: {
        children: 'Subheading'
    }
};
