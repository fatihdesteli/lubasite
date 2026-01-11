import { Header } from '@/components/navigation/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProgramsSection } from '@/components/sections/ProgramsSection';
import { VideoSection } from '@/components/sections/VideoSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ArticlesSection } from '@/components/sections/ArticlesSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/shared/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProgramsSection />
        <VideoSection />
        <TestimonialsSection />
        <ArticlesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
