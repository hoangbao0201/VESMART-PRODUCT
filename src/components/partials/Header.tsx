import Link from "next/link";
import dynamic from "next/dynamic";
import { useSession } from "next-auth/react";

import useScroll from "@/lib/hooks/use-scroll";
import { useSignInModal } from "./SignInModal";
import { IconShoppingBag } from "../../../public/icons";

const UserDropdown = dynamic(() => import('./UserDropdown'), {
    ssr: false
});



const Header = () => {
    const { data: session, status } = useSession();
    
    const { SignInModal, setIsShowModal } = useSignInModal();
    const scrolled = useScroll(50);

    // console.log(status);

    return (
        <>
            <SignInModal />
            <header className={`fixed w-full z-30 top-0 transition-all ease-linear flex justify-center ${scrolled ? 'border-b border-gray-200 bg-white/50 backdrop-blur-xl' : 'bg-white/0'}`}>
                <div className="max-w-screen-xl w-full h-16 mx-4 flex items-center">
    
                    <div className="flex-1">
                        <Link href={`/`}>
                            <p className="text-xl leading-normal font-bold select-none">VESMART</p>
                        </Link>
                    </div>

                    <div className="relative mx-3">
                        <Link href={`/gio-hang`}>
                            <p className="p-2 rounded-full hover:bg-gray-100">
                                <IconShoppingBag className="w-6 h-6"/>
                                <span className="absolute bottom-0 right-0 w-5 h-5 leading-5 text-center text-[13px] text-white font-semibold bg-sky-600 rounded-full">
                                    5
                                </span>
                            </p>
                        </Link>
                    </div>

                    <div className="min-w-[40px]">
                        {
                            status === "authenticated" ? (
                                <UserDropdown session={session}/>
                            ) : (
                                <button
                                    onClick={() => setIsShowModal(true)}
                                    className={`rounded-md border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black`}
                                >
                                    Đăng nhập
                                </button>
                            )
                        }
                    </div>

                </div>
            </header>
        </>
    )
}

export default Header;