import { About } from "@/components/About";
import { BackToTop } from "@/components/BackToTop";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { CvDownload } from "@/components/CvDownload";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Education />
        <CvDownload />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
