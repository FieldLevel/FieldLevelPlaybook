/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';

import { Select } from '../../src';

export const Default = (args: any) => {
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

export const Placeholder = () => {
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

export const Disabled = () => (
    <Select label="Sport" name="sport" options={['Baseball', 'Football', 'Basketball']} disabled />
);

export const WithError = () => (
    <Select
        label="Sport"
        name="sport"
        value="Football"
        options={['Baseball', 'Football', 'Basketball']}
        placeholder="Pick a sport"
        error="Your mom won't let you play football"
    />
);
