import { motion } from 'motion/react';
import { useState } from 'react';
import { EditableText } from './EditableText';
import { EditableImage } from './EditableImage';
import { useSiteContent } from './SiteContentContext';
import golfPortrait from '../../assets/golf-portrait.jpg';
import voguePortrait from '../../assets/vogue-portrait.png';
import hautePortrait from '../../assets/haute-portrait.png';
import golfSkirtPortrait from '../../assets/golf-skirt-portrait.jpg';
import elegantPortrait from '../../assets/elegant-portrait.png';
import pinkGolfPortrait from '../../assets/pink-golf-portrait.jpg';
import formalPortrait from '../../assets/formal-portrait.png';

/*
 * Image-driven portfolio layout.
 * Each item defines its own aspect ratio so the layout adapts
 * to whatever photos are uploaded — no forced cropping.
 */

interface PortfolioItem {
  id: number;
  size: 'large' | 'medium';
  directSrc?: string;       // hardcoded image (bypasses CMS)
  aspect: string;           // CSS aspect-ratio value
}

const ITEMS: PortfolioItem[] = [
  { id: 1, size: 'large', directSrc: voguePortrait, aspect: '3/4' },
  { id: 2, size: 'medium', directSrc: elegantPortrait, aspect: '3/4' },
  { id: 3, size: 'medium', directSrc: pinkGolfPortrait, aspect: '3/4' },
  { id: 4, size: 'large', directSrc: golfPortrait, aspect: '3/4' },
  { id: 5, size: 'large', directSrc: hautePortrait, aspect: '9/16' },
  { id: 6, size: 'medium', directSrc: formalPortrait, aspect: '16/9' },
];

export function FeaturedWork() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const { get, isEditMode } = useSiteContent();

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 lg:mb-24"
        >
          <EditableText
            contentKey="featured.label"
            as="p"
            className="text-sm tracking-[0.3em] uppercase mb-4 text-black/60"
            style={{ fontFamily: 'var(--font-sans)' }}
          />
          <EditableText
            contentKey="featured.heading"
            as="h2"
            className="text-5xl lg:text-7xl tracking-tight"
            style={{ fontFamily: 'var(--font-serif)' }}
          />
        </motion.div>

        {/* Portfolio Grid — columns with natural image sizing */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {ITEMS.map((item, index) => {
            const title = get(`featured.${item.id}.title`);
            const category = get(`featured.${item.id}.category`);
            const year = get(`featured.${item.id}.year`);

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
                className="group relative overflow-hidden cursor-pointer break-inside-avoid"
                style={item.directSrc ? undefined : { aspectRatio: item.aspect }}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Image — fills naturally for uploaded photos, uses aspect ratio for placeholders */}
                {item.directSrc ? (
                  <img
                    src={item.directSrc}
                    alt={title}
                    draggable={false}
                    className={`w-full h-auto block transition-all duration-700 ${hoveredId === item.id ? 'scale-105 opacity-80' : 'scale-100 opacity-100'
                      }`}
                  />
                ) : (
                  <EditableImage
                    contentKey={`featured.${item.id}.image`}
                    alt={title}
                    className={`w-full h-full object-cover transition-all duration-700 ${hoveredId === item.id ? 'scale-105 opacity-80' : 'scale-100 opacity-100'
                      }`}
                  />
                )}

                {/* Hover info overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-500 ${hoveredId === item.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  style={{ pointerEvents: isEditMode ? 'none' : 'auto' }}
                />

                {/* Text label on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-6 lg:p-8"
                  style={{ pointerEvents: isEditMode ? 'none' : 'auto' }}
                >
                  <motion.div
                    initial={false}
                    animate={{
                      y: hoveredId === item.id ? 0 : 20,
                      opacity: hoveredId === item.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.35 }}
                  >
                    <p
                      className="text-xs tracking-[0.2em] uppercase mb-2 text-white/80"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      <EditableText contentKey={`featured.${item.id}.category`} as="span" />
                      {' • '}
                      <EditableText contentKey={`featured.${item.id}.year`} as="span" />
                    </p>
                    <EditableText
                      contentKey={`featured.${item.id}.title`}
                      as="h3"
                      className="text-2xl lg:text-3xl text-white tracking-tight"
                      style={{ fontFamily: 'var(--font-serif)' }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-16"
        >
          <button
            className="inline-flex items-center gap-2 px-12 py-4 border-2 border-black text-black uppercase tracking-widest text-sm transition-all hover:bg-black hover:text-white"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            <EditableText contentKey="featured.cta" as="span" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}