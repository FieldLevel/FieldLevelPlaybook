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

export const Cover = () => {
    return (
        <Stack>
            <div className="h-20 w-20">
                <LazyImage src="http://placekitten.com/80/120" height={80} width={80} />
            </div>
            <div className="h-20 w-20">
                <LazyImage src="http://placekitten.com/80/120" height={80} width={80} cover />
            </div>
        </Stack>
    );
};
