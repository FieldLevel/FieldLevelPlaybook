/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useCallback } from 'react';

import { ChoiceGroup } from '../../src';

export const Default = (args: any) => {
    const [selected, setSelected] = useState([]);
    const handleChange = useCallback((value) => setSelected(value), []);

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

export const SingleChoice = () => {
    const [selected, setSelected] = useState([]);
    const handleChange = useCallback((value) => setSelected(value), []);

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

export const MultiChoice = () => {
    const [selected, setSelected] = useState([]);
    const handleChange = useCallback((value) => setSelected(value), []);

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

export const Disabled = () => {
    const [selected, setSelected] = useState(['baseball']);
    const handleChange = useCallback((value) => setSelected(value), []);
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

export const DisabledChoice = () => {
    const [selected, setSelected] = useState(['baseball']);
    const handleChange = useCallback((value) => setSelected(value), []);
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

export const WithError = () => {
    const [selected, setSelected] = useState(['football']);
    const handleChange = useCallback((value) => setSelected(value), []);

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
