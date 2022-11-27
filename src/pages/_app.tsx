import "prismjs/themes/prism-tomorrow.css";
import "react-notion-x/src/styles.css";
import "katex/dist/katex.min.css";
import "nprogress/nprogress.css";
import "~/styles/globals.css";
import "styles/notion.css";

import NProgress from "nprogress";
import {Router} from "next/router";
import type {AppProps} from "next/app";
import {ThemeProvider} from "next-themes";
import {AnimatePresence} from "framer-motion";
import Head from "next/head";


Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({Component, pageProps, router}: AppProps) {
    return (
        <ThemeProvider>
            <Head>
                <title>{"jon's website"}</title>
            </Head>
            <AnimatePresence mode="wait">
                <Component {...pageProps} key={router.pathname}/>
            </AnimatePresence>
        </ThemeProvider>
    );
}

export default MyApp;
