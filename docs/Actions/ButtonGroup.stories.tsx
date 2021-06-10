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
