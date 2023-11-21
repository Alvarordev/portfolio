import AboutSection from "@/components/Home/AboutSection";
import ContactSection from "@/components/Home/ContactSection";
import HeroSection from "@/components/Home/HeroSection";
import ProjectSection from "@/components/Home/ProjectSection";
import ScrollerSection from "@/components/Home/ScrollerSection";

export default function Home() {
  return (
    <main className="flex-grow bg-[#121212] overflow-x-hidden">
      <div className="relative meteorites">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <HeroSection />

      <ProjectSection />

      <ScrollerSection />

      <AboutSection />

      <ContactSection />
    </main>
  );
}
