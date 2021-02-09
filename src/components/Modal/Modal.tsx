import React from 'react';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { Heading } from '../Heading';
import { Button } from '../Button';
import { ButtonGroup } from '../ButtonGroup';
import { Icon } from '../Icon';
import { CloseMajor } from '../../icons/Major';

import styles from './Modal.module.css';

const Header = ({ title }: { title: string }) => {
    return (
        <div className={styles.Header}>
            <Heading>{title}</Heading>
        </div>
    );
};

interface Action {
    content?: string;
    onAction?(): void;
}

export interface ModalProps {
    open: boolean;
    title?: string;
    onDismiss(): void;
    primaryAction?: Action;
    secondaryAction?: Action;
    children?: React.ReactNode;
}

export const Modal = ({ open, title, onDismiss, primaryAction, secondaryAction, children }: ModalProps) => {
    const closeContent = (
        <div className={styles.Close}>
            <button onClick={onDismiss}>
                <Icon source={CloseMajor} />
            </button>
        </div>
    );

    const headerContent = title ? <Header title={title} /> : null;
    const footerContent = (primaryAction || secondaryAction) && (
        <div className={styles.Footer}>
            <ButtonGroup>
                {secondaryAction && <Button onClick={secondaryAction.onAction}>{secondaryAction.content}</Button>}
                {primaryAction && (
                    <Button variant="primary" onClick={primaryAction.onAction}>
                        {primaryAction.content}
                    </Button>
                )}
            </ButtonGroup>
        </div>
    );
    const bodyContent = <div className={styles.Body}>{children}</div>;

    return (
        <DialogOverlay isOpen={open} onDismiss={onDismiss}>
            <DialogContent className={styles.Content}>
                {closeContent}
                {headerContent}
                {bodyContent}
                {footerContent}
            </DialogContent>
        </DialogOverlay>
    );
};

Modal.Header = Header;
