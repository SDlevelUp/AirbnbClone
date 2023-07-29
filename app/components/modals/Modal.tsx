'use client';
import { useState, useEffect, useCallback } from "react";
import Button from "../Button";

interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel: string;
    disabled?: boolean;
    secondaryAction?: () => void;
    secondaryActionLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    onSubmit,
    title,
    body,
    actionLabel,
    footer,
    disabled,
    secondaryAction,
    secondaryActionLabel
}) => {
    const [showModal, setShowModal] = useState(isOpen);

    useEffect(() => {
        setShowModal(isOpen);
    }, [isOpen]);

    const handleClose = useCallback(() => {
        if (disabled) {
            return;
        }

        setShowModal(false);
        setTimeout(() => {
            onClose();
        }, 300)
    }, [onClose, disabled]);

    const handleSubmit = useCallback(() => {
        if (disabled) {
            return;
        }

        onSubmit();
    }, [onSubmit, disabled]);

    const handleSecondaryAction = useCallback(() => {
        if (disabled || !secondaryAction) {
            return;
        }

        secondaryAction();
    }, [secondaryAction, disabled]);

    if (!isOpen) {
        return null;
    }


    return (
        <>
            <div className="
                justify-center 
                items-center
                flex 
                overflow-x-hidden
                overflow-y-auto
                fixed
                inset-0
                z-50
                outline-none
                focus:outline-none
                bg-neutral-800/70"
            >

                <div className="
                    relative 
                    w-full
                    md:w-4/6
                    lg:w-3/6
                    xl:w-2/5
                    my-6
                    mx-auto
                    h-hull
                    lg:h-auto
                    md:h-auto
                "
                >

                    {/* Modal content */}
                    <div className={`
                        translate 
                        duration-300
                        h-full
                        ${showModal ? 'translate-y-0' : 'translate-y-full'}
                        ${showModal ? 'opacity-100' : 'opacity-0'}
                        `}
                    >
                        <div className="
                            translate
                            h-full
                            lg:h-auto
                            md:h-autoborder-0
                            rounded-lg
                            shadow-lg
                            relative
                            w-full
                            flex
                            flex-col
                            bg-white
                            outline-none
                            focus:outline-none
                        "
                        >
                            {/* Header */}

                            <div className="
                                flex
                                items-center
                                p-6
                                rounded-t
                                justify-center
                                relative
                                border-b-[1px]
                            "
                            >
                                <button
                                    className="
                                    btn 
                                    btn-circle 
                                    absolute 
                                    left-9
                                   hover:bg-red-500
                                "
                                    onClick={handleClose}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>


                                <div className="text-lgfont-semibold">
                                    {title}
                                </div>
                            </div>

                            {/*body*/}
                            <div className="relative p-6 flex-auto">
                                {body}
                            </div>
                            {/*footer*/}
                            <div className="flex flex-col gap-2 p-6">
                                <div
                                    className="
                                        flex 
                                        flex-row 
                                        items-center 
                                        gap-4 
                                        w-full
                                    "
                                >
                                    {secondaryAction && secondaryActionLabel && (
                                        <Button
                                            disabled={disabled}
                                            label={secondaryActionLabel}
                                            onClick={handleSecondaryAction}
                                            outline
                                        />
                                    )}
                                    <Button
                                        disabled={disabled}
                                        label={actionLabel}
                                        onClick={handleSubmit}
                                    />
                                </div>
                                {footer}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;