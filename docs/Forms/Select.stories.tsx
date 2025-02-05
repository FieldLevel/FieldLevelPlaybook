/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Select, SelectProps } from '../../src';

const meta: Meta<typeof Select> = {
    component: Select
};

export default meta;

type Story = StoryObj<typeof Select>;

const DefaultExample = (args: Partial<SelectProps>) => {
    const [selected, setSelected] = useState();
    const handleChange = (value) => {
        setSelected(value);
    };

    return (
        <Select
            {...args}
            value={selected}
            label="Sport"
            name="sport"
            options={['Baseball', 'Football', 'Basketball']}
            onChange={handleChange}
        />
    );
};

export const Default: Story = {
    render: (args) => <DefaultExample {...args} />
};

const PlaceholderExample = () => {
    const [selected, setSelected] = useState();
    const handleChange = (value) => {
        setSelected(value);
    };

    return (
        <Select
            label="Sport"
            name="sport"
            options={['Baseball', 'Football', 'Basketball']}
            placeholder="Pick a sport"
            value={selected}
            onChange={handleChange}
        />
    );
};

export const Placeholder: Story = {
    render: () => <PlaceholderExample />
};

export const Disabled: Story = {
    args: {
        label: 'Sport',
        name: 'sport',
        options: ['Baseball', 'Football', 'Basketball'],
        disabled: true
    }
};

export const WithError: Story = {
    args: {
        label: 'Sport',
        name: 'sport',
        value: 'Football',
        options: ['Baseball', 'Football', 'Basketball'],
        placeholder: 'Pick a sport',
        error: "Your mom won't let you play football"
    }
};
