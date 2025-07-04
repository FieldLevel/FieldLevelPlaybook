import React from 'react';
import cx from 'classnames';
import * as Dialog from '@radix-ui/react-dialog';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';

import { Button } from '../Button';
import { ButtonGroup } from '../ButtonGroup';
import { Icon } from '../Icon';
import { CloseMajor } from '../../icons/Major';

import { useUniqueId } from '../../utilities/use-unique-id';

import * as styles from './Modal.module.css';

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
    /** Optionally configure the aria-label of the dialog. Use this if your modal doesn't have a title, to give users with screen readers a better experience.*/
    ariaLabel?: string;
    /** Optionally configure the aria-description of the dialog.*/
    ariaDescription?: string;
    /** Optionally configure the "auto-focus on dialog open" behavior by passing an event handler (eg e.preventDefault()). By default, the first focusable item in the Dialog Content is focused */
    onOpenAutoFocus?(): void;
    variant?: variant;
    persistent?: boolean;
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
    ariaLabel,
    ariaDescription,
    variant,
    persistent = false,
    primaryAction,
    secondaryAction,
    tertiaryAction,
    children,
    onOpenAutoFocus
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

    const footerContent = (primaryAction || secondaryAction || tertiaryAction) && (
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

    const containerStyles = cx(styles.Container, variant && variantContainerStyles[variant]);
    const contentStyles = cx(styles.Content, variant && variantContentStyles[variant]);

    const contentAriaProps: { 'aria-describedby'?: undefined } = {};
    if (!ariaDescription) {
        contentAriaProps['aria-describedby'] = undefined;
    }

    const defaultOnOpenAutoFocus = (e: Event) => e.preventDefault();

    return (
        <Dialog.Root open={open} onOpenChange={(isOpen) => !isOpen && onDismiss()}>
            <Dialog.Portal>
                <Dialog.Overlay className={styles.Overlay} />
                <div className={containerStyles}>
                    <Dialog.Content
                        className={contentStyles}
                        {...contentAriaProps}
                        onOpenAutoFocus={onOpenAutoFocus ?? defaultOnOpenAutoFocus}
                        onEscapeKeyDown={(e: Event) => {
                            if (!persistent) return;
                            e.preventDefault();
                        }}
                        onInteractOutside={(e: Event) => {
                            if (!persistent) return;
                            e.preventDefault();
                        }}
                    >
                        <VisuallyHidden.Root asChild>
                            <Dialog.Title>{ariaLabel || title || 'Modal'}</Dialog.Title>
                        </VisuallyHidden.Root>
                        {ariaDescription && (
                            <VisuallyHidden.Root asChild>
                                <Dialog.Description>{ariaDescription}</Dialog.Description>
                            </VisuallyHidden.Root>
                        )}
                        {headerContent}
                        {bodyContent}
                        {footerContent}
                        {!persistent && closeContent}
                    </Dialog.Content>
                </div>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

Modal.Header = Header;
