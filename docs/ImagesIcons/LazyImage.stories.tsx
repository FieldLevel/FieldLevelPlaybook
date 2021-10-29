/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { LazyImage, Stack } from '../../src';

export const Default = (args: any) => (
    <div className="h-10 w-10">
        <LazyImage {...args} />
    </div>
);

Default.args = {
    src: 'http://placekitten.com/80/80',
    width: 40,
    height: 40
};

export const Lazy = () => {
    const images = 16;
    const urls: string[] = [];

    for (let i = 1; i <= images; i++) {
        urls.push(`http://placekitten.com/80/80?image=${i}`);
    }

    return (
        <Stack vertical>
            {urls.map((url, index) => (
                <Stack.Item key={index}>
                    <div className="h-10 w-10 pb-4">
                        <LazyImage src={url} height={40} width={40} />
                    </div>
                </Stack.Item>
            ))}
        </Stack>
    );
};
