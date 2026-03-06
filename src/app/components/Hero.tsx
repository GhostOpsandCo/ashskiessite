import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useRef, useCallback } from 'react';
import { useSiteContent } from './SiteContentContext';
import { EditableText } from './EditableText';

export function Hero() {
  const { get, set: setContent, isEditMode } = useSiteContent();
  const fileRef = useRef<HTMLInputElement>(null);
  const heroBg = get('hero.bgImage');

  const handleImageDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setContent('hero.bgImage', reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  }, [setContent]);

  const handleImageClick = useCallback(() => {
    if (isEditMode) fileRef.current?.click();
  }, [isEditMode]);

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setContent('hero.bgImage', reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  }, [setContent]);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        {/* Background Image */}
        <div
          className={`absolute inset-0 ${isEditMode ? 'editable-image' : ''}`}
          style={{
            cursor: isEditMode ? 'pointer' : 'default',
            userSelect: 'none',
          }}
          onDrop={isEditMode ? handleImageDrop : undefined}
          onDragOver={isEditMode ? (e) => e.preventDefault() : undefined}
          onClick={handleImageClick}
        >
          <img
            src={heroBg}
            alt="Hero background"
            draggable={false}
            className="absolute w-full h-full"
            style={{
              objectFit: 'cover',
              objectPosition: '50% 50%',
            }}
          />
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>

        {/* Heavy Dark Gradient Overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.60) 0%, rgba(0,0,0,0.30) 45%, rgba(0,0,0,0.80) 100%)',
          }}
        />
        {/* Radial vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.60) 100%)',
          }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-6 lg:px-12 pointer-events-none">
        <div className="text-center text-white max-w-5xl pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <EditableText
              contentKey="hero.tagline"
              as="p"
              className="text-sm lg:text-base tracking-[0.3em] uppercase mb-6 text-white/90 font-light"
              style={{ fontFamily: 'var(--font-sans)' }}
            />
            <EditableText
              contentKey="hero.name"
              as="h1"
              className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl mb-8 tracking-tight leading-[0.9]"
              style={{ fontFamily: 'var(--font-serif)' }}
            />
            <EditableText
              contentKey="hero.description"
              as="p"
              className="text-lg lg:text-xl max-w-2xl mx-auto mb-12 leading-relaxed text-white/80 font-light"
              style={{ fontFamily: 'var(--font-sans)' }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-[1px] h-16 bg-white/50"
        />
      </motion.div>
    </section>
  );
}