import React from 'react';
import cx from 'classnames';

import { Icon } from '../Icon';
import { ErrorMinor, InformationMinor, WarningMinor } from '../../icons/Minor';

import * as styles from './Alert.module.css';

type variant = 'highlight' | 'critical' | 'warning';
export interface AlertProps {
    title?: string;
    children?: React.ReactNode;
    variant: variant;
    classNames?: string;
}

const variantIcon: { [key in variant]: JSX.Element } = {
    warning: <Icon source={WarningMinor} color="warning" />,
    critical: <Icon source={ErrorMinor} color="critical" />,
    highlight: <Icon source={InformationMinor} color="highlight" />
};

const variantColor: { [key in variant]: string } = {
    warning: styles.warning,
    critical: styles.critical,
    highlight: styles.highlight
};

export const Alert = ({ title, children, variant, classNames }: AlertProps) => {
    const iconContent = variantIcon[variant];
    const alertStyle = cx(styles.Alert, variantColor[variant], classNames);

    if (variant === undefined) {
        console.error('Alerts must have a variant specified.');
    }

    return (
        <div className={alertStyle}>
            <div className={styles.Card}>
                {iconContent && <div className={styles.Icon}>{iconContent}</div>}
                <div className={styles.Content}>
                    {title && <p className={styles.Title}>{title}</p>}
                    {children && <div>{children}</div>}
                </div>
            </div>
        </div>
    );
};
