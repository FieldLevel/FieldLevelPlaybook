import React from 'react';
import cx from 'classnames';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { Button } from '../Button';
import { ButtonGroup } from '../ButtonGroup';
import { Icon } from '../Icon';
import { CloseMajor } from '../../icons/Major';

import { useUniqueId } from '../../utilities/use-unique-id';

import styles from './Modal.module.css';

const Header = ({ id, title }: { id: string; title: string }) => {
    return (
        <div id={id} className={styles.Header}>
            {title}
        </div>
    );
};

interface Action {
    content?: string;
    disabled?: boolean;
    onAction?(): void;
}

interface PrimaryAction extends Action {
    destructive?: boolean;
}

interface TertiaryAction extends Action {
    variant?: tertiaryVariant;
}

type tertiaryVariant = 'destructive' | 'secondary';

type variant = 'small' | 'large';

export interface ModalProps {
    open: boolean;
    onDismiss(): void;
    title?: string;
    variant?: variant;
    primaryAction?: PrimaryAction;
    secondaryAction?: Action;
    tertiaryAction?: TertiaryAction;
    children?: React.ReactNode;
}

const variantContainerStyles: { [key in variant]: string } = {
    small: styles.smallContainer,
    large: styles.largeContainer
};

const variantContentStyles: { [key in variant]: string } = {
    small: styles.smallContent,
    large: styles.largeContent
};

export const Modal = ({
    open,
    onDismiss,
    title,
    variant,
    primaryAction,
    secondaryAction,
    tertiaryAction,
    children
}: ModalProps) => {
    const headerId = useUniqueId('ModalHeader');
    const bodyId = useUniqueId('ModalBody');

    const closeContent = (
        <div className={styles.Close}>
            <button aria-label="Close dialog" onClick={onDismiss}>
                <Icon source={CloseMajor} />
            </button>
        </div>
    );

    const headerContent = title && <Header id={headerId} title={title} />;
    const primaryVariant = primaryAction?.destructive ? 'destructive' : 'primary';
    const tertiaryVariant = tertiaryAction?.variant;

    const footerContent = (primaryAction || secondaryAction) && (
        <div className={styles.Footer}>
            <div>
                {tertiaryAction && (
                    <Button
                        variant={tertiaryVariant}
                        onClick={tertiaryAction.onAction}
                        disabled={tertiaryAction.disabled}
                    >
                        {tertiaryAction.content}
                    </Button>
                )}
            </div>

            <ButtonGroup distribute="end">
                {secondaryAction && (
                    <Button variant="secondary" onClick={secondaryAction.onAction} disabled={secondaryAction.disabled}>
                        {secondaryAction.content}
                    </Button>
                )}
                {primaryAction && (
                    <Button variant={primaryVariant} disabled={primaryAction.disabled} onClick={primaryAction.onAction}>
                        {primaryAction.content}
                    </Button>
                )}
            </ButtonGroup>
        </div>
    );

    const bodyContent = (
        <div id={bodyId} className={styles.Body}>
            {children}
        </div>
    );

    const labelBy = title ? headerId : bodyId;
    const containerStyles = cx(styles.Container, variant && variantContainerStyles[variant]);
    const contentStyles = cx(styles.Content, variant && variantContentStyles[variant]);

    return (
        <DialogOverlay className={styles.Overlay} isOpen={open} onDismiss={onDismiss}>
            <div className={containerStyles}>
                <DialogContent tabIndex={0} className={contentStyles} aria-labelledby={labelBy}>
                    {headerContent}
                    {bodyContent}
                    {footerContent}
                    {closeContent}
                </DialogContent>
            </div>
        </DialogOverlay>
    );
};

Modal.Header = Header;
