/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef } from 'react';

import { Button, ButtonGroup, AddMinor } from '../../src';

export const Default = (args: any) => <Button {...args}>Action</Button>;

export const Basic = () => <Button>Continue</Button>;

export const Primary = () => <Button variant="primary">Upgrade</Button>;

export const Secondary = () => <Button variant="secondary">Cancel</Button>;

export const Plain = () => <Button variant="plain">Learn More</Button>;

export const Destructive = () => <Button variant="destructive">Delete</Button>;

export const Icon = () => (
    <ButtonGroup>
        <Button icon={AddMinor}>Add Athlete</Button>
        <Button icon={AddMinor} />
    </ButtonGroup>
);

export const Size = () => (
    <ButtonGroup>
        <Button size="slim">Slim</Button>
        <Button>Base</Button>
        <Button size="large">Large</Button>
    </ButtonGroup>
);

export const FullWidth = () => (
    <div className="w-80">
        <ButtonGroup vertical>
            <Button fullWidth>Full width</Button>
            <Button fullWidth url="https://www.fieldlevel.com">
                Full width with link
            </Button>
        </ButtonGroup>
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

export const Url = () => (
    <ButtonGroup>
        <Button url="https://www.fieldlevel.com" variant="primary">
            Go to FieldLevel
        </Button>
        <Button url="https://support.fieldlevel.com" target="_blank" variant="primary">
            FieldLevel Support
        </Button>
    </ButtonGroup>
);

export const Accessibility = () => (
    <>
        <div className="mb-4">
            <Button icon={AddMinor} ariaLabel="Add" />
        </div>
        <ButtonGroup>
            <Button icon={AddMinor} ariaLabelledBy="label" />
            <div id="label">Some other label for the button</div>
        </ButtonGroup>
    </>
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

export const Ref = () => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const focusButton = () => {
        buttonRef.current?.focus();
    };

    return (
        <ButtonGroup>
            <Button variant="primary" ref={buttonRef}>
                Save
            </Button>
            <Button variant="secondary" onClick={focusButton}>
                Don&apos;t cancel, save!
            </Button>
        </ButtonGroup>
    );
};
