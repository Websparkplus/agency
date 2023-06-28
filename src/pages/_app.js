import "@/styles/globals.css";
import Head from "next/head";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  const googleTagId = process.env.GOOGLE_TAG_ID

  return (
    <>
      <Head>
        <title>Webspark+</title>
        <meta
          name="description"
          content="Web agency providing exceptional web development services"
        />
        <link rel="icon" href="/logo-head.ico" />

        {/* Google tag (gtag.js)  */}
        <Script async src={`https://www.googletagmanager.com/gtag/js?id=${googleTagId}`} />

        <Script id="google-analytics">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());

          gtag('config', '${googleTagId}')`}
        </Script>

        {/* Event snippet for Purchase conversion page  */}
        <Script>
          {`  gtag('event', 'conversion', {
            'send_to': '${googleTagId}/mCZ4COONhqgYEJDp6N8p',
          'transaction_id': ''
       })`}
        </Script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
