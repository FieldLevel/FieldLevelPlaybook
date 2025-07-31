/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { TextInput, FormLayout, Button, Stack } from '../../src';
import { SearchMinor } from '../../src';

const meta: Meta<typeof TextInput> = {
    component: TextInput
};

export default meta;

type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
    args: {
        label: 'Headline',
        name: 'Headline'
    }
};

const ControlledExample = () => {
    const [value, setValue] = useState('Head coach at FieldLevel');
    const handleChange = (value) => {
        setValue(value);
    };
    return <TextInput label="Headline" name="headline" value={value} onChange={handleChange} />;
};

export const Controlled: Story = {
    render: () => <ControlledExample />
};

export const Placeholder: Story = {
    args: {
        label: 'Headline',
        name: 'headline',
        placeholder: 'The headline you want others to see'
    }
};

export const Disabled: Story = {
    args: {
        label: 'Headline',
        name: 'headline',
        value: 'Head coach at FieldLevel',
        disabled: true
    }
};

export const Readonly: Story = {
    args: {
        label: 'Headline',
        name: 'headline',
        value: 'Head coach at FieldLevel',
        readonly: true
    }
};

export const AutoComplete: Story = {
    args: {
        label: 'Email',
        name: 'email',
        type: 'email',
        autoComplete: 'off'
    }
};

export const Size: Story = {
    args: {
        label: 'Email',
        name: 'email',
        value: 'test@fieldlevel.com',
        size: 'large'
    }
};

export const WithIcon: Story = {
    args: {
        label: 'Search',
        name: 'search',
        icon: SearchMinor
    }
};

export const WithLinkAction: Story = {
    args: {
        label: 'Email address',
        name: 'email',
        action: {
            label: 'Change',
            url: '#'
        }
    }
};

export const WithButtonAction: Story = {
    args: {
        label: 'Email address',
        name: 'email',
        action: {
            label: 'Change',
            onClick: () => {
                alert('Action!');
            }
        }
    }
};

export const WithError: Story = {
    args: {
        label: 'Headline',
        name: 'headline',
        value: 'Head coach at FieldLevel',
        error: "You can't be a head coach at FieldLevel"
    }
};

export const Type: Story = {
    render: () => (
        <FormLayout>
            <TextInput label="Email" name="email" type="email" />
            <TextInput label="Password" name="password" type="password" />
            <TextInput label="Number" name="number" type="number" />
        </FormLayout>
    )
};

export const MaxLength: Story = {
    args: {
        label: 'Headline',
        name: 'headline',
        maxLength: 20
    }
};

export const Row: Story = {
    args: {
        label: 'Headline',
        name: 'headline',
        rows: 3,
        maxRows: 5
    }
};

const RefExample = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    const focusInput = () => {
        inputRef.current?.focus();
    };

    const focusTextArea = () => {
        textAreaRef.current?.focus();
    };

    return (
        <>
            <Stack align="end">
                <TextInput label="Input" name="input" ref={inputRef} />
                <Button onClick={focusInput}>Focus!</Button>
            </Stack>
            <Stack align="end">
                <TextInput rows={3} label="TextArea" name="textarea" ref={textAreaRef} />
                <Button onClick={focusTextArea}>Focus!</Button>
            </Stack>
        </>
    );
};

export const Ref: Story = {
    render: () => <RefExample />
};
