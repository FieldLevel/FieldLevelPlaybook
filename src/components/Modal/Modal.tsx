import React from 'react';
import cx from 'classnames';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { Heading } from '../Heading';
import { Button } from '../Button';
import { ButtonGroup } from '../ButtonGroup';
import { Icon } from '../Icon';
import { CloseMajor } from '../../icons/Major';

import { useUniqueId } from '../../utilities/use-unique-id';

import styles from './Modal.module.css';

const Header = ({ id, title }: { id: string; title: string }) => {
    return (
        <div id={id} className={styles.Header}>
            <Heading>{title}</Heading>
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

type variant = 'small' | 'large';

export interface ModalProps {
    open: boolean;
    onDismiss(): void;
    title?: string;
    variant?: variant;
    primaryAction?: PrimaryAction;
    secondaryAction?: Action;
    children?: React.ReactNode;
}

const variantStyles: { [key in variant]: string } = {
    small: styles.small,
    large: styles.large
};

export const Modal = ({ open, onDismiss, title, variant, primaryAction, secondaryAction, children }: ModalProps) => {
    const headerId = useUniqueId('ModalHeader');
    const bodyId = useUniqueId('ModalBody');

    const closeContent = (
        <div className={styles.Close}>
            <button onClick={onDismiss}>
                <Icon source={CloseMajor} />
            </button>
        </div>
    );

    const headerContent = title && <Header id={headerId} title={title} />;
    const primaryVariant = primaryAction?.destructive ? 'destructive' : 'primary';
    const footerContent = (primaryAction || secondaryAction) && (
        <div className={styles.Footer}>
            <ButtonGroup distribute="end">
                {secondaryAction && (
                    <Button onClick={secondaryAction.onAction} disabled={secondaryAction.disabled}>
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
    const contentStyles = cx(styles.Content, variant && variantStyles[variant]);

    return (
        <DialogOverlay className={styles.Overlay} isOpen={open} onDismiss={onDismiss}>
            <div className={styles.Container}>
                <DialogContent className={contentStyles} aria-labelledby={labelBy}>
                    {closeContent}
                    {headerContent}
                    {bodyContent}
                    {footerContent}
                </DialogContent>
            </div>
        </DialogOverlay>
    );
};

Modal.Header = Header;
