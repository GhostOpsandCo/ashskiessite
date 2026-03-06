import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react';
import heroBg from 'figma:asset/3fbef72c5bd1f2a12963ab8160dbf30860e96d9e.png';
import vogueImg from 'figma:asset/6b24891726e273dbf06cca618799542d97892202.png';
import golfPortrait from '../../assets/golf-portrait.jpg';

/* ── Default content ────────────────────────────────────────────── */
export const DEFAULT_CONTENT: Record<string, string> = {
  // Hero
  'hero.tagline': 'Model • Influencer • golfer',
  'hero.name': 'ASHLEIGH SKIES',
  'hero.description':
    'Bringing elegance and artistry to every frame. Collaborating with luxury brands to create timeless stories.',
  'hero.cta': 'View Portfolio',
  'hero.bgImage': heroBg,

  // Navigation / brand
  'nav.logo': 'ASHLEIGH SKIES',

  // Featured Work
  'featured.label': 'Featured Work',
  'featured.heading': 'Portfolio',
  'featured.cta': 'View Full Portfolio',
  'featured.1.category': 'Editorial',
  'featured.1.title': 'Vogue Italia',
  'featured.1.year': '2025',
  'featured.1.image': vogueImg,
  'featured.2.category': 'Campaign',
  'featured.2.title': 'Luxury Brand',
  'featured.2.year': '2025',
  'featured.2.image':
    'https://images.unsplash.com/photo-1760551937537-a29dbbfab30b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njc3NzAwMDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'featured.3.category': 'Runway',
  'featured.3.title': 'Paris Fashion Week',
  'featured.3.year': '2024',
  'featured.3.image':
    'https://images.unsplash.com/photo-1717944105945-669b3dd77bfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwcnVud2F5fGVufDF8fHx8MTc2Nzc1MDcyNnww&ixlib=rb-4.1.0&q=80&w=1080',
  'featured.4.category': 'Editorial',
  'featured.4.title': "Harper's Bazaar",
  'featured.4.year': '2024',
  'featured.4.image': golfPortrait,
  'featured.5.category': 'Campaign',
  'featured.5.title': 'Haute Couture',
  'featured.5.year': '2024',
  'featured.5.image':
    'https://images.unsplash.com/photo-1742540676779-b49c3406be26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXV0ZSUyMGNvdXR1cmUlMjBtYWdhemluZXxlbnwxfHx8fDE3Njc3ODg3MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'featured.6.category': 'Editorial',
  'featured.6.title': 'Elle Magazine',
  'featured.6.year': '2024',
  'featured.6.image':
    'https://images.unsplash.com/photo-1640809201122-da5f8d1f8db4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2d1ZSUyMHN0eWxlJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzY3Nzg4NzA3fDA&ixlib=rb-4.1.0&q=80&w=1080',

  // Clients
  'clients.label': 'Collaborations',
  'clients.heading': 'Trusted by Top Brands',
  'clients.brand.1': 'HAPPY DAD',
  'clients.brand.2': 'LMNT',
  'clients.brand.3': 'NELK BOYS',
  'clients.brand.4': 'INTAKE BREATHING',
  'clients.brand.5': 'PICKLE',
  'clients.brand.6': 'REMINGTON STONE',
  'clients.brand.7': 'CAITLYN JEWELRY',
  'clients.brand.8': 'MAELEY COSMETICS',
  'clients.stat.1.number': '50+',
  'clients.stat.1.label': 'Campaigns',
  'clients.stat.2.number': '25+',
  'clients.stat.2.label': 'Brands',
  'clients.stat.3.number': '100+',
  'clients.stat.3.label': 'Editorials',
  'clients.stat.4.number': '2M+',
  'clients.stat.4.label': 'Followers',

  // About
  'about.label': 'About',
  'about.heading': 'Ashleigh Skies creator, golfer, and faith-led storyteller.',
  'about.p1':
    'I built my platform by reinventing myself in real time, choosing growth over comfort and purpose over performance. My content blends golf, lifestyle, personal development, and femininity with a classy, fun, girl-next-door energy that inspires people to level up without losing their joy.',
  'about.p2':
    'I partner with brands that value confidence, discipline, wellness, sports, and intentional living turning products into lifestyle moments that feel authentic and elevated. My audience doesn’t just watch. They trust.',
  'about.p3':
    '“She is clothed with strength and dignity, and she laughs without fear of the future.” — Proverbs 31:25',
  'about.exp.label': 'Experience',
  'about.exp.value': '10+ Years',
  'about.loc.label': 'Based In',
  'about.loc.value': 'Paris, NYC',
  'about.image':
    'https://images.unsplash.com/photo-1620122830785-a18b43585b44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHdoaXRlJTIwZmFzaGlvbnxlbnwxfHx8fDE3Njc3ODg3MDd8MA&ixlib=rb-4.1.0&q=80&w=1080',

  // Instagram
  'ig.label': 'Follow the Journey',
  'ig.handle': '@isabellarose',
  'ig.description': 'Behind the scenes, daily inspiration, and exclusive content',
  'ig.cta': 'Follow on Instagram',
  'ig.1.image':
    'https://images.unsplash.com/photo-1700150662401-9b96a5fedfbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBlZGl0b3JpYWx8ZW58MXx8fHwxNzY3NzgzNTM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
  'ig.1.likes': '45.2K',
  'ig.2.image':
    'https://images.unsplash.com/photo-1717944105945-669b3dd77bfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwcnVud2F5fGVufDF8fHx8MTc2Nzc1MDcyNnww&ixlib=rb-4.1.0&q=80&w=1080',
  'ig.2.likes': '38.7K',
  'ig.3.image':
    'https://images.unsplash.com/photo-1742540676779-b49c3406be26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXV0ZSUyMGNvdXR1cmUlMjBtYWdhemluZXxlbnwxfHx8fDE3Njc3ODg3MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'ig.3.likes': '52.1K',
  'ig.4.image':
    'https://images.unsplash.com/photo-1760551937537-a29dbbfab30b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njc3NzAwMDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'ig.4.likes': '41.3K',
  'ig.5.image':
    'https://images.unsplash.com/photo-1629922949137-e236a5ab497d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZmFzaGlvbiUyMGVkaXRvcmlhbHxlbnwxfHx8fDE3Njc3NDUzNzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'ig.5.likes': '49.8K',
  'ig.6.image':
    'https://images.unsplash.com/photo-1640809201122-da5f8d1f8db4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2d1ZSUyMHN0eWxlJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzY3Nzg4NzA3fDA&ixlib=rb-4.1.0&q=80&w=1080',
  'ig.6.likes': '56.4K',

  // Contact
  'contact.label': 'Get in Touch',
  'contact.heading': "Let's Create Something Beautiful",
  'contact.description':
    'Available for campaigns, editorials, runway shows, and brand collaborations. For booking inquiries, please reach out through my management or use the form.',
  'contact.email': 'bookings@isabellarose.com',
  'contact.location': 'Paris, France & New York, USA',

  // Footer
  'footer.logo': 'ISABELLA ROSE',
  'footer.copyright': '© 2026 Isabella Rose. All rights reserved.',
};

