import Link from "next/link";
import { useSession } from "next-auth/react";


import useScroll from "@/lib/hooks/use-scroll";
import { useSignInModal } from "./SignInModal";
import UserDropdown from "./UserDropdown";


const Header = () => {
    const { data: session, status } = useSession();
    
    const { SignInModal, setIsShowModal } = useSignInModal();
    const scrolled = useScroll(50);

    console.log(status);

    return (
        <>
            <SignInModal />
            <header className={`fixed w-full z-30 top-0 transition-all flex justify-center ${scrolled ? 'border-b border-gray-200 bg-white/50 backdrop-blur-xl' : 'bg-white/0'}`}>
                <div className="max-w-screen-xl w-full h-16 mx-4 flex items-center">
    
                    <div>
                        <Link href={`/`}>
                            <p className="text-xl leading-normal font-bold select-none">VESMART</p>
                        </Link>
                    </div>
    
                    <div className="ml-auto">
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