import Navigation from '@/components/Navigation';
import HomeHero from '@/components/HomeHero';
import PsychologistDemosSection from '@/components/PsychologistDemosSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] text-gray-950">
      <Navigation />
      <main>
        <HomeHero />
        <PsychologistDemosSection />
      </main>
      <Footer />
    </div>
  );
}
