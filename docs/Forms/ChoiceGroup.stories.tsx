/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { ChoiceGroup } from '../../src';

const meta: Meta<typeof ChoiceGroup> = {
    component: ChoiceGroup
};

export default meta;

type Story = StoryObj<typeof ChoiceGroup>;

export const Default: Story = {
    args: {
        title: 'Sports',
        name: 'sports',
        multiple: true,
        choices: [
            { label: 'Baseball', value: 'baseball' },
            { label: 'Football', value: 'football' },
            { label: 'Basketball', value: 'basketball' }
        ]
    },
    render: (args) => {
        const [selected, setSelected] = useState([]);
        const handleChange = (value) => setSelected(value);
        return <ChoiceGroup {...args} selected={selected} onChange={handleChange} key={args.displayLimit} />;
    }
};

export const SingleChoice: Story = {
    render: () => {
        const [selected, setSelected] = useState();
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
    },
    parameters: {
        docs: {
            source: {
                type: 'dynamic'
            }
        }
    }
};

export const MultiChoice: Story = {
    render: () => {
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
    },
    parameters: {
        docs: {
            source: {
                type: 'dynamic'
            }
        }
    }
};

export const Disabled: Story = {
    render: () => {
        const [selected, setSelected] = useState(['baseball']);
        const handleChange = (value) => setSelected(value);
        return (
            <ChoiceGroup
                title="Disabled Sports"
                multiple
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
    },
    parameters: {
        docs: {
            source: {
                type: 'dynamic'
            }
        }
    }
};

export const Spacing: Story = {
    render: () => {
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
    },
    parameters: {
        docs: {
            source: {
                type: 'dynamic'
            }
        }
    }
};

export const DisabledChoice: Story = {
    render: () => {
        const [selected, setSelected] = useState(['baseball']);
        const handleChange = (value) => setSelected(value);

        return (
            <ChoiceGroup
                title="Sports"
                multiple
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
    },
    parameters: {
        docs: {
            source: {
                type: 'dynamic'
            }
        }
    }
};

export const WithError: Story = {
    render: () => {
        const [selected, setSelected] = useState(['football']);
        const handleChange = (value) => setSelected(value);

        return (
            <ChoiceGroup
                title="Sport"
                multiple
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
    },
    parameters: {
        docs: {
            source: {
                type: 'dynamic'
            }
        }
    }
};

export const WithDisplayLimit: Story = {
    render: () => {
        const [selected, setSelected] = useState(['football']);
        const handleChange = (value) => setSelected(value);

        return (
            <ChoiceGroup
                title="Sports"
                selected={selected}
                onChange={handleChange}
                name="sports"
                multiple
                displayLimit={3}
                choices={[
                    { label: 'Baseball', value: 'baseball' },
                    { label: 'Football', value: 'football' },
                    { label: 'Basketball', value: 'basketball' },
                    { label: 'Soccer', value: 'soccer' },
                    { label: 'Lacrosse', value: 'lacrosse' },
                    { label: 'Tennis', value: 'tennis' }
                ]}
            />
        );
    },
    parameters: {
        docs: {
            source: {
                type: 'dynamic'
            }
        }
    }
};
