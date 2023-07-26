'use client';
import { useCallback, useState } from "react";

import Avatar from "../Avatar";
import MenuItem from "./MenuItem";

import { RiMenu2Line } from "react-icons/ri";

const UserMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, []);
    return (
        <div className="relative ">
            <div className="flex flex-row items-center gap-3">
                <div
                    onClick={() => { }}
                    className="
                        hidden
                        sm:block
                        text-sm
                        font-semibold
                        py-3
                        px-4
                        rounded-full
                        bg-neutral-100
                        cursor-pointer
                    "
                >
                    Mettre mon logement sur Airbnb
                </div>
                <div
                    onClick={toggleOpen}

                    className="
                        p-4
                        md:py-1
                        md:px-2
                        border-[1px]
                        border-neutral-200
                        flex
                        flex-row
                        items-center
                        gap-3
                        rounded-full
                        cursor-pointer
                        transition
                        hover:shadow-md
                    "
                >
                    <RiMenu2Line />
                    <div className="hidden md:block">
                        <Avatar />
                    </div>
                </div>
            </div>

            {isOpen && (
                <div
                    className="
                        absolute
                        rounded-xl
                        shadow-md
                        w-[40vw]
                        md:w-3/4
                        overflow-hidden
                        bg-white
                        top-12
                        text-sm
                        right-0
                                        
                    "
                >
                    <div
                        className="
                            flex
                            flex-col
                            cursor-pointer
                        "
                    >
                        <>
                            {MenuItem}
                        </>
                    </div>
                </div>
            )}
        </div >
    )
}
export default UserMenu;