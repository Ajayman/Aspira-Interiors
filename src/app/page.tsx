import HeroSection from '@/src/components/HeroSection';
import AboutSection from '@/src/components/AboutSection';
import PortfolioSection from '@/src/components/PortfolioSection';
import ProductSection from '@/src/components/ProductSection';
import CollaborationSection from '@/src/components/CollaborationSection';
import { NavigationMenu } from '../components/Navigation';
import NavigationLine from '../components/NavigationLine';

export default function Home() {
    
  return (
    <div className="relative">
      <NavigationLine />
      <NavigationMenu />
      <main className='pl-24'>
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <ProductSection />
        <CollaborationSection />
      </main>
    </div>
  );
}
