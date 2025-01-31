/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { StoryObj, Meta } from '@storybook/react';

import { Feedback, FeedbackProps, Button } from '../../src';

const meta: Meta<typeof Feedback> = {
    component: Feedback,
    title: 'Feedback/Feedback'
};

export default meta;

type Story = StoryObj<typeof Feedback>;

const DefaultExample = (args: Partial<FeedbackProps>) => {
    const [show, setShow] = useState(false);
    const toggleShow = () => {
        setShow(!show);
    };

    return (
        <>
            <Button onClick={toggleShow}>Show</Button>
            <Feedback show={show} title="Something happened!" onDismiss={toggleShow} {...args} />
        </>
    );
};

export const Default: Story = {
    render: (args) => <DefaultExample {...args} />
};

const WithActionExample = () => {
    const [show, setShow] = useState(false);
    const toggleShow = () => {
        setShow(!show);
    };

    return (
        <>
            <Button onClick={toggleShow}>Show</Button>
            <Feedback
                show={show}
                title="Something happened!"
                onDismiss={toggleShow}
                action={{
                    label: 'Undo',
                    onClick: () => {
                        alert('Undid!');
                    }
                }}
            />
        </>
    );
};

export const WithAction: Story = {
    render: () => <WithActionExample />
};

const WithMessageExample = () => {
    const [show, setShow] = useState(false);
    const toggleShow = () => {
        setShow(!show);
    };

    return (
        <>
            <Button onClick={toggleShow}>Show</Button>
            <Feedback
                show={show}
                title="Something!"
                message="With some more detailed message."
                onDismiss={toggleShow}
            />
        </>
    );
};

export const WithMessage: Story = {
    render: () => <WithMessageExample />
};

const WithMessageActionExample = () => {
    const [show, setShow] = useState(false);
    const toggleShow = () => {
        setShow(!show);
    };

    return (
        <>
            <Button onClick={toggleShow}>Show</Button>
            <Feedback
                show={show}
                title="Something!"
                message="With some more detailed message."
                onDismiss={toggleShow}
                action={{
                    label: 'Undo',
                    onClick: () => {
                        alert('Undid!');
                    }
                }}
            />
        </>
    );
};

export const WithMessageAction: Story = {
    render: () => <WithMessageActionExample />
};

const SuccessExample = () => {
    const [show, setShow] = useState(false);
    const toggleShow = () => {
        setShow(!show);
    };

    return (
        <>
            <Button onClick={toggleShow}>Show</Button>
            <Feedback
                show={show}
                variant="success"
                title="Something good!"
                message="With some more detailed message."
                onDismiss={toggleShow}
            />
        </>
    );
};

export const Success: Story = {
    render: () => <SuccessExample />
};

const CriticalExample = () => {
    const [show, setShow] = useState(false);
    const toggleShow = () => {
        setShow(!show);
    };

    return (
        <>
            <Button onClick={toggleShow}>Show</Button>
            <Feedback
                show={show}
                variant="critical"
                title="Something bad!"
                message="With some more detailed message."
                onDismiss={toggleShow}
            />
        </>
    );
};

export const Critical: Story = {
    render: () => <CriticalExample />
};
