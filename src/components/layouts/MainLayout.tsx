import { ReactNode } from "react";
import Footer from "../partials/Footer";
import Header from "../partials/Header";

interface MainLayoutProps {
    children: ReactNode
}

const MainLayout = ({ children } : MainLayoutProps) => {


    return (
        <>
            <Header />

            <main>
                <div>
                    {children}
                </div>
            </main>

            <Footer />
        </>
    )
}

export default MainLayout;