/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState } from 'react';

import { TextInput, FormLayout, Button, Stack } from '../../src';
import { SearchMinor } from '../../src';

export const Default = (args: any) => <TextInput {...args} label="Headline" name="headline" />;

export const Controlled = () => {
    const [value, setValue] = useState('Head coach at FieldLevel');
    const handleChange = (value) => {
        setValue(value);
    };
    return <TextInput label="Headline" name="headline" value={value} onChange={handleChange} />;
};

export const Placeholder = () => (
    <TextInput label="Headline" name="headline" placeholder="The headline you want others to see" />
);

export const Disabled = () => <TextInput label="Headline" name="headline" value="Head coach at FieldLevel" disabled />;

export const Readonly = () => <TextInput label="Headline" name="headline" value="Head coach at FieldLevel" readonly />;

export const WithIcon = () => <TextInput label="Search" name="search" icon={SearchMinor} />;

export const WithLinkAction = () => (
    <TextInput label="Email address" name="email" action={{ label: 'Change', url: '#' }} />
);

export const WithButtonAction = () => (
    <TextInput
        label="Email address"
        name="email"
        action={{
            label: 'Change',
            onClick: () => {
                alert('Action!');
            }
        }}
    />
);

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

export const MaxLength = () => <TextInput label="Headline" name="headline" maxLength={20} />;

export const Rows = () => <TextInput label="Headline" name="headline" rows={3} maxRows={5} />;

export const Ref = () => {
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
