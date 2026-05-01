import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProfileCard from "@/components/ProfileCard";
import ContactGrid from "@/components/ContactGrid";
import SocialBar from "@/components/SocialBar";
import About from "@/components/About";
import Stack from "@/components/Stack";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";
import ScrollIndicator from "@/components/ScrollIndicator";

export default function Home() {
  return (
    <>
      <Navbar />
      <ScrollIndicator />
      <main className="container">
        <Hero />
        <ProfileCard />
        <ContactGrid />
        <SocialBar />
        <About />
        <Stack />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <Certifications />
      </main>
      <Footer />
    </>
  );
}
