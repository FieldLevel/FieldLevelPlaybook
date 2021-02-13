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

type variant = 'success' | 'critical' | 'condensed';
export interface FeedbackProps {
    show: boolean;
    title?: string;
    message?: string;
    variant?: variant;
    action?: Action;
    onDismiss?(): void;
}

const variantIcon: { [key in variant]: JSX.Element | null } = {
    success: <Icon source={CheckCircleMinor} color="success" />,
    critical: <Icon source={ErrorMinor} color="critical" />,
    condensed: null
};

export const Feedback = ({ show, title, message, variant = 'condensed', action, onDismiss }: FeedbackProps) => {
    const iconContent = variantIcon[variant];
    const isCondensed = variant === 'condensed';
    const cardStyle = cx(styles.Card, isCondensed && styles.condensed);

    if (isCondensed && message) {
        console.error("Feedback in condensed mode doesn't display message. Use title instead.");
    }

    const dismiss = useCallback(() => {
        onDismiss && onDismiss();
    }, [onDismiss]);

    // Dismiss after 5 seconds once shown
    useTimeout(dismiss, 5000, show);

    const feedback = (
        <div className={styles.Feedback}>
            <div className={cardStyle}>
                {iconContent && <div className={styles.Icon}>{iconContent}</div>}
                <div className={styles.Content}>
                    <p className={styles.Title}>{title}</p>
                    {!isCondensed && <p className={styles.Message}>{message}</p>}
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
