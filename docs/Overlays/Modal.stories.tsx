/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Modal, ModalProps, Button } from '../../src';

const meta: Meta<typeof Modal> = {
    component: Modal
};

export default meta;

type Story = StoryObj<typeof Modal>;

const DefaultExample = (args: Partial<ModalProps>) => {
    const [open, setOpen] = useState(false);
    const toggleOpen = () => {
        setOpen((prev) => !prev);
    };

    return (
        <>
            <Button onClick={toggleOpen}>Open</Button>
            <Modal title="Basic modal" open={open} onDismiss={toggleOpen} {...args}>
                This modal has a title and some content!
            </Modal>
        </>
    );
};

export const Default: Story = {
    render: (args) => <DefaultExample {...args} />
};

const NoTitleExample = () => {
    const [open, setOpen] = useState(false);
    const toggleOpen = () => {
        setOpen((prev) => !prev);
    };

    return (
        <>
            <Button onClick={toggleOpen}>Open</Button>
            <Modal open={open} onDismiss={toggleOpen} ariaLabel="This is a Modal with no title">
                This modal has no title.
            </Modal>
        </>
    );
};

export const NoTitle: Story = {
    render: () => <NoTitleExample />
};

const WithActionsExample = () => {
    const [open, setOpen] = useState(false);
    const toggleOpen = () => {
        setOpen((prev) => !prev);
    };

    return (
        <>
            <Button onClick={toggleOpen}>Open</Button>
            <Modal
                title="With Actions"
                open={open}
                onDismiss={toggleOpen}
                primaryAction={{ content: 'Confirm' }}
                secondaryAction={{ content: 'Cancel', onAction: toggleOpen }}
            >
                This modal has some actions.
            </Modal>
        </>
    );
};

export const WithActions: Story = {
    render: () => <WithActionsExample />
};

const WithDisabledActionExample = () => {
    const [open, setOpen] = useState(false);
    const toggleOpen = () => {
        setOpen((prev) => !prev);
    };

    return (
        <>
            <Button onClick={toggleOpen}>Open</Button>
            <Modal
                title="With Disabled Action"
                open={open}
                onDismiss={toggleOpen}
                primaryAction={{ content: 'Save', disabled: true }}
                secondaryAction={{ content: 'Cancel', onAction: toggleOpen }}
            >
                This modal has some actions and one is disabled.
            </Modal>
        </>
    );
};

export const WithDisabledAction: Story = {
    render: () => <WithDisabledActionExample />
};

const WithDestructiveActionExample = () => {
    const [open, setOpen] = useState(false);
    const toggleOpen = () => {
        setOpen((prev) => !prev);
    };

    return (
        <>
            <Button onClick={toggleOpen}>Open</Button>
            <Modal
                title="With Destructive Action"
                open={open}
                onDismiss={toggleOpen}
                primaryAction={{ content: 'Delete', destructive: true }}
                secondaryAction={{ content: 'Cancel', onAction: toggleOpen }}
            >
                This modal has some actions and one is destructive.
            </Modal>
        </>
    );
};

export const WithDestructiveAction: Story = {
    render: () => <WithDestructiveActionExample />
};

const WithTertiaryActionExample = () => {
    const [open, setOpen] = useState(false);
    const toggleOpen = () => {
        setOpen((prev) => !prev);
    };

    return (
        <>
            <Button onClick={toggleOpen}>Open</Button>
            <Modal
                title="With Tertiary Action"
                open={open}
                onDismiss={toggleOpen}
                primaryAction={{ content: 'Save' }}
                secondaryAction={{ content: 'Cancel', onAction: toggleOpen }}
                tertiaryAction={{ content: 'Remove', variant: 'destructive' }}
            >
                This modal has three actions.
            </Modal>
        </>
    );
};

export const WithTertiaryAction: Story = {
    render: () => <WithTertiaryActionExample />
};

const Lorem = () => (
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
    </p>
);

const ScrollableExample = () => {
    const [open, setOpen] = useState(false);
    const toggleOpen = () => {
        setOpen((prev) => !prev);
    };

    return (
        <>
            <Button onClick={toggleOpen}>Open</Button>
            <Modal
                title="Scrollable"
                open={open}
                onDismiss={toggleOpen}
                primaryAction={{ content: 'Confirm' }}
                secondaryAction={{ content: 'Cancel', onAction: toggleOpen }}
            >
                <Lorem />
                <Lorem />
                <Lorem />
                <Lorem />
                <Lorem />
                <Lorem />
                <Lorem />
            </Modal>
        </>
    );
};

export const Scrollable: Story = {
    render: () => <ScrollableExample />
};

const SmallExample = () => {
    const [open, setOpen] = useState(false);
    const toggleOpen = () => {
        setOpen((prev) => !prev);
    };

    return (
        <>
            <Button onClick={toggleOpen}>Open</Button>
            <Modal title="Small Modal" variant="small" open={open} onDismiss={toggleOpen}>
                This is a small modal.
            </Modal>
        </>
    );
};

export const Small: Story = {
    render: () => <SmallExample />
};

const LargeExample = () => {
    const [open, setOpen] = useState(false);
    const toggleOpen = () => {
        setOpen((prev) => !prev);
    };

    return (
        <>
            <Button onClick={toggleOpen}>Open</Button>
            <Modal
                title="Large Modal"
                variant="large"
                open={open}
                onDismiss={toggleOpen}
                primaryAction={{ content: 'Confirm' }}
                secondaryAction={{ content: 'Cancel', onAction: toggleOpen }}
            >
                <Lorem />
                <Lorem />
                <Lorem />
                <Lorem />
                <Lorem />
                <Lorem />
                <Lorem />
                <Lorem />
                <Lorem />
                <Lorem />
                <Lorem />
                <Lorem />
                <Lorem />
                <Lorem />
                <Lorem />
                <Lorem />
                <Lorem />
            </Modal>
        </>
    );
};
export const Large: Story = {
    render: () => <LargeExample />
};
