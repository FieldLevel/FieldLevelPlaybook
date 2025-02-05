/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { ChoiceGroup, ChoiceGroupProps } from '../../src';

const meta: Meta<typeof ChoiceGroup> = {
    component: ChoiceGroup
};

export default meta;

type Story = StoryObj<typeof ChoiceGroup>;

const DefaultExample = (args: Partial<ChoiceGroupProps>) => {
    const [selected, setSelected] = useState([]);
    const handleChange = (value) => setSelected(value);

    return (
        <ChoiceGroup
            {...args}
            title="Sport"
            selected={selected}
            onChange={handleChange}
            name="sport"
            choices={[
                { label: 'Baseball', value: 'baseball' },
                { label: 'Football', value: 'football' },
                { label: 'Basketball', value: 'basketball' }
            ]}
        />
    );
};

export const Default: Story = {
    render: (args) => <DefaultExample {...args} />
};

const SingleChoiceExample = () => {
    const [selected, setSelected] = useState([]);
    const handleChange = (value) => setSelected(value);

    return (
        <ChoiceGroup
            title="Single Sport"
            selected={selected}
            onChange={handleChange}
            name="sport"
            choices={[
                { label: 'Baseball', value: 'baseball' },
                { label: 'Football', value: 'football' },
                { label: 'Basketball', value: 'basketball' }
            ]}
        />
    );
};

export const SingleChoice: Story = {
    render: () => <SingleChoiceExample />
};

const MultipleChoiceExample = () => {
    const [selected, setSelected] = useState([]);
    const handleChange = (value) => setSelected(value);

    return (
        <ChoiceGroup
            multiple
            title="Multiple Sports"
            selected={selected}
            onChange={handleChange}
            name="sport"
            choices={[
                { label: 'Baseball', value: 'baseball' },
                { label: 'Football', value: 'football' },
                { label: 'Basketball', value: 'basketball' }
            ]}
        />
    );
};

export const MultiChoice: Story = {
    render: () => <MultipleChoiceExample />
};

const DisabledExample = () => {
    const [selected, setSelected] = useState(['baseball']);
    const handleChange = (value) => setSelected(value);
    return (
        <ChoiceGroup
            title="Disabled Sports"
            disabled
            selected={selected}
            onChange={handleChange}
            name="sport"
            choices={[
                { label: 'Baseball', value: 'baseball' },
                { label: 'Football', value: 'football' },
                { label: 'Basketball', value: 'basketball' }
            ]}
        />
    );
};

export const Disabled: Story = {
    render: () => <DisabledExample />
};

const SpacingExample = () => {
    const [selected, setSelected] = useState([]);
    const handleChange = (value) => setSelected(value);

    return (
        <ChoiceGroup
            multiple
            title="Multiple Sports"
            selected={selected}
            onChange={handleChange}
            spacing="loose"
            name="sport"
            choices={[
                { label: 'Baseball', value: 'baseball' },
                { label: 'Football', value: 'football' },
                { label: 'Basketball', value: 'basketball' }
            ]}
        />
    );
};

export const Spacing: Story = {
    render: () => <SpacingExample />
};

const DisabledChoiceExample = () => {
    const [selected, setSelected] = useState(['baseball']);
    const handleChange = (value) => setSelected(value);
    return (
        <ChoiceGroup
            title="Sports"
            selected={selected}
            onChange={handleChange}
            name="sport"
            choices={[
                { label: 'Baseball', value: 'baseball' },
                { label: 'Football', value: 'football' },
                { label: 'Basketball', value: 'basketball', disabled: true }
            ]}
        />
    );
};

export const DisabledChoice: Story = {
    render: () => <DisabledChoiceExample />
};

const WithErrorExample = () => {
    const [selected, setSelected] = useState(['football']);
    const handleChange = (value) => setSelected(value);

    return (
        <ChoiceGroup
            title="Sport"
            selected={selected}
            onChange={handleChange}
            name="sport"
            error="Sorry, your mom won't let you play football"
            choices={[
                { label: 'Baseball', value: 'baseball' },
                { label: 'Football', value: 'football' },
                { label: 'Basketball', value: 'basketball' }
            ]}
        />
    );
};

export const WithError: Story = {
    render: () => <WithErrorExample />
};
