/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { FormLayout } from '../../src';
import { TextInput } from '../../src';

export const Default = (args: any) => (
    <FormLayout {...args}>
        <TextInput label="First Name" name="first_name" />
        <TextInput label="Last Name" name="last_name" />
    </FormLayout>
);

export const Groups = () => (
    <FormLayout>
        <TextInput label="Street" name="street" />
        <FormLayout.Group>
            <TextInput label="City" name="city" />
            <TextInput label="State" name="state" />
        </FormLayout.Group>
    </FormLayout>
);
