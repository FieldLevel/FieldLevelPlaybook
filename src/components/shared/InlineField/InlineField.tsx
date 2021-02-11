import React from 'react';

export interface InlineFieldProps {
    id: string;
    label: string;
    disabled?: boolean;
    children?: React.ReactNode;
}

export const InlineField = ({ id, label, children }: InlineFieldProps) => {
    return (
        <div className="relative flex items-start">
            <div className="flex items-center h-5 w-5">{children}</div>
            <div className="ml-2">
                <label className="font-normal" htmlFor={id}>
                    {label}
                </label>
            </div>
        </div>
    );
};
