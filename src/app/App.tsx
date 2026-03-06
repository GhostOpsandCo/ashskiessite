import { useState } from 'react';
import { SiteContentProvider } from './components/SiteContentContext';
import { EditModePanel } from './components/EditModePanel';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { FeaturedWork } from './components/FeaturedWork';
import { Clients } from './components/Clients';
import { About } from './components/About';
import { Instagram } from './components/Instagram';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BlogPage } from './components/BlogPage';
import { BlogPost } from './components/BlogPost';
import { PortfolioPage } from './components/PortfolioPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'blog':
        return (
          <>
            <BlogPage />
            <Footer />
          </>
        );
      case 'blog-post':
        return (
          <>
            <BlogPost onBack={() => handleNavigate('blog')} />
            <Footer />
          </>
        );
      case 'portfolio':
        return (
          <>
            <PortfolioPage />
            <Footer />
          </>
        );
      case 'home':
      default:
        return (
          <>
            <Hero />
            <FeaturedWork />
            <Clients />
            <About />
            <Instagram />
            <Contact />
            <Footer />
          </>
        );
    }
  };

  return (
    <SiteContentProvider>
      <div className="min-h-screen bg-white">
        <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
        {renderPage()}
        <EditModePanel />
      </div>
    </SiteContentProvider>
  );
}