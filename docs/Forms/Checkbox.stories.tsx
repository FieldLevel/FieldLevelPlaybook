/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useCallback } from 'react';

import { Checkbox } from '../../src';

export const Default = (args: any) => <Checkbox name="text" label="Text me important information" {...args} />;

export const Controlled = () => {
    const [checked, setChecked] = useState(true);
    const handleChange = useCallback(
        (value) => {
            setChecked(value);
        },
        [checked]
    );
    return <Checkbox name="text" label="Text me important information" checked={checked} onChange={handleChange} />;
};

export const Checked = () => <Checkbox name="text" label="Text me important information" checked />;

export const Disabled = () => <Checkbox name="text" label="Text me important information" disabled />;
