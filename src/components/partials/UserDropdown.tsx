
import Image from "next/image";
import { useState } from "react";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";

import Tippy from "@tippyjs/react";
import { IconDashboard, IconLogout } from "../../../public/icons";

const UserDropdown = ({ session }: { session: Session }) => {
    const { email, image } = session?.user || {};
    const [openPopover, setOpenPopover] = useState(false);

    if (!email) return null;

    return (
        <div className="relative inline-block text-left">
            <Tippy
                trigger="click"
                duration={100}
                theme="light-border"
                interactive={true}
                placement="bottom-end"
                className="bg-white min-w-[200px]"
                content={
                    <div className="">
                        <button
                            className="relative flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-100"
                        >
                            <IconDashboard className="h-4 w-4" />
                            <p className="text-sm">Bảng điều khiển</p>
                        </button>
                        <button
                            className="relative flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-100"
                            onClick={() => signOut()}
                        >
                            <IconLogout className="h-4 w-4" />
                            <p className="text-sm">Đăng xuất</p>
                        </button>
                    </div>
                }
            >
                <button
                    onClick={() => setOpenPopover(!openPopover)}
                    className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-gray-300 transition-all duration-75 focus:outline-none active:scale-105 sm:h-9 sm:w-9"
                >
                    <Image
                        alt={email}
                        src={
                            image ||
                            `https://avatars.dicebear.com/api/micah/${email}.svg`
                        }
                        width={45}
                        height={45}
                    />
                </button>
            </Tippy>
        </div>
    );
}

export default UserDropdown;