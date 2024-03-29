"use client";

import { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../Button";

interface ModalProps {
        IsOpen?: boolean;
        OnClose: () => void;
        onSubmit: () => void;
        title?: string;
        body?: React.ReactElement;
        footer?: React.ReactElement;
        actionLabel?: String;
        disabled?: boolean;
        secondaryAction?: () => void;
        secondaryACtionLabel?: string;
    }
    
    const Modal: React.FC<ModalProps> = ({
        IsOpen,
        OnClose,
        onSubmit,
        title,
        body,
        footer,
        actionLabel,
        disabled,
        secondaryAction,
        secondaryACtionLabel
    }) => {
    const [showModal, setShowModal] = useState(IsOpen);

    useEffect(() => {
      setShowModal(IsOpen)
    }, [IsOpen]);

    const handleClose = useCallback(() => {
        if(disabled) {
            return;
        }

        setShowModal(false)
        setTimeout(() => {
            onclose;
        }, 300);        
    }, [disabled, OnClose])

    const handleSubmit = useCallback(() => {
        if (disabled) {
            return;
        }

        onSubmit();
    }, [disabled, onSubmit])

    const handlesecondaryAction = useCallback(() => {
        if (disabled || !secondaryAction) {
            return;
        }

        secondaryAction();
    }, [disabled || !secondaryAction])

    if (!IsOpen) {
        return null;
    }

    return (
        <>
        <div className="justify-center
        items-center
        flex
        overflow-x-hidden
        overflow-y-auto
        fixed
        inset-0
        z-50
        outline-none
        focus:outline-none
        bg-neutral-800/70
        "
        >
            <div className="relative w-full
            md:w-4/6 lg:w-3/6 xl:w-2/5
            my-6 mx-auto h-full lg:h-auto md:h-auto">
                {/* content */}
                <div className={`
                translate duration-300 h-full 
                ${showModal ? 'translate-y-0' : 'translate-y-full'}
                ${showModal ? 'opacity-100' : 'opacity-0'}
                `}>
                    <div className="translate h-full 
                    lg:h-auto md:h-auto 
                    border-0 rounded-lg 
                    shadow-lg relative flex flex-col w-full
                    bg-white outline-none focus:outline-none">
                        {/* header */}
                        <div className="
                        flex
                        items-center
                        p-6
                        rounded-t
                        justify-center
                        relative
                        border-b-[1px]
                        ">
                            <button 
                                onClick={handleClose}
                                className="
                                p-1
                                border-0
                                hover:opacity-70
                                absolute
                                left-9
                            ">
                                <IoMdClose size={18} />
                            </button>
                            <div className="text-lg font-semibold">{title}
                            </div>
                        </div>
                        {/* body */}
                        <div className="relative p-6 flex-auto">
                            {body}
                        </div>
                        {/* footer */}
                        <div className="flex flex-col gap-2 p-6">
                            <div className="flex flex-row
                            items-center gap-4 w-full">

                            {secondaryAction && secondaryACtionLabel && (
                                <Button outline disabled={disabled}
                                label={secondaryACtionLabel}
                                OnClick={handlesecondaryAction}
                                small/>
                                )}
                                <Button disabled={disabled}
                                label={actionLabel}
                                OnClick={handleSubmit}
                                small/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Modal;