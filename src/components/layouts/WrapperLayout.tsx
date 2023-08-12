import { ReactNode } from "react";

interface WrapperLayoutProps {
    children: ReactNode
    className?: string
}

const WrapperLayout = ({ children, className } : WrapperLayoutProps) => {


    return (
        <div className={`px-4 py-5 mx-auto ${className}`}>
            <div className="-mx-4">{children}</div>
        </div>
    )
}

export default WrapperLayout;