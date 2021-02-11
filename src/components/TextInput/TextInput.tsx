import React from 'react';
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
    disabled?: boolean;
    readonly?: boolean;
    icon?: React.FC<React.SVGProps<SVGSVGElement>>;
    error?: string;
    onChange?(value: string, name: string): void;
}

export const TextInput = ({
    name,
    type,
    label,
    action,
    value,
    placeholder,
    disabled,
    readonly,
    icon,
    error,
    onChange
}: TextInputProps) => {
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
            <Link url={action.url} onClick={action.onClick}>
                {action.label}
            </Link>
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
        error && styles.error
    );

    return (
        <div className={inputClass}>
            {labelContent}
            {actionContent}
            <div className={styles.Wrapper}>
                {iconContent}
                <input
                    id={id}
                    type={type || 'text'}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    readOnly={readonly}
                    disabled={disabled}
                    onChange={handleChange}
                ></input>
            </div>
            {errorContent}
        </div>
    );
};
