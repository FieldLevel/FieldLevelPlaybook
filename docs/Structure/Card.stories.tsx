/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { Card } from '../../src';

export const Default = (args: any) => (
    <Card title="Basic card" {...args}>
        This card has a title and some content!
    </Card>
);

export const NoTitle = () => <Card>This card has no title.</Card>;

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
