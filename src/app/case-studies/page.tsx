import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CmsCaseStudiesShowcase from '@/components/CmsCaseStudiesShowcase';
import RealImplementationsSection from '@/components/RealImplementationsSection';
import HackathonsSection from '@/components/HackathonsSection';

export default function CaseStudies() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F5F5F5]">
      <Navigation />

      <main className="flex-grow px-6 pb-16 pt-8 md:px-12 md:pb-20 lg:px-24">
        <CmsCaseStudiesShowcase />
        <RealImplementationsSection />
        <HackathonsSection />
      </main>

      <Footer />
    </div>
  );
}
