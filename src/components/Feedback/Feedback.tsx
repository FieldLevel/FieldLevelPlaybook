import React, { useCallback } from 'react';
import cx from 'classnames';

import { Icon } from '../Icon';
import { Button } from '../Button';
import { CloseMajor } from '../../icons/Major';
import { ErrorMinor, CheckCircleMinor } from '../../icons/Minor';
import { useTimeout } from '../../utilities/use-timeout';

import styles from './Feedback.module.css';

interface Action {
    label: string;
    onClick?(): void;
}

type variant = 'success' | 'critical';
export interface FeedbackProps {
    show: boolean;
    title?: string;
    message?: string;
    variant?: variant;
    action?: Action;
    onDismiss?(): void;
}

const variantIcon: { [key in variant]: JSX.Element } = {
    success: <Icon source={CheckCircleMinor} color="success" />,
    critical: <Icon source={ErrorMinor} color="critical" />
};

export const Feedback = ({ show, title, message, variant, action, onDismiss }: FeedbackProps) => {
    const iconContent = variant && variantIcon[variant];
    const cardStyle = cx(styles.Card, !message && styles.condensed);

    const dismiss = useCallback(() => {
        onDismiss && onDismiss();
    }, [onDismiss]);

    // Dismiss after 5 seconds once shown
    useTimeout(dismiss, 5000, show);

    // Warning for title length
    if (title && title.length > 40) {
        console.error('Feedback title should be shorter than 40 characters. Add longer content in message.');
    }

    const feedback = (
        <div className={styles.Feedback}>
            <div className={cardStyle}>
                {iconContent && <div className={styles.Icon}>{iconContent}</div>}
                <div className={styles.Content}>
                    <p className={styles.Title}>{title}</p>
                    {message && <p className={styles.Message}>{message}</p>}
                    {action && <Button>{action.label}</Button>}
                </div>
                <div className={styles.Close}>
                    <button onClick={onDismiss}>
                        <span className="sr-only">Close</span>
                        <Icon source={CloseMajor} />
                    </button>
                </div>
            </div>
        </div>
    );

    return show ? feedback : null;
};
