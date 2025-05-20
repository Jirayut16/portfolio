import AboutMe from "@/components/about-me/About-Me";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import Parallax from "@/components/parallax/Parallax";
import ParallaxSkills from "@/components/parallax/ParallaxSkills";
import ParallaxProject from "@/components/parallax/ParallaxProject";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Parallax />
      <AboutMe />
      <ParallaxSkills />
      <Skills />
      <ParallaxProject />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
