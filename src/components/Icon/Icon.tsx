import React from 'react';
import cx from 'classnames';

import styles from './Icon.module.css';

type color = 'current' | 'muted' | 'critical' | 'warning' | 'highlight' | 'success';

export interface IconProps {
    source: React.FC<React.SVGProps<SVGSVGElement>>;
    color?: color;
}

const colorStyles: { [key in color]: string } = {
    current: styles.current,
    muted: styles.muted,
    critical: styles.critical,
    warning: styles.warning,
    highlight: styles.highlight,
    success: styles.success
};

export const Icon = ({ source, color }: IconProps) => {
    const className = cx(styles.Icon, color && colorStyles[color]);
    const SourceComponent = source;

    return (
        <span className={className}>
            <SourceComponent className={styles.Svg} />
        </span>
    );
};
