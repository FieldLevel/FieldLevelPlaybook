/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';

import { Select } from '../../src';

export const Default = (args: any) => (
    <Select {...args} label="Sport" name="sport" options={['Baseball', 'Football', 'Basketball']} />
);

export const Controlled = () => {
    const [selected, setSelected] = useState();
    const handleChange = (value) => {
        setSelected(value);
    };

    return (
        <Select
            label="Sport"
            name="sport"
            value={selected}
            options={['Baseball', 'Football', 'Basketball']}
            placeholder="Pick a sport"
            onChange={handleChange}
        />
    );
};

export const Placeholder = () => (
    <Select label="Sport" name="sport" options={['Baseball', 'Football', 'Basketball']} placeholder="Pick a sport" />
);

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
