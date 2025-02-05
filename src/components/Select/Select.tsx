import React from 'react';
import cx from 'classnames';

import * as styles from './Select.module.css';

import { Icon } from '../Icon';
import { InlineError } from '../shared/InlineError';
import { useUniqueId } from '../../utilities/use-unique-id';

import { SelectMinor } from '../../icons/Minor';

type Option = {
    label: string;
    value: string;
};

export interface SelectProps {
    options: (string | Option)[];
    name: string;
    value?: string;
    label?: string;
    placeholder?: string | Option;
    disabled?: boolean;
    error?: string;
    onChange?(value: string, name: string): void;
}

const standardizeOptions = (options: (string | Option)[]): Option[] => {
    return options.map((option: string | Option): Option => {
        if (typeof option === 'string') {
            return { label: option, value: option } as Option;
        } else {
            return option;
        }
    });
};

const standardizePlaceholder = (placeholder: string | Option): Option => {
    if (typeof placeholder === 'string') {
        return { label: placeholder, value: placeholder } as Option;
    } else {
        return placeholder;
    }
};

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
        <div className="mt-2">
            <InlineError error={error} />
        </div>
    );

    const selectClass = cx(styles.Select, disabled && styles.disabled, error && styles.error);

    const stdPlaceholder = placeholder && standardizePlaceholder(placeholder);
    const stdOptions = standardizeOptions(options);
    const currentValue = value || (stdPlaceholder && stdPlaceholder.value);

    return (
        <div>
            {labelContent}
            <div className={selectClass}>
                <select id={id} name={name} value={currentValue} disabled={disabled} onChange={handleChange}>
                    {stdPlaceholder && <option value={stdPlaceholder.value}>{stdPlaceholder.label}</option>}
                    {stdOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
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
