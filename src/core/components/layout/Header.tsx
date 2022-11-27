import {motion} from "framer-motion";
import React, {Dispatch, SetStateAction} from "react";
import {useRouter} from "next/router";
import {Cross as Hamburger} from 'hamburger-react'
import {NavItem} from "~/core/components";

type props = { mobileMenuOpen: boolean, setMobileMenuOpen: Dispatch<SetStateAction<boolean>> }

const Header = (props: props) => {
    const router = useRouter();
    // const ws = useLanyardWS("568861375649284097");

    return (
        <>
            {/* header for mobile devices */}
            <motion.div className={"sm:hidden absolute flex z-50 mt-3 w-full justify-end"}
                        style={{maxWidth: "inherit"}}>
                <Hamburger onToggle={(e) => props.setMobileMenuOpen(e)} toggled={props.mobileMenuOpen} size={20}/>
            </motion.div>

            {/* header for non mobile devices */}
            <motion.div className="hidden sm:flex flex-row z-50 -mx-4 mt-6 pt-3 gap-x-3">
                <NavItem text="Home" href="/" selected={router.pathname === "/"}/>
                <NavItem text="About" href="/about" selected={router.pathname === "/about"}/>
                <NavItem text="Blog" href="/blog" selected={router.pathname === "/blog"}/>
            </motion.div>
        </>
    )
};

export {Header};