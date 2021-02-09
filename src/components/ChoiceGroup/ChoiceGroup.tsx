import React from 'react';

import { Checkbox } from '../Checkbox';
import { RadioButton } from '../RadioButton';
import { InlineError } from '../shared/InlineError';

import { useUniqueId } from '../../utilities/use-unique-id';

import styles from './ChoiceGroup.module.css';

interface Choice {
    label: string;
    value: string;
    disabled?: boolean;
}

export interface ChoiceGroupProps {
    title?: string;
    name: string;
    choices: Choice[];
    selected: string[];
    multiple?: boolean;
    disabled?: boolean;
    onChange?(selected: string[], name: string): void;
    error?: string;
}

export const ChoiceGroup = ({
    title,
    name,
    choices,
    selected,
    multiple,
    disabled,
    onChange,
    error
}: ChoiceGroupProps) => {
    const uniqueName = useUniqueId(name);
    const Control = multiple ? Checkbox : RadioButton;

    const isSelected = ({ value }: Choice) => {
        return selected.includes(value);
    };

    const updateSelected = ({ value }: Choice, checked: boolean) => {
        if (checked) {
            return multiple ? [...selected, value] : [value];
        }

        return selected.filter((choice) => choice !== value);
    };

    const errorContent = error && (
        <div className="mt-1">
            <InlineError error={error} />
        </div>
    );

    const choicesContent = choices.map((choice) => {
        const handleChange = (checked: boolean) => {
            const newSelected = updateSelected(choice, checked);
            onChange && onChange(newSelected, name);
        };

        return (
            <li key={choice.value} className={styles.Item}>
                <Control
                    label={choice.label}
                    name={uniqueName}
                    checked={isSelected(choice)}
                    disabled={disabled || choice.disabled}
                    onChange={handleChange}
                />
            </li>
        );
    });

    return (
        <fieldset>
            {title && <legend className={styles.Title}>{title}</legend>}
            <ul>{choicesContent}</ul>
            {errorContent}
        </fieldset>
    );
};
