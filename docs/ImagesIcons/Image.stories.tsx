/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { Image, Stack } from '../../src';

export const Default = (args: any) => <Image {...args} src="http://placekitten.com/80/80" />;

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
                    <div className="pb-4">
                        <Image lazy src={url} height={40} width={40} />
                    </div>
                </Stack.Item>
            ))}
        </Stack>
    );
};
