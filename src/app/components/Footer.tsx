import { motion } from 'motion/react';
import { EditableText } from './EditableText';

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl tracking-tighter"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            <EditableText contentKey="footer.logo" as="span" />
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-white/60"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            <EditableText contentKey="footer.copyright" as="span" />
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex gap-8 text-sm"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Terms
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
