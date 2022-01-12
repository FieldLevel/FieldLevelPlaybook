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
    destructive?: boolean;
    onAction?(): void;
}

type variant = 'large';

export interface ModalProps {
    open: boolean;
    onDismiss(): void;
    title?: string;
    variant?: variant;
    primaryAction?: Action;
    secondaryAction?: Action;
    children?: React.ReactNode;
}

const variantStyles: { [key in variant]: string } = {
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

    if (secondaryAction?.destructive) {
        console.warn('Playbook: Modal secondaryActions should never be destructive. Use a primaryAction instead.');
    }

    return (
        <DialogOverlay className={styles.Overlay} isOpen={open} onDismiss={onDismiss}>
            <DialogContent className={contentStyles} aria-labelledby={labelBy}>
                {closeContent}
                {headerContent}
                {bodyContent}
                {footerContent}
            </DialogContent>
        </DialogOverlay>
    );
};

Modal.Header = Header;
