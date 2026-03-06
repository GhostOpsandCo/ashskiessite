import { SiteContentProvider } from './components/SiteContentContext';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { FeaturedWork } from './components/FeaturedWork';
import { Clients } from './components/Clients';
import { About } from './components/About';
import { Instagram } from './components/Instagram';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <SiteContentProvider>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Hero />
        <FeaturedWork />
        <Clients />
        <About />
        <Instagram />
        <Contact />
        <Footer />
      </div>
    </SiteContentProvider>
  );
}