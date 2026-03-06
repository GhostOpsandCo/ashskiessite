import { motion } from 'motion/react';
import { Instagram, Youtube, Twitter, Tv, Link } from 'lucide-react';
import { EditableText } from './EditableText';

const socials = [
  { icon: Youtube, href: 'https://www.youtube.com/@itsashleighxoxo', label: 'YouTube' },
  { icon: Instagram, href: 'https://www.instagram.com/itsashleighxoxo/', label: 'Instagram' },
  { icon: Link, href: 'https://link.me/itsashleighxoxo', label: 'Link.me' },
  { icon: Tv, href: 'https://www.twitch.tv/Pintsizexo', label: 'Twitch' },
  { icon: Twitter, href: 'https://x.com/itsashleighxxoo', label: 'X' },
];

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

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-5"
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
                className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/60 transition-all"
              >
                <s.icon className="w-4 h-4" />
              </a>
            ))}
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
