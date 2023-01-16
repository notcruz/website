import Link from "next/link";
import {twMerge} from "tailwind-merge";
import React from "react";

type props = { text: string; href: string; selected: boolean; className?: string };

const NavItem = (props: props) => {
    return (
        <Link href={props.href}>
            <a href={props.href} className={twMerge(
                "hover:bg-gray-900 hover:text-neutral-100 dark:hover:bg-neutral-100 dark:hover:text-gray-900 px-4 py-2 rounded-md transition-colors ease-in-out duration-300 font-bold focus:outline-none focus-visible:ring focus-visible:ring-primary-300",
                props.selected ? "" : "text-gray-300 dark:text-gray-700", props.className
            )}
            >
                <code>{props.text}</code>
            </a>
        </Link>
    );
};

export {NavItem};