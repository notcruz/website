import { TechIcon } from "~/core/components/TechIcon";
import { SiGithub, SiLinkedin, SiMaildotru, SiTwitter } from "react-icons/si";
import { motion } from "framer-motion";
import React from "react";

const Footer = () => {
    return (
        <motion.div className="py-6 border-t border-gray-500 dark:border-gray-300 space-y-3">
            <div className={"flex justify-center gap-x-6"}>
                <TechIcon icon={SiGithub} redirect={{ href: "https://github.com/notcruz" }} className={"h-6 w-6"} />
                <TechIcon
                    icon={SiLinkedin}
                    redirect={{ href: "https://www.linkedin.com/in/jonathan-cruz-arenas" }}
                    className={"h-6 w-6"}
                />
                <TechIcon icon={SiTwitter} redirect={{ href: "https://twitter.com/" }} className={"h-6 w-6"} />
                <TechIcon
                    icon={SiMaildotru}
                    redirect={{ href: "mailto:jon@crzx.io", target: "_self" }}
                    className={"h-6 w-6"}
                />
            </div>
            <div className="flex justify-center"></div>
        </motion.div>
    );
};

export { Footer };
