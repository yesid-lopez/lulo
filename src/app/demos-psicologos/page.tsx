import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import PsychologistDemosSection from '@/components/PsychologistDemosSection';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Demos para psicólogos | lulo',
  description: 'Referencias privadas de sitios web para psicólogos creadas por lulo.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function PsychologistDemosPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] text-gray-950">
      <Navigation />
      <main>
        <PsychologistDemosSection />
      </main>
      <Footer />
    </div>
  );
}
