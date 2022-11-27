import Link from "next/link";
import type {NextPage} from "next";

import {Section} from "~/core/components";
import {Layout} from "~/core/components/layout";

const Home: NextPage = () => {
    return (
        <Layout>
            <Section className={"min-h-screen flex flex-col justify-center -mt-20"}>
                <h1 className="font-bold text-4xl md:text-5xl">Jonathan Cruz</h1>
                <h2>Student at {" "}
                    <a target="_blank" rel="noreferrer"
                       href="https://www.rit.edu/"
                       className="font-semibold text-orange-500 underline-offset-2 hover:underline"
                    >
                        Rochester Institute of Technology
                    </a>
                </h2>
                <p className={"text-gray-500 dark:text-gray-300"}>Software Engineering</p>
                <p className={"text-gray-500 dark:text-gray-300"}>Quantum Information Science and Technology</p>
                <div className={"flex gap-x-3 mt-2"}>
                    <Link href={"/about"}>
                        <a className={"rounded-md px-4 py-2 border border-gray-500 duration-300 hover:scale-[1.03]"}>
                            <span className={"font-bold"}>About Me</span>
                        </a>
                    </Link>
                    <Link href={"/blog"}>
                        <a className={"rounded-md px-4 py-2 border border-gray-500 duration-300 hover:scale-[1.03]"}>
                            <span className={"font-bold"}>Read Blog</span>
                        </a>
                    </Link>
                </div>
            </Section>
        </Layout>
    );
};

export default Home;