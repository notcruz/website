import {IconType} from "react-icons";
import {HTMLAttributeAnchorTarget} from "react";
import {twMerge} from "tailwind-merge";

interface TechProps {
    icon: IconType;
    className?: string;
    text?: string;
    redirect?: {
        href: string;
        target?: HTMLAttributeAnchorTarget;
    };
}

const TechIcon = ({icon, className, text, redirect}: TechProps) => {
    return (
        <li className="flex space-x-2" data-tip={text}>
            <a target={redirect?.target ?? "_blank"} href={redirect?.href} className={"block focus:outline-none focus-visible:ring focus-visible:ring-primary-300"}>
                {icon({className: twMerge("h-6 w-6", className)})}
            </a>
            <p className={"text-sm"}>{text}</p>
        </li>
    );
};

export {TechIcon};
