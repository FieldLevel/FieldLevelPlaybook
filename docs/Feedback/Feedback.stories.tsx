/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { StoryObj, Meta } from '@storybook/react';

import { Feedback, FeedbackProps, Button, Avatar } from '../../src';

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
            <Feedback show={show} message="Something happened!" onDismiss={toggleShow} {...args} />
        </>
    );
};

export const Default: Story = {
    render: (args) => <DefaultExample {...args} />
};

export const WithAction: Story = {
    render: () => {
        const [show, setShow] = useState(false);
        const toggleShow = () => {
            setShow(!show);
        };

        return (
            <>
                <Button onClick={toggleShow}>Show</Button>
                <Feedback
                    show={show}
                    message="Something happened!"
                    onDismiss={toggleShow}
                    action={{
                        label: 'Undo',
                        onClick: () => {
                            alert('Undid it!');
                        }
                    }}
                />
            </>
        );
    }
};

export const Success: Story = {
    render: () => {
        const [show, setShow] = useState(false);
        const toggleShow = () => {
            setShow(!show);
        };

        return (
            <>
                <Button onClick={toggleShow}>Show</Button>
                <Feedback show={show} variant="success" message="Something good!" onDismiss={toggleShow} />
            </>
        );
    }
};

export const Critical: Story = {
    render: () => {
        const [show, setShow] = useState(false);
        const toggleShow = () => {
            setShow(!show);
        };

        return (
            <>
                <Button onClick={toggleShow}>Show</Button>
                <Feedback show={show} variant="critical" message="Something bad!" onDismiss={toggleShow} />
            </>
        );
    }
};

export const Custom: Story = {
    render: () => {
        const [show, setShow] = useState(false);
        const toggleShow = () => {
            setShow(!show);
        };

        return (
            <>
                <Button onClick={toggleShow}>Show</Button>
                <Feedback
                    show={show}
                    onDismiss={toggleShow}
                    customRendering={
                        <div className="flex items-center gap-2">
                            <Avatar source="http://placecats.com/80/80" />
                            <span>
                                Some completely <span className="font-bold">custom</span> content
                            </span>
                        </div>
                    }
                />
            </>
        );
    }
};

export const Position: Story = {
    render: () => {
        const [show, setShow] = useState(false);
        const toggleShow = () => {
            setShow(!show);
        };

        return (
            <>
                <Button onClick={toggleShow}>Show</Button>
                <Feedback
                    show={show}
                    position="right"
                    offsetX={100}
                    onDismiss={toggleShow}
                    message="Coming in from the right"
                />
            </>
        );
    }
};

export const Duration: Story = {
    render: () => {
        const [show, setShow] = useState(false);
        const toggleShow = () => {
            setShow(!show);
        };

        return (
            <>
                <Button onClick={toggleShow}>Show</Button>
                <Feedback
                    show={show}
                    onDismiss={toggleShow}
                    duration={10000}
                    message="Should stay visible for longer"
                />
            </>
        );
    }
};
