import { motion } from 'motion/react';
import { EditableText } from './EditableText';
import { EditableImage } from './EditableImage';
import aboutPortrait from '../../assets/about-portrait.png';

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden group"
          >
            <img
              src={aboutPortrait}
              alt="About"
              draggable={false}
              className="w-full h-auto block"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:pl-12"
          >
            <EditableText
              contentKey="about.label"
              as="p"
              className="text-sm tracking-[0.3em] uppercase mb-6 text-black/60"
              style={{ fontFamily: 'var(--font-sans)' }}
            />
            <EditableText
              contentKey="about.heading"
              as="h2"
              className="text-4xl lg:text-6xl mb-8 tracking-tight leading-tight"
              style={{ fontFamily: 'var(--font-serif)' }}
            />
            <div
              className="space-y-6 text-lg text-black/70 leading-relaxed"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              <EditableText contentKey="about.p1" as="p" />
              <EditableText contentKey="about.p2" as="p" />
              <EditableText contentKey="about.p3" as="p" className="pt-2 italic font-bold text-black" />
            </div>

            <div className="mt-12 pt-12 border-t border-black/10">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <EditableText
                    contentKey="about.exp.label"
                    as="div"
                    className="text-sm tracking-[0.2em] uppercase mb-2 text-black/60"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  />
                  <EditableText
                    contentKey="about.exp.value"
                    as="div"
                    className="text-2xl tracking-tight"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  />
                </div>
                <div>
                  <EditableText
                    contentKey="about.loc.label"
                    as="div"
                    className="text-sm tracking-[0.2em] uppercase mb-2 text-black/60"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  />
                  <EditableText
                    contentKey="about.loc.value"
                    as="div"
                    className="text-2xl tracking-tight"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
