/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { ButtonGroup, Button, Card } from '../../src';

export const Default = (args: any) => (
    <ButtonGroup {...args}>
        <Button>Save</Button>
        <Button>Cancel</Button>
    </ButtonGroup>
);

export const Spacing = () => (
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
);

export const Distribute = () => (
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
);

export const Vertical = () => (
    <div className="w-80">
        <ButtonGroup vertical>
            <Button variant="primary" fullWidth>
                Continue
            </Button>
            <Button fullWidth>Cancel</Button>
        </ButtonGroup>
    </div>
);
