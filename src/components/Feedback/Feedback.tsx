import React from 'react';
import cx from 'classnames';

import { Icon } from '../Icon';
import { Button } from '../Button';
import { CloseMajor } from '../../icons/Major';
import { ErrorMinor, CheckCircleMinor } from '../../icons/Minor';
import { useTimeout } from '../../utilities/use-timeout';

import * as styles from './Feedback.module.css';

interface Action {
    label: string;
    onClick?(): void;
}

type position = 'top' | 'right' | 'bottom' | 'left';
type variant = 'success' | 'critical';

export interface FeedbackProps {
    show: boolean;
    title: string;
    message?: string;
    variant?: variant;
    position?: position;
    offsetX?: number;
    offsetY?: number;
    duration?: number;
    customRendering?: React.ReactNode;
    action?: Action;
    onDismiss?(): void;
}

const variantIcon: { [key in variant]: JSX.Element } = {
    success: <Icon source={CheckCircleMinor} color="success" />,
    critical: <Icon source={ErrorMinor} color="critical" />
};

const animationStyle: { [key in position]: string } = {
    top: 'animate-slide-in-down-centered',
    bottom: 'animate-slide-in-up-centered',
    right: 'animate-slide-in-right',
    left: 'animate-slide-in-left'
};

const getPositionStyles = (position: position, offsetX: number, offsetY: number): React.CSSProperties => {
    const styles: React.CSSProperties = {};

    switch (position) {
        case 'top':
            styles.top = offsetY;
            styles.left = '50%';
            break;
        case 'bottom':
            styles.bottom = offsetY;
            styles.left = '50%';
            break;
        case 'left':
            styles.left = offsetX;
            styles.top = offsetY;
            break;
        case 'right':
            styles.right = offsetX;
            styles.top = offsetY;
    }

    return styles;
};

export const Feedback = ({
    show,
    title,
    message,
    variant,
    position = 'bottom',
    offsetX = 0,
    offsetY = 0,
    duration = 5000,
    customRendering,
    action,
    onDismiss
}: FeedbackProps) => {
    const iconContent = variant && variantIcon[variant];
    const cardStyle = cx(styles.Card, !message && styles.condensed, animationStyle[position]);
    const positionStyles = getPositionStyles(position, offsetX, offsetY);

    const dismiss = () => {
        onDismiss && onDismiss();
    };

    // Dismiss automatically after duration once shown
    useTimeout(dismiss, duration, show);

    // Warning for title length
    if (title.length > 40) {
        console.error('Feedback title should be shorter than 40 characters. Add longer content in message.');
    }

    const feedback = (
        <div className={styles.Feedback}>
            <div className={cardStyle} style={positionStyles}>
                {customRendering ? (
                    customRendering
                ) : (
                    <>
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
                    </>
                )}
            </div>
        </div>
    );

    return show ? feedback : null;
};
