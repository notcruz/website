import {
    SiAmazonaws,
    SiC,
    SiCsharp,
    SiCss3,
    SiElectron,
    SiGit,
    SiHtml5,
    SiJava,
    SiJavascript,
    SiMongodb,
    SiNextdotjs,
    SiNodedotjs,
    SiPostgresql,
    SiPrisma,
    SiPython,
    SiReact,
    SiScala,
    SiTailwindcss,
    SiTerraform,
    SiTypescript,
    SiVercel
} from "react-icons/si";
import type {NextPage} from "next";
import Image from "next/future/image";

import {Section, TechIcon} from "~/core/components";
import {Layout} from "~/core/components/layout";


const About: NextPage = () => {
    return (
        <Layout className={"my-20 space-y-10"}>
            <Section header={"About"} className={"space-y-3"}>
                <p>
                    {"Yo! I'm Jonathan, but you can call me Jon. I'm a third year student at "}
                    <a target="_blank" rel="noreferrer"
                       href="https://www.rit.edu/"
                       className="font-semibold text-orange-500 underline-offset-2 hover:underline"
                    >
                        RIT
                    </a>
                    {" "} studying Software Engineering and Quantum Information Science and Technology.
                </p>
                <p>
                    I started university with little background knowledge in programming after spending some time
                    learning web development in early-mid 2020. I started by watching a few
                    YouTube videos on web development and then purchased a Udemy course on Electron. Afterwards,
                    curiosity got to me and I dipped my toes into reverse engineering obfuscated applications.
                </p>
            </Section>
            <Section header={"Experience"} className={"space-y-6"}>
                <div className={"flex-shrink-0 rounded-lg bg-gradient-to-r p-1 from-primary-300 to-primary-300"}>
                    <div className={"bg-white dark:bg-gray-900 rounded-md p-3"}>
                        <div className={"flex"}>
                            <Image height={75} width={75} src={"/amazon.png"} className={"rounded-md mr-3"}
                                   alt={"Image of Amazon's logo"}/>
                            <div className={"my-auto"}>
                                <h4 className={"font-bold text-lg"}>Amazon.com Services LLC</h4>
                                <p className={"text-sm md:text-base text-gray-500 dark:text-gray-300"}>May 2022 - Aug
                                    2022</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
            <Section header={"Technologies"} className={"grid grid-cols-3 gap-3 sm:grid-cols-4"}>
                <TechIcon text="Java" icon={SiJava}/>
                <TechIcon text="JavaScript" icon={SiJavascript}/>
                <TechIcon text="Python" icon={SiPython}/>
                <TechIcon text="Scala" icon={SiScala}/>
                <TechIcon text="C" icon={SiC}/>
                <TechIcon text="C#" icon={SiCsharp}/>
                <TechIcon text="Electron" icon={SiElectron}/>
                <TechIcon text="HTML" icon={SiHtml5}/>
                <TechIcon text="CSS3" icon={SiCss3}/>
                <TechIcon text="Git" icon={SiGit}/>
                <TechIcon text="AWS" icon={SiAmazonaws}/>
                <TechIcon text="Node.js" icon={SiNodedotjs}/>
                <TechIcon text="MongoDB" icon={SiMongodb}/>
                <TechIcon text="Terraform" icon={SiTerraform}/>
                <TechIcon text="NextJS" icon={SiNextdotjs}/>
                <TechIcon text="React.js" icon={SiReact}/>
                <TechIcon text="TypeScript" icon={SiTypescript}/>
                <TechIcon text="PostgreSQL" icon={SiPostgresql}/>
                <TechIcon text="Prisma" icon={SiPrisma}/>
                <TechIcon text="TailwindCSS" icon={SiTailwindcss}/>
                <TechIcon text="SWR" icon={SiVercel}/>
            </Section>
        </Layout>
    )
}

export default About;