import {twMerge} from "tailwind-merge";
import React from "react";

type props = { header?: string, children: React.ReactNode, className?: string };

const Section = (props: props) => {
    return (
        <section>
            {props?.header && <h1 className="font-bold text-3xl md:text-4xl">{props.header}</h1>}
            <div className={twMerge("mt-3", props.className)}>
                {props.children}
            </div>
        </section>
    )
};

export {Section};