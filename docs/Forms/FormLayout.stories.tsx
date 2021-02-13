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

export const Row = () => (
    <FormLayout>
        <FormLayout.Row>
            <TextInput label="City" name="city" />
            <TextInput label="State" name="state" />
        </FormLayout.Row>
        <FormLayout.Row>
            <TextInput label="City" name="city" />
            <TextInput label="State" name="state" />
            <TextInput label="Zip" name="zip" />
        </FormLayout.Row>
    </FormLayout>
);

export const RowWithEmpty = () => (
    <FormLayout>
        <FormLayout.Row>
            <FormLayout.Item size="oneHalf">
                <TextInput label="Street" name="street" />
            </FormLayout.Item>
        </FormLayout.Row>
        <FormLayout.Row>
            <FormLayout.Item size="oneThird">
                <TextInput label="City" name="city" />
            </FormLayout.Item>
            <FormLayout.Item size="oneThird">
                <TextInput label="State" name="state" />
            </FormLayout.Item>
            <FormLayout.Item size="oneThird">
                <TextInput label="Zip" name="zip" />
            </FormLayout.Item>
        </FormLayout.Row>
    </FormLayout>
);
