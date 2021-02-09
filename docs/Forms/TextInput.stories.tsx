/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useCallback } from 'react';

import { TextInput, FormLayout } from '../../src';
import { SearchMinor } from '../../src';

export const Default = (args: any) => <TextInput {...args} label="Headline" name="headline" />;

export const Controlled = () => {
    const [value, setValue] = useState('Head coach at FieldLevel');
    const handleChange = useCallback(
        (value) => {
            setValue(value);
        },
        [value]
    );
    return <TextInput label="Headline" name="headline" value={value} onChange={handleChange} />;
};

export const Placeholder = () => (
    <TextInput label="Headline" name="headline" placeholder="The headline you want others to see" />
);

export const Disabled = () => <TextInput label="Headline" name="headline" value="Head coach at FieldLevel" disabled />;

export const WithIcon = () => <TextInput label="Search" name="search" icon={SearchMinor} />;

export const WithError = () => (
    <TextInput
        label="Headline"
        name="headline"
        value="Head coach at FieldLevel"
        error="You can't be a head coach at FieldLevel"
    />
);

export const Type = () => (
    <FormLayout>
        <TextInput label="Email" name="email" type="email" />
        <TextInput label="Password" name="password" type="password" />
        <TextInput label="Number" name="number" type="number" />
    </FormLayout>
);
