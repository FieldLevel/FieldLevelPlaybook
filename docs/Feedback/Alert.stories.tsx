/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { StoryObj, Meta } from '@storybook/react';

import { Alert, Link } from '../../src';

const meta: Meta<typeof Alert> = {
    component: Alert
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
    args: {
        variant: 'critical',
        title: 'Payment Error',
        children: 'Please update your payment method'
    }
};

export const TitleOnly: Story = {
    args: {
        variant: 'highlight',
        title: 'New version available'
    }
};

export const MessageOnly: Story = {
    args: {
        variant: 'warning',
        children: (
            <>
                Your trial will expire in 10 days. Click <Link url="#">here</Link> to update your plan.
            </>
        )
    }
};

export const WithContent: Story = {
    args: {
        variant: 'critical',
        title: 'There were errors submitting your payment',
        children: (
            <ul style={{ listStyle: 'disc' }}>
                <li>Your credit card may be expired.</li>
                <li>The CVV you entered may be incorrect.</li>
            </ul>
        )
    }
};
