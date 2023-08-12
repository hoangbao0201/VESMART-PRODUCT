import { Dispatch, ReactNode, SetStateAction, useRef } from "react"

import FocusTrap from "focus-trap-react"
import { AnimatePresence, motion } from "framer-motion"

interface ModalProps {
    children: ReactNode
    isShow: boolean
    setIsShow: Dispatch<SetStateAction<boolean>>
}

const Modal = ({ children, isShow, setIsShow } : ModalProps) => {

    const desktopModalRef = useRef(null);

    // const { isMobile, isDesktop } = useWindowSize();

    return (
        <AnimatePresence>
            {
                isShow ? (
                    <>
                        <FocusTrap focusTrapOptions={{ initialFocus: false }}>
                            <motion.div
                                ref={desktopModalRef}
                                key="desktop-modal"
                                className="fixed inset-0 z-40 min-h-screen mx-4 items-center justify-center flex"
                                initial={{ scale: 0.95 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0.95 }}
                                onMouseDown={(e) => {
                                    if (desktopModalRef.current === e.target) {
                                        setIsShow(false);
                                    }
                                }}
                            >
                                {children}
                            </motion.div>
                        </FocusTrap>
                        <motion.div
                            key="desktop-backdrop"
                            className="fixed inset-0 z-30 bg-gray-100 bg-opacity-10 backdrop-blur"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsShow(false)}
                        />
                    </>
                ) : (
                    <>
                        
                    </>
                )
            }
        </AnimatePresence>
    )
}

export default Modal;