import React from "react";
import {AnimatePresence, motion} from "framer-motion";
import {twMerge} from "tailwind-merge";

type props = { children: React.ReactNode; className?: string; };

const Layout = ({children, className}: props) => {
    return (
        <AnimatePresence mode="wait">
            <motion.div className={"flex flex-col w-full max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl min-h-screen"}
                        initial={{opacity: 0, scale: 0.95}} animate={{opacity: 1, scale: 1}}
                        exit={{opacity: 0, scale: 0.95}} transition={{ease: "easeInOut", duration: 0.50}}
            >
                <div className={twMerge("flex flex-col", className)}>
                    {children}
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export {Layout};
