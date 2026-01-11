import { Header } from '@/components/navigation/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProgramsSection } from '@/components/sections/ProgramsSection';
import { MethodologySection } from '@/components/sections/MethodologySection';
import { VideoSection } from '@/components/sections/VideoSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ArticlesSection } from '@/components/sections/ArticlesSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/shared/Footer';
import { AnimatedBackground } from '@/components/shared/AnimatedBackground';

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Header />
      <main>
        <HeroSection />
        <MethodologySection />
        <ProgramsSection />
        <VideoSection />
        <FAQSection />
        <TestimonialsSection />
        <ArticlesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
