import { ReactNode } from "react";
import dynamic from "next/dynamic";

import Footer from "../partials/Footer";
// import Header from "../partials/Header";


const Header = dynamic(() => import('@/components/partials/Header'), {
    ssr: false
});

interface MainLayoutProps {
    children: ReactNode
}

const MainLayout = ({ children } : MainLayoutProps) => {


    return (
        <>
            {/* <div className="fixed min-h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100"></div> */}

            <Header />

            <main className="min-h-screen w-full py-32">
                {children}
            </main>

            <Footer />
        </>
    )
}

export default MainLayout;