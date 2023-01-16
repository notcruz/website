import type {NextPage} from "next";
import {Container} from "~/core/components";
import {GithubRepo, PageProperties} from "~/core/types";
import {AiFillGithub, AiFillLinkedin, AiFillMail, AiOutlineFork, AiOutlineStar} from "react-icons/ai";
import {getDatabase} from "~/core/lib/notion";
import {HiOutlineExternalLink} from "react-icons/hi";
import {AnimatePresence, motion} from "framer-motion";
import React from "react";
import Link from "next/link";

type PageProps = { projects: GithubRepo[], posts: PageProperties[] }

const Home: NextPage<PageProps> = ({projects, posts}) => {
    return (
        <AnimatePresence mode="wait">
            <div className={"flex flex-col lg:flex-row w-screen"}>
                <motion.div initial={{opacity: 0, y: 25}} animate={{opacity: 1, y: 0}}
                            exit={{opacity: 0, scale: 0.5}}
                            transition={{ease: "easeInOut", duration: 0.5, delay: 0.25}}
                            className={"lg:fixed lg:max-w-md xl:max-w-xl mt-6 p-6 lg:p-0 lg:py-24 lg:pl-24 lg:pr-0"}
                >
                    <h1 className="font-bold text-4xl md:text-5xl">Jonathan Cruz</h1>
                    <h2 className="font-semibold text-xl md:text-2xl mt-3">Software Engineer</h2>
                    <motion.div initial={{opacity: 0, y: 25}} animate={{opacity: 1, y: 0}}
                                exit={{opacity: 0, scale: 0.5}}
                                transition={{ease: "easeInOut", duration: 0.5, delay: 0.50}}
                                className={"mt-6 space-y-3 text-sm leading-loose dark:text-gray-400"}
                    >
                        <p>
                            Third year undergraduate student at {" "}
                            <a className={"text-white underline"} href={"https://www.rit.edu/"} rel={"noreferrer"}
                               target={"_blank"}>
                                Rochester Institute of Technology
                            </a>
                            {" "} studying Software Engineering and Quantum Information Science and Technology.
                        </p>
                        <p>
                            I started university with little background knowledge in programming after spending some
                            time learning web development in early-mid 2020. I started by watching a few YouTube
                            videos on
                            web development and then purchased a Udemy course on Electron.
                            Afterwards, curiosity got to me and I dipped my toes into reverse engineering obfuscated
                            applications.
                        </p>
                        <p>
                            On my spare time, I further my understanding on Quantum Computing, Artificial
                            Intelligence and
                            Neuroscience. I share what I learn on my {" "}
                            <Link href={"/blog"}>
                                <a className={"text-white underline"}>blog</a>
                            </Link>
                            .
                        </p>
                    </motion.div>
                    <motion.div initial={{opacity: 0, y: 25}} animate={{opacity: 1, y: 0}}
                                exit={{opacity: 0, scale: 0.5}}
                                transition={{ease: "easeInOut", duration: 0.5, delay: 0.75}}
                                className={"mt-6 md:mt-12 lg:mt-24 flex flex-wrap items-center gap-x-9"}>
                        <a className={"text-sm flex items-center"} href={"https://github.com/notcruz"}
                           rel={"noreferrer"}
                           target={"_blank"}>
                            <span><AiFillGithub/></span>
                            <span className={"mx-2"}>Github</span>
                            <span><HiOutlineExternalLink/></span>
                        </a>
                        <a className={"text-sm flex items-center"} href={"https://www.linkedin.com/in/notcruz/"}
                           rel={"noreferrer"} target={"_blank"}>
                            <span><AiFillLinkedin/></span>
                            <span className={"mx-2"}>LinkedIn</span>
                            <span><HiOutlineExternalLink/></span>
                        </a>
                        <a className={"text-sm flex items-center"} href={"mailto:jon@crzx.io"} rel={"noreferrer"}
                           target={"_blank"}>
                            <span><AiFillMail/></span>
                            <span className={"mx-2"}>Email</span>
                            <span><HiOutlineExternalLink/></span>
                        </a>
                    </motion.div>
                </motion.div>
                <motion.div initial={{opacity: 0, y: 25}} animate={{opacity: 1, y: 0}}
                            exit={{opacity: 0, scale: 0.5}}
                            transition={{ease: "easeInOut", duration: 0.5, delay: 1.00}}
                            className={"lg:absolute w-full lg:max-w-xl xl:max-w-3xl right-0 p-6 lg:p-0 lg:py-24 lg:pr-24 xl:pl-24 space-y-12"}
                >
                    <div className={"space-y-3"}>
                        <Container color={"border-[#FF9900]"}
                                   header={{
                                       one: "Incoming Intern",
                                       two: "May 2023 - Sept 2023",
                                       three: "New York, NY"
                                   }}
                                   body={{one: "Amazon.com Services LLC", two: "Software Dev Engineer Intern I"}}
                                   externals={[{key: "Website", value: "https://www.amazon.com/"}]}/>
                        <Container color={"border-green-500"}
                                   header={{one: "Research", two: "Jan 2023 - Present", three: "Rochester, NY"}}
                                   body={{one: "Accessible Learning Labs", two: "Senior Dev Engineer"}}
                                   externals={[{key: "Website", value: "https://all.rit.edu/"}]}/>
                        <Container color={"border-red-500"}
                                   header={{one: "Teaching", two: "Sept 2021 - Dec 2022", three: "Rochester, NY"}}
                                   body={{
                                       one: "RIT Academic Success Center",
                                       two: "Supplemental Instruction Leader"
                                   }}
                                   externals={[{
                                       key: "Website",
                                       value: "https://www.rit.edu/academicsuccesscenter/supplemental-instruction"
                                   }]}/>
                        <Container color={"border-red-500"}
                                   header={{one: "Internship", two: "May 2022 - Aug 2022", three: "New York, NY"}}
                                   body={{one: "Amazon.com Services LLC", two: "Software Dev Engineer Intern I"}}
                                   externals={[{key: "Website", value: "https://www.amazon.com/"}]}/>
                    </div>
                    <div className={"space-y-3"}>
                        {projects.map((project) => (
                            <Container key={project.repo} color={"border-purple-500"}
                                       header={{one: project.language}}
                                       body={{one: project.repo, two: project.description}}
                                       others={[{key: project.stars, icon: <AiOutlineStar/>},
                                           {key: project.forks, icon: <AiOutlineFork/>}]}
                                       externals={[{key: "Repository", value: project.link}]}/>
                        ))}
                    </div>
                    <div className={"space-y-3"}>
                        {posts.map((post) => (
                            <Container key={post?.title} color={"border-white"}
                                       header={{one: "Featured", two: `${post?.created}`}}
                                       body={{one: `${post.title}`, two: `${post.description}`}}
                                       externals={[{key: "Post", value: `/blog/${post.slug}`}]}/>
                        ))}
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export const getStaticProps = async () => {
    const projects = await fetch('https://gh-pinned.nxl.sh/api/user/notcruz').then((res) => res.json());
    const posts = await getDatabase();
    return {props: {projects, posts: posts.filter((post) => post.status === "Featured")}, revalidate: 1};
};

export default Home;