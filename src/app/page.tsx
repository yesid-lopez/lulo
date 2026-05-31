import Navigation from '@/components/Navigation';
import HomeHero from '@/components/HomeHero';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] text-gray-950">
      <Navigation />
      <main>
        <HomeHero />
      </main>
    </div>
  );
}
