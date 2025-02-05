/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { StoryObj, Meta } from '@storybook/react';

import { Checkbox } from '../../src';

const meta: Meta<typeof Checkbox> = {
    component: Checkbox
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
    args: {
        name: 'text',
        label: 'Text me important information'
    }
};

const ControlledExample = () => {
    const [checked, setChecked] = useState(true);
    const handleChange = (value: boolean) => {
        setChecked(value);
    };

    return <Checkbox name="text" label="Text me important information" checked={checked} onChange={handleChange} />;
};

export const Controlled: Story = {
    render: () => <ControlledExample />
};

export const Checked: Story = {
    args: {
        name: 'text',
        label: 'Text me important information',
        checked: true
    }
};

export const Disabled: Story = {
    args: {
        name: 'text',
        label: 'Text me important information',
        disabled: true
    }
};
