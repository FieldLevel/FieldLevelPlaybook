/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { Button, ButtonGroup, AddMinor } from '../../src';

export const Default = (args: any) => <Button {...args}>Action</Button>;

export const Basic = () => <Button>Continue</Button>;

export const Primary = () => <Button variant="primary">Upgrade</Button>;

export const Secondary = () => <Button variant="secondary">Cancel</Button>;

export const Plain = () => <Button variant="plain">Learn More</Button>;

export const Destructive = () => <Button variant="destructive">Delete</Button>;

export const Icon = () => <Button icon={AddMinor}>Add Athlete</Button>;

export const Size = () => (
    <ButtonGroup>
        <Button size="slim">Slim</Button>
        <Button>Base</Button>
        <Button size="large">Large</Button>
    </ButtonGroup>
);

export const FullWidth = () => (
    <div className="w-80">
        <Button fullWidth>Full Width</Button>
    </div>
);

export const Disabled = () => (
    <ButtonGroup>
        <Button disabled>Basic</Button>
        <Button variant="primary" disabled>
            Primary
        </Button>
        <Button variant="secondary" disabled>
            Secondary
        </Button>
        <Button variant="destructive" disabled>
            Destructive
        </Button>
        <Button variant="plain" disabled>
            Plain
        </Button>
    </ButtonGroup>
);

export const Submit = () => (
    <form
        onSubmit={(e) => {
            e.preventDefault();
            alert('Submitted!');
        }}
    >
        <ButtonGroup>
            <Button submit variant="primary">
                Save
            </Button>
            <Button variant="secondary">Cancel</Button>
        </ButtonGroup>
    </form>
);
