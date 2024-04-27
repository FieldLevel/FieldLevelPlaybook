import React from 'react';
import cx from 'classnames';

import { Checkbox } from '../Checkbox';
import { RadioButton } from '../RadioButton';
import { InlineError } from '../shared/InlineError';

import { useUniqueId } from '../../utilities/use-unique-id';

import styles from './ChoiceGroup.module.css';

interface Choice {
    label: string;
    value: string | boolean | number;
    disabled?: boolean;
}

type spacing = 'loose';

export interface ChoiceGroupProps {
    title?: string;
    name: string;
    choices: Choice[];
    selected: (string | boolean | number)[] | (string | boolean | number);
    multiple?: boolean;
    disabled?: boolean;
    spacing?: spacing;
    onChange?(selected: (string | boolean | number)[] | (string | boolean | number), name: string): void;
    error?: string;
}

export const ChoiceGroup = ({
    title,
    name,
    choices,
    selected,
    multiple,
    disabled,
    spacing,
    onChange,
    error
}: ChoiceGroupProps) => {
    const uniqueName = useUniqueId(name);
    const Control = multiple ? Checkbox : RadioButton;

    if (multiple && !Array.isArray(selected)) {
        console.warn(
            'Multiple prop is set to true but Selected value was not an array. Onchange callback will receive an array of values.'
        );
    }

    if (!multiple && Array.isArray(selected)) {
        console.warn(
            'Multiple prop is set to false but Selected value was an array. Onchange callback will receive only one value and you may get unexpected results.'
        );
    }

    const isSelected = ({ value }: Choice) => {
        return Array.isArray(selected) ? selected.includes(value) : selected === value;
    };

    const updateSelected = ({ value }: Choice, checked: boolean) => {
        if (checked) {
            if (multiple) {
                return Array.isArray(selected) ? [...selected, value] : [selected, value];
            } else {
                return value;
            }
        }

        return Array.isArray(selected) ? selected.filter((choice) => choice !== value) : selected;
    };

    const errorContent = error && (
        <div className={styles.Error}>
            <InlineError error={error} />
        </div>
    );

    const spacingStyles: { [key in spacing]: string } = {
        loose: styles.loose
    };

    const choicesContent = choices.map((choice) => {
        const handleChange = (checked: boolean) => {
            const newSelected = updateSelected(choice, checked);
            onChange && onChange(newSelected, name);
        };

        const itemStyle = cx(styles.Item, spacing && spacingStyles[spacing]);

        return (
            <li key={choice.value.toString()} className={itemStyle}>
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

    const titleStyle = cx(styles.Title, spacing && spacingStyles[spacing]);

    return (
        <fieldset>
            {title && <legend className={titleStyle}>{title}</legend>}
            <ul>{choicesContent}</ul>
            {errorContent}
        </fieldset>
    );
};
