import "../styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import Navbar from "../components/Navbar";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
    const Layout = Component.Layout || ((page) => page);

    return (
        <>
            <Head>
                <title>Paisan Dev.</title>
                <meta charset="UTF-8"></meta>
                <meta property="og:title" content="Paisan Dev" key="title" />
                <meta
                    name="description"
                    content="A Personal portfolio website."
                ></meta>
                <meta
                    name="keywords"
                    content="Programmer, Developer, Frontend, website,Paisan,freelance"
                ></meta>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <Navbar></Navbar>
            <AnimatePresence
                exitBeforeEnter
                onExitComplete={() => window.scrollTo(0, 0)}
            >
                <Component {...pageProps} />
            </AnimatePresence>
        </>
    );
}

export default MyApp;
