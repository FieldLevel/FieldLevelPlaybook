/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Stack, Card } from '../../src';

const meta: Meta<typeof Stack> = {
    component: Stack
};

export default meta;

type Story = StoryObj<typeof Stack>;

const Dummy = ({ children }: { children?: any }) => (
    <div className="bg-primary-base px-6 py-4 w-full h-full rounded text-on-dark">{children}</div>
);
const DummyLarge = ({ children }: { children?: any }) => (
    <div className="bg-primary-base px-6 py-6 w-full h-full rounded text-on-dark">{children}</div>
);

export const Default: Story = {
    render: (args) => (
        <Stack {...args}>
            <Stack.Item>
                <Dummy />
            </Stack.Item>
            <Stack.Item>
                <DummyLarge />
            </Stack.Item>
            <Stack.Item>
                <Dummy />
            </Stack.Item>
        </Stack>
    )
};

export const Spacing: Story = {
    render: () => (
        <>
            <Card title="None">
                <Stack spacing="none">
                    <Dummy />
                    <Dummy />
                    <Dummy />
                </Stack>
            </Card>
            <Card title="Tight">
                <Stack spacing="tight">
                    <Dummy />
                    <Dummy />
                    <Dummy />
                </Stack>
            </Card>
            <Card title="Default">
                <Stack>
                    <Dummy />
                    <Dummy />
                    <Dummy />
                </Stack>
            </Card>
            <Card title="Loose">
                <Stack spacing="loose">
                    <Dummy />
                    <Dummy />
                    <Dummy />
                </Stack>
            </Card>
        </>
    )
};

export const Alignment: Story = {
    render: () => (
        <>
            <Card title="Start">
                <Stack align="start">
                    <Dummy />
                    <DummyLarge />
                    <Dummy />
                </Stack>
            </Card>
            <Card title="Center">
                <Stack align="center">
                    <Dummy />
                    <DummyLarge />
                    <Dummy />
                </Stack>
            </Card>
            <Card title="End">
                <Stack align="end">
                    <Dummy />
                    <DummyLarge />
                    <Dummy />
                </Stack>
            </Card>
        </>
    )
};

export const Distribution: Story = {
    render: () => (
        <>
            <Card title="Start">
                <Stack distribute="start">
                    <Dummy />
                    <DummyLarge />
                    <Dummy />
                </Stack>
            </Card>
            <Card title="Center">
                <Stack distribute="center">
                    <Dummy />
                    <DummyLarge />
                    <Dummy />
                </Stack>
            </Card>
            <Card title="End">
                <Stack distribute="end">
                    <Dummy />
                    <DummyLarge />
                    <Dummy />
                </Stack>
            </Card>
            <Card title="Between">
                <Stack distribute="between">
                    <Dummy />
                    <DummyLarge />
                    <Dummy />
                </Stack>
            </Card>
            <Card title="Fill">
                <Stack distribute="fill">
                    <Dummy />
                    <DummyLarge />
                    <Dummy />
                </Stack>
            </Card>
        </>
    )
};

export const Vertical: Story = {
    render: () => (
        <Stack vertical>
            <Dummy />
            <Dummy />
            <Dummy />
        </Stack>
    )
};

export const NoWrap: Story = {
    render: () => (
        <Stack noWrap>
            <Dummy>FieldLevels mission is to unlock your highest level of athletic achievement.</Dummy>
            <Dummy>FieldLevels mission is to unlock your highest level of athletic achievement.</Dummy>
            <Dummy>FieldLevels mission is to unlock your highest level of athletic achievement.</Dummy>
        </Stack>
    )
};

export const Fill: Story = {
    render: () => (
        <Stack>
            <Stack.Item>
                <Dummy />
            </Stack.Item>
            <Stack.Item fill>
                <Dummy />
            </Stack.Item>
        </Stack>
    )
};
