/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { FormLayout } from '../../src';
import { TextInput } from '../../src';

const meta: Meta<typeof FormLayout> = {
    component: FormLayout
};

export default meta;

type Story = StoryObj<typeof FormLayout>;

export const Default: Story = {
    args: {
        children: (
            <>
                <TextInput label="First Name" name="first_name" />
                <TextInput label="Last Name" name="last_name" />
            </>
        )
    }
};

export const Row: Story = {
    args: {
        children: (
            <>
                <FormLayout.Row>
                    <TextInput label="City" name="city" />
                    <TextInput label="State" name="state" />
                </FormLayout.Row>
                <FormLayout.Row>
                    <TextInput label="City" name="city" />
                    <TextInput label="State" name="state" />
                    <TextInput label="Zip" name="zip" />
                </FormLayout.Row>
            </>
        )
    }
};

export const RowWithEmpty: Story = {
    args: {
        children: (
            <>
                <FormLayout.Row>
                    <FormLayout.Item size="oneHalf">
                        <TextInput label="Street" name="street" />
                    </FormLayout.Item>
                </FormLayout.Row>
                <FormLayout.Row>
                    <FormLayout.Item size="oneThird">
                        <TextInput label="City" name="city" />
                    </FormLayout.Item>
                    <FormLayout.Item size="oneSixth">
                        <TextInput label="State" name="state" />
                    </FormLayout.Item>
                    <FormLayout.Item size="oneSixth">
                        <TextInput label="Zip" name="zip" />
                    </FormLayout.Item>
                </FormLayout.Row>
            </>
        )
    }
};
