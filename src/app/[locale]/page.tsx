import { HeroSection } from '@/components/sections/HeroSection';
import { MethodologySection } from '@/components/sections/MethodologySection';
import { VideoSection } from '@/components/sections/VideoSection';
import { ProgramsSection } from '@/components/sections/ProgramsSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/shared/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <MethodologySection />
        <VideoSection />
        <ProgramsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
