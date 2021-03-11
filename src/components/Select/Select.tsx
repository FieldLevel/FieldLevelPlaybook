import React from 'react';
import cx from 'classnames';

import styles from './Select.module.css';

import { Icon } from '../Icon';
import { InlineError } from '../shared/InlineError';
import { useUniqueId } from '../../utilities/use-unique-id';

import { SelectMinor } from '../../icons/Minor';

export interface SelectProps {
    options: string[];
    name: string;
    value?: string;
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    error?: string;
    onChange?(value: string, name: string): void;
}

export const Select = ({ options, name, value, label, placeholder, disabled, error, onChange }: SelectProps) => {
    const id = useUniqueId(name);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange && onChange(event.currentTarget.value, event.currentTarget.name);
    };

    const labelContent = label && (
        <label htmlFor={id} className={styles.Label}>
            {label}
        </label>
    );

    const errorContent = error && (
        <div className="mt-1">
            <InlineError error={error} />
        </div>
    );

    const selectClass = cx(styles.Select, disabled && styles.disabled, error && styles.error);

    return (
        <div>
            {labelContent}
            <div className={selectClass}>
                <select
                    id={id}
                    name={name}
                    value={value || placeholder}
                    disabled={disabled}
                    onChange={handleChange}
                >
                    {placeholder && (
                        <option disabled value={placeholder}>
                            {placeholder}
                        </option>
                    )}
                    {options.map((option) => (
                        <option key={option}>{option}</option>
                    ))}
                </select>
                <div className={styles.Icon}>
                    <Icon source={SelectMinor} />
                </div>
            </div>
            {errorContent}
        </div>
    );
};
