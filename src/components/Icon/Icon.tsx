import React from 'react';
import cx from 'classnames';

import * as styles from './Icon.module.css';

type color = 'current' | 'muted' | 'critical' | 'warning' | 'highlight' | 'success' | 'onDark';

export interface IconProps {
    source: React.FC<React.SVGProps<SVGSVGElement>>;
    color?: color;
    classNames?: string;
}

const colorStyles: { [key in color]: string } = {
    current: styles.current,
    muted: styles.muted,
    critical: styles.critical,
    warning: styles.warning,
    highlight: styles.highlight,
    success: styles.success,
    onDark: styles.onDark
};

export const Icon = ({ source, color, classNames }: IconProps) => {
    const className = cx(styles.Icon, color && colorStyles[color], classNames);
    const SourceComponent = source;

    return (
        <span className={className}>
            <SourceComponent className={styles.Svg} />
        </span>
    );
};
