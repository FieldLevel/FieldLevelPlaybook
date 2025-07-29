import React from 'react';
import cx from 'classnames';

import { Icon } from '../Icon';
import { Button } from '../Button';
import { ErrorMinor, CheckCircleMinor, CloseMinor } from '../../icons/Minor';
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
    /**
     * @deprecated Use message instead
     */
    title?: string;
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
    const cardStyle = cx(styles.Card, animationStyle[position]);
    const positionStyles = getPositionStyles(position, offsetX, offsetY);

    const dismiss = () => {
        onDismiss && onDismiss();
    };

    // Dismiss automatically after duration once shown
    useTimeout(dismiss, duration, show);

    // Phasing out the use of title
    // If both a title and a message are passed we are just using the message
    // If only title is passed we are using it as the message
    if (title && message) {
        console.warn(
            'Feedback :: The title prop has been deprecated. Since both title and message were passed we are only displaying the message.'
        );
    } else if (title) {
        console.warn('Feedback :: The title prop has been deprecated. Use message instead.');
        message = title;
    }

    const feedback = (
        <div className={styles.Feedback}>
            <div className={cardStyle} style={positionStyles}>
                {customRendering ? (
                    customRendering
                ) : (
                    <div className={styles.Content}>
                        {iconContent && <div className={styles.Icon}>{iconContent}</div>}
                        <span className={styles.Message}>
                            {message && <p>{message}</p>}
                            {action && (
                                <span>
                                    <Button size="slim" onClick={action.onClick}>
                                        {action.label}
                                    </Button>
                                </span>
                            )}
                        </span>
                        <span className={styles.Close}>
                            <button onClick={onDismiss}>
                                <span className="sr-only">Close</span>
                                <Icon source={CloseMinor} />
                            </button>
                        </span>
                    </div>
                )}
            </div>
        </div>
    );

    return show ? feedback : null;
};
