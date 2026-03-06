import { motion } from 'motion/react';
import { EditableText } from './EditableText';

export function Clients() {
  const brandKeys = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <section className="py-16 lg:py-24 bg-neutral-50">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <EditableText
            contentKey="clients.label"
            as="p"
            className="text-sm tracking-[0.3em] uppercase mb-4 text-black/60"
            style={{ fontFamily: 'var(--font-sans)' }}
          />
          <EditableText
            contentKey="clients.heading"
            as="h2"
            className="text-4xl lg:text-6xl tracking-tight"
            style={{ fontFamily: 'var(--font-serif)' }}
          />
        </motion.div>

        {/* Brand Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {brandKeys.map((n, index) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center h-32 bg-white border border-black/5 transition-all hover:border-black/20 hover:shadow-lg"
            >
              <EditableText
                contentKey={`clients.brand.${n}`}
                as="span"
                className="text-xl lg:text-2xl tracking-widest text-black/80"
                style={{ fontFamily: 'var(--font-serif)' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
