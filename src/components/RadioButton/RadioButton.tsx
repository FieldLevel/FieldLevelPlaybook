import React from 'react';
import cx from 'classnames';

import { InlineField } from '../shared/InlineField';

import * as styles from './RadioButton.module.css';

import { useUniqueId } from '../../utilities/use-unique-id';

export interface RadioButtonProps {
    name: string;
    label: string;
    checked?: boolean;
    disabled?: boolean;
    onChange?(value: boolean, name: string): void;
}

export const RadioButton = ({ name, label, checked, disabled, onChange }: RadioButtonProps) => {
    const id = useUniqueId(name);
    const inputStyle = cx(styles.input, disabled && styles.disabled);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(Boolean(event.currentTarget.checked), event.currentTarget.name);
    };

    return (
        <InlineField id={id} label={label}>
            <input
                id={id}
                type="radio"
                className={inputStyle}
                name={name}
                checked={checked}
                disabled={disabled}
                onChange={handleChange}
            />
        </InlineField>
    );
};
