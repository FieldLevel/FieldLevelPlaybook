/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Link } from '../../src';

const meta: Meta<typeof Link> = {
    component: Link
};

export default meta;

type Story = StoryObj<typeof Link>;

export const Default: Story = {
    args: {
        url: '#'
    }
};

export const Unstyled: Story = {
    args: {
        url: 'https://www.fieldlevel.com',
        unstyled: true,
        children: <div className="p-6 border rounded">This whole card is a link.</div>
    }
};

export const Target: Story = {
    args: {
        url: 'https://recruiting.fieldlevel.com',
        target: '_blank',
        children: 'Recruiting Guidance'
    }
};

export const ClickEvent: Story = {
    args: {
        url: '#',
        onClick: (e) => {
            e.preventDefault();
            alert('Clicked!');
        },
        children: 'Click me!'
    }
};
