/* eslint-disable @typescript-eslint/no-explicit-any */
import { Meta, StoryObj } from '@storybook/react';

import { Caption } from '../../src';

const meta: Meta<typeof Caption> = {
    component: Caption
};

export default meta;

type Story = StoryObj<typeof Caption>;

export const Default: Story = {
    args: {
        children: 'Caption'
    }
};
