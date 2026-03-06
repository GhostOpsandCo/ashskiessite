import { motion } from 'motion/react';
import { Mail, MapPin, Instagram, Twitter } from 'lucide-react';
import { EditableText } from './EditableText';
import { useSiteContent } from './SiteContentContext';

export function Contact() {
  const { get } = useSiteContent();

  return (
    <section id="contact" className="py-24 lg:py-32 bg-black text-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <EditableText
              contentKey="contact.label"
              as="p"
              className="text-sm tracking-[0.3em] uppercase mb-6 text-white/60"
              style={{ fontFamily: 'var(--font-sans)' }}
            />
            <EditableText
              contentKey="contact.heading"
              as="h2"
              className="text-5xl lg:text-7xl mb-8 tracking-tight leading-tight"
              style={{ fontFamily: 'var(--font-serif)' }}
            />
            <EditableText
              contentKey="contact.description"
              as="p"
              className="text-lg text-white/70 mb-12 leading-relaxed"
              style={{ fontFamily: 'var(--font-sans)' }}
            />

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 mt-1 text-white/60" />
                <div>
                  <div
                    className="text-sm tracking-[0.2em] uppercase mb-1 text-white/60"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    Email
                  </div>
                  <a
                    href={`mailto:${get('contact.email')}`}
                    className="text-lg hover:text-white/80 transition-colors"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    <EditableText contentKey="contact.email" as="span" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 mt-1 text-white/60" />
                <div>
                  <div
                    className="text-sm tracking-[0.2em] uppercase mb-1 text-white/60"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    Based In
                  </div>
                  <EditableText
                    contentKey="contact.location"
                    as="div"
                    className="text-lg"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  />
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-12 pt-12 border-t border-white/10">
              <div
                className="text-sm tracking-[0.2em] uppercase mb-6 text-white/60"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Follow Me
              </div>
              <div className="flex gap-6">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                >
                  <Twitter className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm tracking-[0.2em] uppercase mb-3 text-white/80"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-white/40 focus:border-white focus:outline-none transition-colors"
                  style={{ fontFamily: 'var(--font-sans)' }}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm tracking-[0.2em] uppercase mb-3 text-white/80"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-white/40 focus:border-white focus:outline-none transition-colors"
                  style={{ fontFamily: 'var(--font-sans)' }}
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm tracking-[0.2em] uppercase mb-3 text-white/80"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Company / Brand
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-white/40 focus:border-white focus:outline-none transition-colors"
                  style={{ fontFamily: 'var(--font-sans)' }}
                  placeholder="Your company"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm tracking-[0.2em] uppercase mb-3 text-white/80"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-white/40 focus:border-white focus:outline-none transition-colors resize-none"
                  style={{ fontFamily: 'var(--font-sans)' }}
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-white text-black uppercase tracking-widest text-sm transition-all hover:bg-white/90 mt-8"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
