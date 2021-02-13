import React from 'react';
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
    const bodyContent = (
        <div id={bodyId} className={styles.Body}>
            {children}
        </div>
    );
    const labelBy = title ? headerId : bodyId;

    return (
        <DialogOverlay isOpen={open} onDismiss={onDismiss}>
            <DialogContent className={styles.Content} aria-labelledby={labelBy}>
                {closeContent}
                {headerContent}
                {bodyContent}
                {footerContent}
            </DialogContent>
        </DialogOverlay>
    );
};

Modal.Header = Header;
