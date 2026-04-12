import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import SlopMeterSection from '@/components/SlopMeterSection';
import PipelineSection from '@/components/PipelineSection';
import ClaudiaSection from '@/components/ClaudiaSection';
import ReviewsSection from '@/components/ReviewsSection';
import MemesSection from '@/components/MemesSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <SlopMeterSection />
      <PipelineSection />
      <ClaudiaSection />
      <ReviewsSection />
      <MemesSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
