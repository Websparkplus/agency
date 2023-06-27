import Process from "@/components/works/astron/Process";
import Capabilities from "@/components/works/astron/Capabilities";
import Portfolio from "@/components/works/astron/Portfolio";
import Footer from "@/components/works/astron/Footer";
import Header from "@/components/works/astron/Header";
import Hero from "@/components/works/astron/Hero";
import Head from "next/head";

export default function Astron() {
  return (
    <main className="bg-yellow-300 text-black">
      <Head>
        <title>Astron Media</title>
        <meta
          name="description"
          content="Website project built by Webspark+"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <Capabilities />
      <Process />
      <Portfolio />
      <Footer />
    </main>
  );
}