const STORAGE_KEY = 'ashleigh-skies-site-content';

/* ── Context type ───────────────────────────────────────────────── */
interface SiteContentContextType {
  content: Record<string, string>;
  get: (key: string) => string;
  set: (key: string, value: string) => void;
  isEditMode: boolean;
  toggleEditMode: () => void;
  exportJSON: () => void;
  importJSON: (json: string) => void;
  resetAll: () => void;
}

const SiteContentContext = createContext<SiteContentContextType | null>(null);

/* ── Provider ───────────────────────────────────────────────────── */
export function SiteContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<Record<string, string>>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        return { ...DEFAULT_CONTENT, ...parsed };
      }
    } catch {
      // ignore
    }
    return { ...DEFAULT_CONTENT };
  });

  const [isEditMode, setIsEditMode] = useState(false);

  // Persist to localStorage on change
  useEffect(() => {
    // Only save overrides (keys that differ from defaults)
    const overrides: Record<string, string> = {};
    for (const key of Object.keys(content)) {
      if (content[key] !== DEFAULT_CONTENT[key]) {
        overrides[key] = content[key];
      }
    }
    if (Object.keys(overrides).length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(overrides));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [content]);

  const get = useCallback((key: string) => content[key] ?? '', [content]);

  const set = useCallback((key: string, value: string) => {
    setContent((prev) => ({ ...prev, [key]: value }));
  }, []);

  const toggleEditMode = useCallback(() => setIsEditMode((v) => !v), []);

  const exportJSON = useCallback(() => {
    const blob = new Blob([JSON.stringify(content, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'site-content.json';
    a.click();
    URL.revokeObjectURL(url);
  }, [content]);

  const importJSON = useCallback((json: string) => {
    try {
      const parsed = JSON.parse(json);
      setContent({ ...DEFAULT_CONTENT, ...parsed });
    } catch {
      alert('Invalid JSON file');
    }
  }, []);

  const resetAll = useCallback(() => {
    setContent({ ...DEFAULT_CONTENT });
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  return (
    <SiteContentContext.Provider
      value={{ content, get, set, isEditMode, toggleEditMode, exportJSON, importJSON, resetAll }}
    >
      {children}
    </SiteContentContext.Provider>
  );
}

/* ── Hook ───────────────────────────────────────────────────────── */
export function useSiteContent() {
  const ctx = useContext(SiteContentContext);
  if (!ctx) throw new Error('useSiteContent must be inside SiteContentProvider');
  return ctx;
}
