import Activities from "@/components/works/helm/Activities";
import Features from "@/components/works/helm/Features";
import Footer from "@/components/works/helm/Footer";
import Header from "@/components/works/helm/Header";
import Hero from "@/components/works/helm/Hero";
import Offers from "@/components/works/helm/Offers";
import Head from "next/head";


export default function HelmSpaces() {
  return (
    <main className="bg-gray-50 text-black font-serif">
      <Head>
        <title>Helm Spaces</title>
        <meta
          name="description"
          content="Website project built by Webspark+"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <Activities />
      <Features />
      <Offers />
      <Footer />
    </main>
  );
}
