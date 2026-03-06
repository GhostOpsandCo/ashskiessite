import { motion } from 'motion/react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const categories = ['All', 'Editorial', 'Campaign', 'Runway', 'Beauty'];

const portfolioProjects = [
  {
    id: 1,
    category: 'Editorial',
    title: 'Vogue Italia - Winter Dreams',
    client: 'Vogue Italia',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1700150662401-9b96a5fedfbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBlZGl0b3JpYWx8ZW58MXx8fHwxNzY3NzgzNTM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'A stunning winter editorial capturing the essence of modern elegance',
  },
  {
    id: 2,
    category: 'Campaign',
    title: 'Chanel Spring Collection',
    client: 'Chanel',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1760551937537-a29dbbfab30b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njc3NzAwMDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Campaign imagery for Chanel\'s latest spring collection',
  },
  {
    id: 3,
    category: 'Runway',
    title: 'Paris Fashion Week 2026',
    client: 'Multiple Designers',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1717944105945-669b3dd77bfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwcnVud2F5fGVufDF8fHx8MTc2Nzc1MDcyNnww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Walking for top designers at Paris Fashion Week',
  },
  {
    id: 4,
    category: 'Editorial',
    title: 'Harper\'s Bazaar - Minimal Chic',
    client: 'Harper\'s Bazaar',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1629922949137-e236a5ab497d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZmFzaGlvbiUyMGVkaXRvcmlhbHxlbnwxfHx8fDE3Njc3NDUzNzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Minimalist editorial exploring clean lines and sophisticated style',
  },
  {
    id: 5,
    category: 'Campaign',
    title: 'Dior Haute Couture',
    client: 'Dior',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1742540676779-b49c3406be26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXV0ZSUyMGNvdXR1cmUlMjBtYWdhemluZXxlbnwxfHx8fDE3Njc3ODg3MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Showcasing the artistry of Dior haute couture',
  },
  {
    id: 6,
    category: 'Beauty',
    title: 'Elle Beauty Editorial',
    client: 'Elle Magazine',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1640809201122-da5f8d1f8db4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2d1ZSUyMHN0eWxlJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzY3Nzg4NzA3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Beauty focused editorial for Elle Magazine',
  },
  {
    id: 7,
    category: 'Editorial',
    title: 'W Magazine - Studio Sessions',
    client: 'W Magazine',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1717766293792-e78ea97e9d68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcGhvdG9ncmFwaHklMjBzdHVkaW98ZW58MXx8fHwxNzY3NzY1MTAxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Studio editorial capturing raw elegance',
  },
  {
    id: 8,
    category: 'Campaign',
    title: 'Gucci Fall Campaign',
    client: 'Gucci',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1620122830785-a18b43585b44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHdoaXRlJTIwZmFzaGlvbnxlbnwxfHx8fDE3Njc3ODg3MDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Fall campaign for Gucci featuring timeless pieces',
  },
];

export function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? portfolioProjects 
    : portfolioProjects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white pt-24 lg:pt-32">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 lg:mb-16"
        >
          <p
            className="text-sm tracking-[0.3em] uppercase mb-4 text-black/60"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Portfolio
          </p>
          <h1
            className="text-5xl lg:text-7xl tracking-tight mb-6"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Complete Works
          </h1>
          <p
            className="text-lg text-black/60 max-w-3xl"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            A curated collection of editorials, campaigns, and runway moments
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-4 mb-16 lg:mb-20"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 text-sm tracking-[0.2em] uppercase transition-all ${
                activeCategory === category
                  ? 'bg-black text-white'
                  : 'bg-white text-black border border-black/10 hover:border-black/30'
              }`}
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pb-24 lg:pb-32">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 mb-6">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <p
                    className="text-white text-base leading-relaxed"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div>
                <div
                  className="text-xs tracking-[0.2em] uppercase mb-3 text-black/60"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {project.category} • {project.year}
                </div>
                
                <h3
                  className="text-2xl lg:text-3xl mb-2 tracking-tight group-hover:text-black/70 transition-colors"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {project.title}
                </h3>
                
                <p
                  className="text-base text-black/60"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {project.client}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
