/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { ButtonGroup, Button, Card } from '../../src';

const meta: Meta<typeof ButtonGroup> = {
    component: ButtonGroup
};

export default meta;

type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {
    render: (args) => (
        <ButtonGroup {...args}>
            <Button>Save</Button>
            <Button>Cancel</Button>
        </ButtonGroup>
    )
};

export const Spacing: Story = {
    render: () => (
        <>
            <Card title="Tight">
                <ButtonGroup spacing="tight">
                    <Button size="slim">Save</Button>
                    <Button size="slim">Cancel</Button>
                </ButtonGroup>
            </Card>
            <Card title="Base">
                <ButtonGroup>
                    <Button>Save</Button>
                    <Button>Cancel</Button>
                </ButtonGroup>
            </Card>
            <Card title="Loose">
                <ButtonGroup spacing="loose">
                    <Button size="large">Save</Button>
                    <Button size="large">Cancel</Button>
                </ButtonGroup>
            </Card>
        </>
    )
};

export const Distribute: Story = {
    render: () => (
        <>
            <Card title="End">
                <ButtonGroup distribute="end">
                    <Button>Save</Button>
                    <Button>Cancel</Button>
                </ButtonGroup>
            </Card>
            <Card title="Between">
                <ButtonGroup distribute="between">
                    <Button>Save</Button>
                    <Button>Cancel</Button>
                </ButtonGroup>
            </Card>
            <Card title="Between with multiple buttons">
                <ButtonGroup distribute="between">
                    <Button>Save</Button>
                    <Button>Other</Button>
                    <Button>Cancel</Button>
                </ButtonGroup>
            </Card>
        </>
    )
};

export const Vertical: Story = {
    render: () => (
        <div className="w-80">
            <ButtonGroup vertical>
                <Button variant="primary" fullWidth>
                    Continue
                </Button>
                <Button fullWidth>Cancel</Button>
            </ButtonGroup>
        </div>
    )
};
