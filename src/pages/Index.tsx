import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SlopMeter from "@/components/SlopMeter";
import PipelineSection from "@/components/PipelineSection";
import ClaudiaSection from "@/components/ClaudiaSection";
import ReviewsSection from "@/components/ReviewsSection";
import MemeSection from "@/components/MemeSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "GerhartStudios — Enterprise Vibe Coding & AI Slop Analysis (Satire)";
    
    const setMeta = (name: string, content: string, property?: boolean) => {
      const attr = property ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    setMeta("description", "GerhartStudios: a satirical parody site about AI vibecoding, DonutPlugins slop analysis, and Claudia-powered Minecraft plugin development. This is humor, not facts.");
    setMeta("og:title", "GerhartStudios — Enterprise Vibe Coding (Satire)", true);
    setMeta("og:description", "Satirical parody about AI vibecoding, DonutPlugins, and the legendary Claudia. 100% humor, 0% journalism.", true);
    setMeta("og:type", "website", true);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", "GerhartStudios — AI Slop Analysis (Satire)");
    setMeta("twitter:description", "The premier satirical destination for vibecoding analysis and plugin development humor.");
    setMeta("robots", "index, follow");
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <SlopMeter />
        <PipelineSection />
        <ClaudiaSection />
        <ReviewsSection />
        <MemeSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
