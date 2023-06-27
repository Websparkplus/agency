import About from "@/components/works/litspring/About";
import Footer from "@/components/works/litspring/Footer";
import Header from "@/components/works/litspring/Header";
import Hero from "@/components/works/litspring/Hero";
import Support from "@/components/works/litspring/Support";
import Projects from "@/components/works/litspring/Projects";
import Figures from "@/components/works/litspring/Figures";
import Head from "next/head";


export default function LitSpringNetwork() {
  return (
    <main className="bg-gray-50 text-cyan-900">
      <Head>
        <title>LitSpring Network</title>
        <meta
          name="description"
          content="Website project built by Webspark+"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <About />
      <Figures />
      <Projects />
      <Support />
      <Footer />
    </main>
  );
}
