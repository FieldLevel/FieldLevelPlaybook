import React from 'react';
import cx from 'classnames';

export interface InlineFieldProps {
    id: string;
    label: string;
    disabled?: boolean;
    children?: React.ReactNode;
}

export const InlineField = ({ id, label, disabled, children }: InlineFieldProps) => {
    return (
        <div className="relative flex items-start">
            <div className="flex items-center h-5 w-5">{children}</div>
            <div className="ml-2">
                <label className={cx('font-normal', disabled && 'text-disabled')} htmlFor={id}>
                    {label}
                </label>
            </div>
        </div>
    );
};
