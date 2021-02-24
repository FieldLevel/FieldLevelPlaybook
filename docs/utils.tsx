import React from 'react';
import cx from 'classnames';

const colorStyles = {
    success: 'text-success bg-background-success',
    warning: 'text-warning bg-background-warning',
    critical: 'text-critical bg-background-critical',
    muted: 'text-muted bg-background-muted'
};

const Badge = ({ type, children }) => {
    const colorStyle = colorStyles[type];
    const style = cx('inline-block mt-2 px-2 py-0.5 rounded shadow', colorStyle);
    return <div className={style}>{children}</div>;
};

export const InDevelopment = () => <Badge type="warning">In Development</Badge>;

export const Released = ({ version }) => <Badge type="success">Released in v{version}</Badge>;

export const Deprecated = ({ version }) => <Badge type="critical">Deprecated in v{version}</Badge>;

export const Planned = () => <Badge type="muted">Planned</Badge>;
