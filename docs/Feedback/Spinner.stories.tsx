/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { Spinner } from '../../src';

export const Default = (args: any) => <Spinner {...args} />;

export const Small = () => <Spinner size="small" />;
