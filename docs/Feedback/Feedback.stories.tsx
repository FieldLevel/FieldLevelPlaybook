/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';

import { Feedback, Button } from '../../src';

export const Default = (args: any) => {
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

export const WithAction = () => {
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

export const WithMessage = () => {
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

export const WithMessageAction = () => {
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

export const Success = () => {
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

export const Critical = () => {
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
