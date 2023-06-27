import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Webspark+</title>
        <meta
          name="description"
          content="Web agency providing exceptional web development services"
        />
        <link rel="icon" href="/logo-head.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
