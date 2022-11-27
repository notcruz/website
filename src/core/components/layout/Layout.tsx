import React, {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {NavItem} from "~/core/components";
import {twMerge} from "tailwind-merge";
import {useRouter} from "next/router";

import {Footer, Header} from "~/core/components/layout";

type props = { children: React.ReactNode; className?: string; };

const Layout = ({children, className}: props) => {
    const router = useRouter();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="flex flex-col w-full max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl min-h-screen">
            {/* header */}
            <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen}/>

            {/* menu for mobile devices */}
            <AnimatePresence mode="wait">
                {mobileMenuOpen && (
                    <motion.div initial={{opacity: 0, scale: 0.95}} animate={{opacity: 1, scale: 1}}
                                exit={{opacity: 0, scale: 0.95}} transition={{ease: "easeIn", duration: 0.25}}
                                className={"absolute flex flex-col w-full min-h-screen max-w-sm pt-20"}
                    >
                        <NavItem className={"border-b border-gray-500 dark:border-gray-300 rounded-none py-6"} text="Home" href="/"
                                 selected={router.pathname === "/"}/>
                        <NavItem className={"border-b border-gray-500 dark:border-gray-300 rounded-none py-6"} text="About"
                                 href="/about"
                                 selected={router.pathname === "/about"}/>
                        <NavItem className={"border-b border-gray-500 dark:border-gray-300 rounded-none py-6"} text="Blog" href="/blog"
                                 selected={router.pathname === "/blog"}/>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* hide current page from flashing when redirecting */}
            <AnimatePresence mode="wait">
                {!mobileMenuOpen && (
                    <motion.div initial={{opacity: 0, scale: 0.95}} animate={{opacity: 1, scale: 1}}
                                exit={{opacity: 0, scale: 0.95}} transition={{ease: "easeIn", duration: 0.25}}
                    >
                        {/* body */}
                        <div className={twMerge("flex flex-col", className)}>
                            {children}
                        </div>

                        {/* footer */}
                        <Footer/>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export {Layout};
