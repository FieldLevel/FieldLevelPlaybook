import React from 'react';
import cx from 'classnames';

import { Icon } from '../Icon';
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

export interface TextInputProps {
    name: string;
    type?: Type;
    label?: string;
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    icon?: React.FC<React.SVGProps<SVGSVGElement>>;
    error?: string;
    onChange?(value: string, name: string): void;
}

export const TextInput = ({
    name,
    type,
    label,
    value,
    placeholder,
    disabled,
    icon,
    error,
    onChange
}: TextInputProps) => {
    const id = useUniqueId(name);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(event.currentTarget.value, event.currentTarget.name);
    };

    const labelContent = label && (
        <label htmlFor={id} className={styles.Label}>
            {label}
        </label>
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
        <div>
            {labelContent}
            <div className={inputClass}>
                {iconContent}
                <input
                    id={id}
                    type={type || 'text'}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    disabled={disabled}
                    onChange={handleChange}
                ></input>
            </div>
            {errorContent}
        </div>
    );
};
