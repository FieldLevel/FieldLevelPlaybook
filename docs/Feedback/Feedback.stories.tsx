/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useCallback } from 'react';

import { Feedback, Button } from '../../src';

export const Default = (args: any) => {
    const [show, setShow] = useState(false);
    const toggleShow = useCallback(() => {
        setShow(!show);
    }, [show]);

    return (
        <>
            <Button onClick={toggleShow}>Show</Button>
            <Feedback show={show} title="Something happened!" onDismiss={toggleShow} {...args} />
        </>
    );
};

export const WithAction = () => {
    const [show, setShow] = useState(false);
    const toggleShow = useCallback(() => {
        setShow(!show);
    }, [show]);

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

export const Success = () => {
    const [show, setShow] = useState(false);
    const toggleShow = useCallback(() => {
        setShow(!show);
    }, [show]);

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

export const SuccessAction = () => {
    const [show, setShow] = useState(false);
    const toggleShow = useCallback(() => {
        setShow(!show);
    }, [show]);

    return (
        <>
            <Button onClick={toggleShow}>Show</Button>
            <Feedback
                show={show}
                variant="success"
                title="Something good!"
                message="With some more detailed message."
                action={{
                    label: 'Undo',
                    onClick: () => {
                        alert('Undid!');
                    }
                }}
                onDismiss={toggleShow}
            />
        </>
    );
};

export const Critical = () => {
    const [show, setShow] = useState(false);
    const toggleShow = useCallback(() => {
        setShow(!show);
    }, [show]);

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

export const CriticalAction = () => {
    const [show, setShow] = useState(false);
    const toggleShow = useCallback(() => {
        setShow(!show);
    }, [show]);

    return (
        <>
            <Button onClick={toggleShow}>Show</Button>
            <Feedback
                show={show}
                variant="critical"
                title="Something bad!"
                message="With some more detailed message."
                action={{
                    label: 'Undo',
                    onClick: () => {
                        alert('Undid!');
                    }
                }}
                onDismiss={toggleShow}
            />
        </>
    );
};
