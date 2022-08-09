import React, { createElement, useState } from 'react';
import type { Ref } from 'react';
import cx from 'classnames';

import { Icon } from '../Icon';
import { Link } from '../Link';
import { InlineError } from '../shared/InlineError';
import { useUniqueId } from '../../utilities/use-unique-id';

import styles from './TextInput.module.css';

const LineHeight = 20;

type Type =
    | 'text'
    | 'email'
    | 'number'
    | 'password'
    | 'search'
    | 'tel'
    | 'url'
    | 'date'
    | 'datetime-local'
    | 'month'
    | 'time'
    | 'week'
    | 'currency';

type Action = {
    label?: string;
    url?: string;
    onClick?(): void;
};

export interface TextInputProps {
    name: string;
    type?: Type;
    label?: string;
    action?: Action;
    value?: string;
    placeholder?: string;
    /**
     * @deprecated Use rows and maxRows instead
     */
    multiline?: boolean;
    rows?: number;
    maxRows?: number;
    maxLength?: number;
    disabled?: boolean;
    readonly?: boolean;
    icon?: React.FC<React.SVGProps<SVGSVGElement>>;
    error?: string;
    onChange?(value: string, name: string): void;
}

export const TextInput = React.forwardRef(function TextInput(
    {
        name,
        type,
        label,
        action,
        value,
        placeholder,
        multiline,
        rows,
        maxRows,
        maxLength,
        disabled,
        readonly,
        icon,
        error,
        onChange
    }: TextInputProps,
    forwardedRef: Ref<HTMLInputElement | HTMLTextAreaElement>
) {
    const id = useUniqueId(name);
    const [currentRows, setCurrentRows] = useState(rows);

    if (multiline) {
        rows = 3;
        console.warn(
            `TextInput :: The multiline prop has been deprecated. Use rows and maxRows to control multiline behavior.`
        );
    }

    let multiMaxRows: number;
    if (rows) {
        multiMaxRows = maxRows || rows;
        if (multiMaxRows < rows) {
            multiMaxRows = rows;
            console.warn(
                `TextInput :: The value for rows cannot be greater than maxRows. Using maxRows of ${multiMaxRows} instead.`
            );
        }
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (readonly) return;

        onChange && onChange(event.currentTarget.value, event.currentTarget.name);
    };

    const handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (readonly) return;

        const target = event.target;
        const previousRows = target.rows;

        // Reset textarea to the initial rows so that auto-shrink works
        target.rows = rows ?? 1;

        // Calculate the total rows needed for the current content
        const contentRows = Math.floor(target.scrollHeight / LineHeight);

        // If we already had the right number of rows use that
        if (contentRows === previousRows) {
            target.rows = previousRows;
        }

        // If we will exceed the max, set to max and fix the scroll position
        if (contentRows >= multiMaxRows) {
            target.rows = multiMaxRows;
            target.scrollTop = target.scrollHeight;
        }

        // Finally, set the new current rows to content or max
        const visibleRows = contentRows < multiMaxRows ? contentRows : multiMaxRows;
        setCurrentRows(visibleRows);

        onChange && onChange(event.currentTarget.value, event.currentTarget.name);
    };

    const labelContent = label && (
        <label htmlFor={id} className={styles.Label}>
            {label}
        </label>
    );

    const actionContent = action && (
        <div className={styles.Action}>
            {action.onClick ? (
                <button onClick={action.onClick}>{action.label}</button>
            ) : (
                <Link url={action.url}>{action.label}</Link>
            )}
        </div>
    );

    const iconContent = icon && (
        <div className={styles.Icon}>
            <Icon source={icon} />
        </div>
    );

    const errorContent = error && (
        <div className="mt-1">
            <InlineError error={error} />
        </div>
    );

    const inputClass = cx(
        styles.TextInput,
        icon && styles.withIcon,
        disabled && styles.disabled,
        readonly && styles.readonly,
        error && styles.error
    );

    const inputEl = createElement(rows ? 'textarea' : 'input', {
        id,
        type: type || 'text',
        name,
        value,
        placeholder,
        maxLength,
        rows: rows && currentRows,
        readOnly: readonly,
        disabled,
        onChange: rows ? handleTextAreaChange : handleInputChange,
        ref: forwardedRef
    });

    return (
        <div className={inputClass}>
            {labelContent}
            {actionContent}
            <div className={styles.Wrapper}>
                {iconContent}
                {inputEl}
            </div>
            {errorContent}
        </div>
    );
});
