import {HiExternalLink} from "react-icons/hi";
import {twMerge} from "tailwind-merge";

type ComponentProps = {
    color: string;
    header?: { one: string; two?: string; three?: string };
    body: { one: string; two: string };
    others?: { key: string; icon?: JSX.Element }[];
    externals?: { key: string; value: string }[]
}

const Container = (props: ComponentProps) => {
    return (
        <div className={"flex"}>
            <div className={twMerge("border-2", props.color)}/>
            <div className={"flex-1 bg-[#DDDDDD] dark:bg-gray-800 p-6 md:py-6 md:px-9"}>
                <div className="text-xs tracking-widest uppercase">
                    <div className={"flex justify-between"}>
                        <p className={"underline underline-offset-4"}>{props.header?.one}</p>
                        <p>{props.header?.two}</p>
                    </div>
                    <p className={"text-right"}>{props.header?.three}</p>
                </div>
                <div className={"mt-3"}>
                    <h3 className={"text-lg md:text-xl font-semibold"}>{props.body.one}</h3>
                    <p className={"text-sm"}>{props.body.two}</p>
                </div>
                <div className={"flex mt-3 space-x-6"}>
                    {props.others?.map((o) => (
                        <div key={o.key} className={"flex items-center text-gray-500"}>
                            <span className={"text-sm"}>{o.key}</span>
                            <span className={"ml-1"}>{o.icon}</span>
                        </div>
                    ))}
                    {props.externals?.map((e) => (
                        <a key={e.key} className={"flex items-center text-gray-500"} href={e.value} rel={"noreferrer"} target={"_blank"}>
                            <span className={"text-sm"}>{e.key}</span>
                            <span className={"ml-1"}><HiExternalLink/></span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
};

export {Container};