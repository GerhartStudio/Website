import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Plugins from "@/components/Plugins";
import Stats from "@/components/Stats";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <Plugins />
      <Stats />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
