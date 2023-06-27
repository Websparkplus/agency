import About from "@/components/main/About";
import Contact from "@/components/main/Contact";
import Expertise from "@/components/main/Expertise";
import Features from "@/components/main/Features";
import Footer from "@/components/main/Footer";
import Header from "@/components/main/Header";
import Hero from "@/components/main/Hero";
import Offers from "@/components/main/Offers";
import Projects from "@/components/main/Projects";
import Services from "@/components/main/Services";

const Home = () => {
  return (
    <main className="bg-black text-gray-200">
      <Header />
      <Hero />
      <Services />
      <About />
      <Expertise />
      <Offers />
      <Features />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
