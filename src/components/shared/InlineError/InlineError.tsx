import React from 'react';

import { Icon } from '../../Icon';
import { ErrorMinor } from '../../../icons/Minor';

import * as styles from './InlineError.module.css';

export interface InlineErrorProps {
    error?: string;
}

export const InlineError = ({ error }: InlineErrorProps) => {
    return (
        <div className={styles.InlineError}>
            <span className="flex-initial">
                <Icon source={ErrorMinor} color="critical" />
            </span>
            <p className={styles.Message}>{error}</p>
        </div>
    );
};
