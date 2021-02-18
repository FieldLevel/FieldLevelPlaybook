/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { Card } from '../../src';

export const Default = (args: any) => (
    <Card title="Basic card" {...args}>
        This card has a title and some content!
    </Card>
);

export const NoTitle = () => <Card>This card has no title.</Card>;

export const Subtitle = () => (
    <Card title="Basic Card" subtitle="With some subtitle content">
        This card has both a title and a subtitle!
    </Card>
);

export const MultipleSections = () => (
    <Card title="Multiple Sections">
        <Card.Section>Section 1</Card.Section>
        <Card.Section>Section 2</Card.Section>
    </Card>
);

export const SectionTitles = () => (
    <Card title="Multiple Sections">
        <Card.Section title="Section 1">Section 1 Content</Card.Section>
        <Card.Section title="Section 2">Section 2 Content</Card.Section>
    </Card>
);

export const Spacing = () => (
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
);
