/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { Button, ButtonGroup, AddMinor } from '../../src';

export const Default = (args: any) => <Button {...args}>Action</Button>;

export const Basic = () => <Button>Continue</Button>;

export const Primary = () => <Button variant="primary">Upgrade</Button>;

export const Plain = () => <Button variant="plain">Learn More</Button>;

export const Text = () => <Button variant="text">Learn More</Button>;

export const Destructive = () => <Button variant="destructive">Delete</Button>;

export const WithIcon = () => <Button icon={AddMinor}>Add Athlete</Button>;

export const Size = () => (
    <ButtonGroup>
        <Button size="slim">Slim</Button>
        <Button>Default</Button>
        <Button size="large">Large</Button>
    </ButtonGroup>
);

export const Disabled = () => (
    <ButtonGroup>
        <Button disabled>Basic</Button>
        <Button variant="primary" disabled>
            Primary
        </Button>
        <Button variant="plain" disabled>
            Plain
        </Button>
    </ButtonGroup>
);
