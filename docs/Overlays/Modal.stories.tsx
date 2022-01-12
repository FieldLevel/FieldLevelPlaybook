/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';

import { Modal, Button } from '../../src';

export const Default = (args: any) => {
    const [open, setOpen] = useState(false);
    const toggleOpen = () => {
        setOpen(!open);
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

export const NoTitle = () => {
    const [open, setOpen] = useState(false);
    const toggleOpen = () => {
        setOpen(!open);
    };

    return (
        <>
            <Button onClick={toggleOpen}>Open</Button>
            <Modal open={open} onDismiss={toggleOpen}>
                This modal has no title.
            </Modal>
        </>
    );
};

export const WithActions = () => {
    const [open, setOpen] = useState(false);
    const toggleOpen = () => {
        setOpen(!open);
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

export const WithDestructiveAction = () => {
    const [open, setOpen] = useState(false);
    const toggleOpen = () => {
        setOpen(!open);
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

const Lorem = () => (
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
    </p>
);

export const Scrollable = () => {
    const [open, setOpen] = useState(false);
    const toggleOpen = () => {
        setOpen(!open);
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

export const Large = () => {
    const [open, setOpen] = useState(false);
    const toggleOpen = () => {
        setOpen(!open);
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
