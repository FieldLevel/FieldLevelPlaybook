/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Card } from '../../src';

const meta: Meta<typeof Card> = {
    component: Card
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
    args: {
        title: 'Basic card',
        children: 'This card has a title and some content!'
    }
};

export const NoTitle: Story = {
    args: {
        children: 'This card has no title.'
    }
};

export const Subtitle: Story = {
    args: {
        title: 'Basic Card',
        subtitle: 'With some subtitle content',
        children: 'This card has both a title and a subtitle!'
    }
};

export const MultipleSections: Story = {
    args: {
        title: 'Multiple sections',
        children: (
            <>
                <Card.Section>Section 1</Card.Section>
                <Card.Section>Section 2</Card.Section>
            </>
        )
    }
};

export const SectionTitles: Story = {
    args: {
        title: 'Multiple Sections',
        children: (
            <>
                <Card.Section title="Section 1">Section 1 Content</Card.Section>
                <Card.Section title="Section 2">Section 2 Content</Card.Section>
            </>
        )
    }
};

export const Spacing: Story = {
    render: () => (
        <>
            <Card title="None" spacing="none">
                No spacing
            </Card>
            <Card title="Tight" spacing="tight">
                Tight spacing
            </Card>
            <Card title="Loose" spacing="loose">
                Loose spacing
            </Card>
        </>
    )
};
