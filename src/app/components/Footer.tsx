import { motion } from 'motion/react';

import { EditableText } from './EditableText';



export function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center gap-8">
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
            className="text-sm text-white/40"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            <EditableText contentKey="footer.copyright" as="span" />
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
