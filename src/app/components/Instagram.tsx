import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { EditableText } from './EditableText';
import { EditableImage } from './EditableImage';
import { useSiteContent } from './SiteContentContext';

export function Instagram() {
  const posts = [1, 2, 3, 4, 5, 6];
  const { isEditMode } = useSiteContent();

  return (
    <section className="py-24 lg:py-32 bg-neutral-50">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <EditableText
            contentKey="ig.label"
            as="p"
            className="text-sm tracking-[0.3em] uppercase mb-4 text-black/60"
            style={{ fontFamily: 'var(--font-sans)' }}
          />
          <EditableText
            contentKey="ig.handle"
            as="h2"
            className="text-4xl lg:text-6xl mb-6 tracking-tight"
            style={{ fontFamily: 'var(--font-serif)' }}
          />
          <EditableText
            contentKey="ig.description"
            as="p"
            className="text-lg text-black/60 max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-sans)' }}
          />
        </motion.div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {posts.map((n, index) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="group relative aspect-square overflow-hidden cursor-pointer bg-black"
            >
              <EditableImage
                contentKey={`ig.${n}.image`}
                alt={`Instagram post ${n}`}
                className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-70"
              />

              {/* Hover Overlay */}
              <div
                className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                style={{ pointerEvents: isEditMode ? 'none' : 'auto' }}
              >                <div className="flex items-center gap-2 text-white">
                  <Heart className="w-6 h-6 fill-white" />
                  <EditableText
                    contentKey={`ig.${n}.likes`}
                    as="span"
                    className="text-lg"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Follow Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-12"
        >
          <button
            className="inline-flex items-center gap-2 px-12 py-4 bg-black text-white uppercase tracking-widest text-sm transition-all hover:bg-black/80"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            <EditableText contentKey="ig.cta" as="span" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
