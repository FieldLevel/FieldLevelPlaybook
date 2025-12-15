import React from 'react';
import cx from 'classnames';

import { InlineField } from '../shared/InlineField';

import * as styles from './Checkbox.module.css';

import { useUniqueId } from '../../utilities/use-unique-id';

export interface CheckboxProps {
    name: string;
    label: string;
    checked?: boolean;
    disabled?: boolean;
    onChange?(value: boolean, name: string): void;
}

export const Checkbox = ({ name, label, checked, disabled, onChange }: CheckboxProps) => {
    const id = useUniqueId(name);
    const inputStyle = cx(styles.input, disabled && styles.disabled);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(Boolean(event.currentTarget.checked), event.currentTarget.name);
    };

    return (
        <InlineField id={id} label={label} disabled={disabled}>
            <input
                id={id}
                type="checkbox"
                className={inputStyle}
                name={name}
                checked={checked}
                disabled={disabled}
                onChange={handleChange}
            />
        </InlineField>
    );
};
