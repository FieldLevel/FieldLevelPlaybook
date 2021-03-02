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

export const TextColor = ({ name, dark }) => (
    <div className={cx('block bg-transparent h-6 w-18 px-2 text-center rounded', dark && 'bg-primary-base', name)}>
        Example
    </div>
);

export const BgColor = ({ name }) => <div className={cx('block h-6 w-16 rounded', name)}></div>;

export const BorderColor = ({ name }) => (
    <div className={cx('block h-6 w-16 border-2 bg-background-base rounded', name)}></div>
);

export const TextStyle = ({ name }) => <div className={name}>Example</div>;
