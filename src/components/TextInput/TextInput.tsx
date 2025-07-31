import React, { createElement, useState, useEffect, useRef, useImperativeHandle } from 'react';
import type { Ref } from 'react';
import cx from 'classnames';

import { Icon } from '../Icon';
import { Link } from '../Link';
import { InlineError } from '../shared/InlineError';
import { useUniqueId } from '../../utilities/use-unique-id';

import * as styles from './TextInput.module.css';

const LineHeight = 20;

type SizeValue = 'large';

type TypeValue =
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

type AutoCompleteValue = 'off' | 'on' | 'new-password' | 'current-password' | 'email' | 'username' | 'name' | string;

type Action = {
    label?: string;
    url?: string;
    onClick?(): void;
};

export interface TextInputProps {
    name: string;
    type?: TypeValue;
    autoComplete?: AutoCompleteValue;
    label?: string;
    action?: Action;
    value?: string;
    min?: number;
    max?: number;
    step?: number | 'any';
    placeholder?: string;
    size?: SizeValue;
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
        autoComplete,
        label,
        action,
        value,
        min,
        max,
        step,
        placeholder,
        size,
        rows,
        maxRows,
        maxLength,
        disabled,
        readonly,
        icon,
        error,
        onChange
    }: TextInputProps,
    forwardedRef: Ref<HTMLInputElement | HTMLTextAreaElement | null>
) {
    const id = useUniqueId(name);
    const [currentRows, setCurrentRows] = useState(rows);
    const inputRef = useRef<HTMLInputElement>(null);
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    useImperativeHandle(forwardedRef, () => (rows ? textAreaRef?.current : inputRef?.current));

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

    const resizeTextAreaRows = () => {
        const el = textAreaRef?.current;

        if (!el) return;

        const previousRows = el.rows;

        // Reset textarea to the initial rows so that auto-shrink works
        el.rows = rows ?? 1;

        // Calculate the total rows needed for the current content
        const contentRows = Math.floor(el.scrollHeight / LineHeight);

        // If we already had the right number of rows use that
        if (contentRows === previousRows) {
            el.rows = previousRows;
        }

        // If we will exceed the max, set to max and fix the scroll position
        if (contentRows >= multiMaxRows) {
            el.rows = multiMaxRows;
            el.scrollTop = el.scrollHeight;
        }

        // Finally, set the new current rows to content or max
        const visibleRows = contentRows < multiMaxRows ? contentRows : multiMaxRows;
        setCurrentRows(visibleRows);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (readonly) return;

        resizeTextAreaRows();

        onChange && onChange(event.currentTarget.value, event.currentTarget.name);
    };

    useEffect(() => {
        resizeTextAreaRows();
    }, [value]);

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
        <div className="mt-2">
            <InlineError error={error} />
        </div>
    );

    const inputClass = cx(
        styles.TextInput,
        icon && styles.withIcon,
        size === 'large' && styles.large,
        disabled && styles.disabled,
        readonly && styles.readonly,
        error && styles.error
    );

    const inputEl = createElement(rows ? 'textarea' : 'input', {
        id,
        type: type || 'text',
        autoComplete,
        name,
        value,
        min,
        max,
        step,
        placeholder,
        maxLength,
        rows: rows && (currentRows || 1),
        readOnly: readonly,
        disabled,
        onChange: handleChange,
        ref: rows ? textAreaRef : inputRef
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
