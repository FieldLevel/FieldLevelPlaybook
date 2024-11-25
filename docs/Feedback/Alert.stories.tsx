/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { Alert, Link } from '../../src';

export const Default = (args: any) => {
    return (
        <>
            <Alert variant="critical" title="Payment Error" {...args}>
                Please update your payment method.
            </Alert>
        </>
    );
};

export const TitleOnly = () => {
    return (
        <>
            <Alert variant="highlight" title="New version available"></Alert>
        </>
    );
};

export const MessageOnly = () => {
    return (
        <>
            <Alert variant="warning">
                Your trial will expire in 10 days. Click <Link url="#">here</Link> to update your plan.
            </Alert>
        </>
    );
};

export const WithContent = () => {
    return (
        <>
            <Alert variant="critical" title="There were errors submitting your payment">
                <ul style={{ listStyle: 'disc' }}>
                    <li>Your credit card may be expired.</li>
                    <li>The CVV you entered may be incorrect.</li>
                </ul>
            </Alert>
        </>
    );
};
