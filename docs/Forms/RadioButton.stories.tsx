/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { RadioButton } from '../../src';

export const Default = (args: any) => <RadioButton name="baseball" label="Baseball" {...args} />;

export const Checked = () => <RadioButton name="football" label="Football" checked />;

export const Disabled = () => <RadioButton name="basketball" label="Basketball" disabled />;
