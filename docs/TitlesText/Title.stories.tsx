/* eslint-disable @typescript-eslint/no-explicit-any */
import { Meta, StoryObj } from '@storybook/react';

import { Title } from '../../src';

const meta: Meta<typeof Title> = {
    component: Title
};

export default meta;

type Story = StoryObj<typeof Title>;

export const Default: Story = {
    args: {
        children: 'Title'
    }
};
