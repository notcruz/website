import Image from "next/image";
import type {NextPage} from "next";
import {twMerge} from "tailwind-merge";
import {useEffect, useState} from "react";

import {Section} from "~/core/components";
import {PageProperties} from "~/core/types";
import {getDatabase} from "~/core/lib/notion";
import {Layout} from "~/core/components/Layout";
import Link from "next/link";


const getTags = (posts: PageProperties[]) => Array.from(new Set(posts.flatMap((post) => post.tags ?? [])));

type PageProps = { posts: PageProperties[] }

const Blog: NextPage<PageProps> = ({posts}) => {
    const [search, setSearch] = useState<string>("");
    const [filteredPosts, setFilteredPosts] = useState<PageProperties[]>([...posts]);
    const [tags, filteredTags] = [getTags(posts), getTags(filteredPosts)];

    useEffect(() => {
        const result = posts.filter((post) => (
            post.title?.toLowerCase().includes(search.toLowerCase()) ||
            post.description?.toLowerCase().includes(search.toLowerCase()) ||
            search.toLowerCase().split(' ').every((tag) => post.tags?.includes(tag))));
        setFilteredPosts(result)
    }, [posts, search])

    const toggleTag = (tag: string) => (
        search.includes(tag) ?
            setSearch((s) => s.split(' ').filter((t) => t !== tag)?.join(' ')) :
            setSearch((s) => (s !== '' ? `${s.trim()} ${tag}` : tag)));

    const checkTagged = (tag: string) => filteredTags.includes(tag) && search.toLowerCase().split(' ').includes(tag);

    return (
        <Layout className={"my-20"}>
            <Section header={"Blog"} className={"space-y-3"}>
                <input type={"text"} value={search} placeholder={"Search..."}
                       onChange={(e) => setSearch(e.target.value)}
                       className={"w-full bg-transparent border border-gray-500 dark:border-gray-300 rounded-md px-3 py-2 focus:ring-0 focus:outline-none focus:border-primary-300 transition-colors duration-300"}
                />
                <div className={"flex flex-wrap items-baseline justify-start gap-2 text-sm"}>
                    <p className={"font-medium"}>Choose tags: </p>
                    {tags?.map((tag) => {
                        return (
                            <button key={tag} disabled={!filteredTags.includes(tag)}
                                    onClick={() => toggleTag(tag)}
                                    className={twMerge("transition-colors duration-300 rounded-md px-1.5 py-0.5 font-medium bg-gray-200 disabled:text-gray-300 dark:bg-gray-700 dark:disabled:text-gray-600 disabled:cursor-not-allowed focus:outline-none focus-visible:ring focus-visible:ring-primary-300", checkTagged(tag) ? "text-primary-300" : "")}
                            >
                                {tag}
                            </button>
                        );
                    })}
                </div>
                {filteredPosts?.length === 0 && (
                    <div className={"text-center"}>
                        <p className={"font-bold text-xl mt-6"}>No results found.</p>
                    </div>
                )}
                {filteredPosts?.length > 0 && (
                    <ul className={"grid gap-4 sm:grid-cols-2 xl:grid-cols-3"}>
                        {filteredPosts.map((post) => {
                            return (
                                <li className={"rounded-md border border-gray-500 dark:border-gray-300 hover:scale-[1.03] duration-300"}
                                    key={post?.slug}
                                >
                                    <Link href={`/blog/${post?.slug}`}>
                                        <a className={"block rounded-md focus:outline-none focus-visible:ring focus-visible:ring-primary-300"}>
                                            <figure className={"relative pointer-events-none"}>
                                                <Image src={post?.cover ?? ""} width={750} height={375} loading={"lazy"}
                                                       className={"rounded-t-md"} decoding={"async"}
                                                       alt={`Cover image for post name ${post?.title}.`}
                                                />
                                            </figure>
                                            <div className={"p-3"}>
                                                <h4 className={"font-bold"}>{post?.title}</h4>
                                                <p className={"text-sm text-gray-500 dark:text-gray-300"}>{post?.created}</p>
                                                <p className={"mt-3 text-sm"}>{post?.description}</p>
                                            </div>
                                        </a>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                )}
            </Section>
        </Layout>
    );
};

export const getStaticProps = async () => {
    const posts = await getDatabase();
    return {props: {posts}, revalidate: 1};
};

export default Blog;
