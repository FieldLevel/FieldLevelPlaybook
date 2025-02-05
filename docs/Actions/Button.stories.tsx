/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonGroup, AddMinor } from '../../src';

const meta: Meta<typeof Button> = {
    component: Button
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        children: 'Action'
    }
};

export const Basic: Story = {
    args: {
        children: 'Continue'
    }
};

export const Primary: Story = {
    args: {
        children: 'Upgrade',
        variant: 'primary'
    }
};

export const Secondary: Story = {
    args: {
        children: 'Cancel',
        variant: 'secondary'
    }
};

export const Plain: Story = {
    args: {
        children: 'Learn More',
        variant: 'plain'
    }
};

export const Destructive: Story = {
    args: {
        children: 'Delete',
        variant: 'destructive'
    }
};

export const Icon: Story = {
    render: () => (
        <ButtonGroup>
            <Button icon={AddMinor}>Add Athlete</Button>
            <Button icon={AddMinor} />
        </ButtonGroup>
    )
};

export const Size: Story = {
    render: () => (
        <ButtonGroup>
            <Button size="slim">Slim</Button>
            <Button>Base</Button>
            <Button size="large">Large</Button>
        </ButtonGroup>
    )
};

export const FullWidth: Story = {
    render: () => (
        <div className="w-80">
            <ButtonGroup vertical>
                <Button fullWidth>Full width</Button>
                <Button fullWidth url="https://www.fieldlevel.com">
                    Full width with link
                </Button>
            </ButtonGroup>
        </div>
    )
};

export const Disabled: Story = {
    render: () => (
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
    )
};

export const Url: Story = {
    render: () => (
        <ButtonGroup>
            <Button url="https://www.fieldlevel.com" variant="primary">
                Go to FieldLevel
            </Button>
            <Button url="https://support.fieldlevel.com" target="_blank" variant="primary">
                FieldLevel Support
            </Button>
        </ButtonGroup>
    )
};

export const Accessibility: Story = {
    render: () => (
        <>
            <div className="mb-4">
                <Button icon={AddMinor} ariaLabel="Add" />
            </div>
            <ButtonGroup>
                <Button icon={AddMinor} ariaLabelledBy="label" />
                <div id="label">Some other label for the button</div>
            </ButtonGroup>
        </>
    )
};

export const Submit: Story = {
    render: () => (
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
    )
};

const RefSample = () => {
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

export const Ref: Story = {
    render: () => <RefSample />
};
