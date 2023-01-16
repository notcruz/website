import Link from "next/link";
import Image from "next/image";
import type {NextPage} from "next";
import dynamic from "next/dynamic";
import {useTheme} from "next-themes";
import {useEffect, useMemo} from "react";
import ReactDOMServer from "react-dom/server";
import {NotionRenderer} from "react-notion-x";
import {ExtendedRecordMap} from "notion-types";

import {Layout} from "~/core/components";
import {getDatabase, notion} from "~/core/lib/notion";


import {PageProperties} from "~/core/types";

const Code = dynamic(() =>
    import('react-notion-x/build/third-party/code').then((m) => m.Code)
)

const Collection = dynamic(() =>
    import('react-notion-x/build/third-party/collection').then(
        (m) => m.Collection
    )
)

const Equation = dynamic(() =>
    import('react-notion-x/build/third-party/equation').then((m) => m.Equation)
)
const Pdf = dynamic(
    () => import('react-notion-x/build/third-party/pdf').then((m) => m.Pdf),
    {
        ssr: false
    }
)
const Modal = dynamic(
    () => import('react-notion-x/build/third-party/modal').then((m) => m.Modal),
    {
        ssr: false
    }
)

type props = { recordMap: ExtendedRecordMap, post: PageProperties }

const Slug: NextPage<props> = ({recordMap, post}) => {
    const components = useMemo(() => ({
        nextImage: Image, nextLink: Link,
        Code, Collection, Equation, Pdf, Modal,
    }), []);
    const {systemTheme} = useTheme();

    /* add page properties - hydration */
    useEffect(() => {
        const row = document.getElementsByClassName("notion-collection-row-body");
        if (row.length === 1)
            row[0].innerHTML = ReactDOMServer.renderToString(
                <>
                    <p className="text-sm font-normal text-gray-500 dark:text-gray-300">
                        <time dateTime={post?.created}>Published on {post?.created}</time>
                    </p>
                </>
            )
    }, []);

    return (
        <Layout className={"flex flex-col w-full max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl min-h-screen my-20"}>
            <NotionRenderer hideBlockId={true} showTableOfContents={true}
                            components={components} disableHeader={true}
                            recordMap={recordMap} darkMode={systemTheme === "dark"} fullPage={true}
            />
        </Layout>
    );
};

export const getStaticPaths = async () => {
    const posts = await getDatabase();
    return {
        paths: posts.map(({slug}) => ({params: {slug}})),
        fallback: true,
    };
};

export const getStaticProps = async ({params}: { params: { slug: string } }) => {
    const posts = await getDatabase();
    const post = posts.find((post) => post?.slug === params.slug);

    if (post === undefined)
        return {redirect: {destination: "/"}}

    const recordMap = await notion.getPage(post.id);
    return {props: {recordMap, post}, revalidate: 1};
};

export default Slug;
