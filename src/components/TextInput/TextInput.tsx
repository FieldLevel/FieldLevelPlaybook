import React, { createElement, Ref } from 'react';
import cx from 'classnames';

import { Icon } from '../Icon';
import { Link } from '../Link';
import { InlineError } from '../shared/InlineError';
import { useUniqueId } from '../../utilities/use-unique-id';

import styles from './TextInput.module.css';

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
    multiline?: boolean;
    maxLength?: number;
    disabled?: boolean;
    readonly?: boolean;
    icon?: React.FC<React.SVGProps<SVGSVGElement>>;
    error?: string;
    onChange?(value: string, name: string): void;
}

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
    (
        {
            name,
            type,
            label,
            action,
            value,
            placeholder,
            multiline,
            maxLength,
            disabled,
            readonly,
            icon,
            error,
            onChange
        }: TextInputProps,
        ref: Ref<HTMLInputElement>
    ) => {
        const id = useUniqueId(name);

        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            if (readonly) {
                return;
            }
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

        const inputEl = createElement(multiline ? 'textarea' : 'input', {
            id,
            type: type || 'text',
            name,
            value,
            placeholder,
            maxLength,
            rows: 3,
            readOnly: readonly,
            disabled,
            onChange: handleChange,
            ref: ref
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
    }
);
