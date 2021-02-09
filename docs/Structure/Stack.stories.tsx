/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { Stack, Card } from '../../src';

const Dummy = ({ children }: { children?: any }) => (
    <div className="bg-primary-base px-6 py-4 w-full h-full rounded text-dark text-body-sm">{children}</div>
);
const DummyLarge = ({ children }: { children?: any }) => (
    <div className="bg-primary-base px-6 py-6 w-full h-full rounded text-dark text-body-sm">{children}</div>
);

export const Default = (args: any) => (
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
);

export const Spacing = () => (
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
);

export const Alignment = () => (
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
);

export const Distribution = () => (
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
);

export const Vertical = () => (
    <Stack vertical>
        <Dummy />
        <Dummy />
        <Dummy />
    </Stack>
);

export const NoWrap = () => (
    <Stack noWrap>
        <Dummy>FieldLevel's mission is to unlock your highest level of athletic achievement.</Dummy>
        <Dummy>FieldLevel's mission is to unlock your highest level of athletic achievement.</Dummy>
        <Dummy>FieldLevel's mission is to unlock your highest level of athletic achievement.</Dummy>
    </Stack>
);

export const Fill = () => (
    <Stack>
        <Stack.Item>
            <Dummy />
        </Stack.Item>
        <Stack.Item fill>
            <Dummy />
        </Stack.Item>
    </Stack>
);
