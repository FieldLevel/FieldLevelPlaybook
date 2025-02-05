/* eslint-disable @typescript-eslint/no-explicit-any */
import { Meta, StoryObj } from '@storybook/react';

import { RadioButton } from '../../src';

const meta: Meta<typeof RadioButton> = {
    component: RadioButton
};

export default meta;

type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
    args: {
        name: 'baseball',
        label: 'Baseball'
    }
};

export const Checked: Story = {
    args: {
        name: 'football',
        label: 'Football',
        checked: true
    }
};

export const Disabled: Story = {
    args: {
        name: 'basketball',
        label: 'Basketball',
        disabled: true
    }
};
