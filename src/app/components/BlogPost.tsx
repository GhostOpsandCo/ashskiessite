import { motion } from 'motion/react';
import { Calendar, ArrowLeft, Share2, Facebook, Twitter, Instagram as InstagramIcon } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface BlogPostProps {
  onBack: () => void;
}

const relatedPosts = [
  {
    id: 2,
    category: 'Behind the Scenes',
    title: 'A Day in the Life: Editorial Shoot for Vogue',
    image: 'https://images.unsplash.com/photo-1700150662401-9b96a5fedfbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBlZGl0b3JpYWx8ZW58MXx8fHwxNzY3NzgzNTM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 3,
    category: 'Sustainability',
    title: 'Sustainable Fashion: Making Conscious Choices',
    image: 'https://images.unsplash.com/photo-1629922949137-e236a5ab497d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZmFzaGlvbiUyMGVkaXRvcmlhbHxlbnwxfHx8fDE3Njc3NDUzNzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 4,
    category: 'Style Guide',
    title: 'Timeless Elegance: Building a Capsule Wardrobe',
    image: 'https://images.unsplash.com/photo-1760551937537-a29dbbfab30b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njc3NzAwMDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function BlogPost({ onBack }: BlogPostProps) {
  return (
    <div className="min-h-screen bg-white pt-24 lg:pt-32">
      {/* Back Button */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-8">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm tracking-[0.2em] uppercase hover:text-black/60 transition-colors"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Editorial
        </motion.button>
      </div>

      {/* Article Header */}
      <article className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mb-12"
        >
          <div
            className="text-xs tracking-[0.2em] uppercase mb-4 text-black/60"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Fashion Week
          </div>
          <h1
            className="text-5xl lg:text-7xl tracking-tight mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Paris Fashion Week 2026: The Future of Haute Couture
          </h1>
          <div
            className="flex items-center gap-6 text-sm text-black/60"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>January 5, 2026</span>
            </div>
            <span>•</span>
            <span>8 min read</span>
          </div>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-[16/9] lg:aspect-[21/9] overflow-hidden bg-neutral-100 mb-16"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1717944105945-669b3dd77bfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwcnVud2F5fGVufDF8fHx8MTc2Nzc1MDcyNnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Paris Fashion Week 2026"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Article Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-8"
          >
            <div className="prose prose-lg max-w-none" style={{ fontFamily: 'var(--font-sans)' }}>
              <p className="text-xl leading-relaxed text-black/80 mb-8">
                Paris Fashion Week has always been the pinnacle of haute couture, where the world's most visionary designers unveil their most daring creations. This season, the atmosphere was electric with innovation, sustainability, and a bold reimagining of what fashion can be.
              </p>

              <h2 className="text-3xl tracking-tight mb-6 mt-12" style={{ fontFamily: 'var(--font-serif)' }}>
                The Collections That Defined the Week
              </h2>

              <p className="text-lg leading-relaxed text-black/70 mb-6">
                From the opening show to the grand finale, each collection told a unique story. Chanel's Karl Lagerfeld successor continued to honor the house's legacy while pushing boundaries with unexpected silhouettes and sustainable materials. The show was a masterclass in balancing tradition with innovation.
              </p>

              <p className="text-lg leading-relaxed text-black/70 mb-8">
                Dior presented a collection that felt like poetry in motion, with flowing fabrics and intricate embroidery that referenced the brand's archives while feeling utterly contemporary. The color palette—soft pinks, deep burgundies, and unexpected pops of electric blue—captured the zeitgeist perfectly.
              </p>

              {/* Pull Quote */}
              <div className="my-12 py-8 border-y border-black/10">
                <blockquote className="text-2xl lg:text-3xl text-center leading-relaxed" style={{ fontFamily: 'var(--font-serif)' }}>
                  "Fashion is not just about clothes; it's about creating a narrative that resonates with the times we live in."
                </blockquote>
              </div>

              <h2 className="text-3xl tracking-tight mb-6 mt-12" style={{ fontFamily: 'var(--font-serif)' }}>
                Sustainability Takes Center Stage
              </h2>

              <p className="text-lg leading-relaxed text-black/70 mb-6">
                One of the most encouraging trends this season was the industry's continued commitment to sustainability. Multiple designers showcased collections made entirely from recycled materials, organic fabrics, and innovative textiles that promise a more eco-conscious future.
              </p>

              <p className="text-lg leading-relaxed text-black/70 mb-8">
                Stella McCartney once again led the charge with her cruelty-free designs, proving that luxury and sustainability are not mutually exclusive. Her use of mushroom leather and regenerated cashmere was both innovative and inspiring.
              </p>

              {/* Image Break */}
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100 my-12">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1509631179647-0177331693ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwc2hvdyUyMGJhY2tzdGFnZXxlbnwxfHx8fDE3Mzc1NTM3NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Fashion show backstage"
                  className="w-full h-full object-cover"
                />
                <p className="text-sm text-black/60 mt-4 text-center" style={{ fontFamily: 'var(--font-sans)' }}>
                  Behind the scenes at Paris Fashion Week 2026
                </p>
              </div>

              <h2 className="text-3xl tracking-tight mb-6 mt-12" style={{ fontFamily: 'var(--font-serif)' }}>
                The Rising Stars
              </h2>

              <p className="text-lg leading-relaxed text-black/70 mb-6">
                While the established houses delivered spectacular shows, it was the emerging designers who truly captured hearts this season. Young creatives brought fresh perspectives, challenging conventions and introducing new voices to the conversation.
              </p>

              <p className="text-lg leading-relaxed text-black/70 mb-8">
                Marine Serre's blend of streetwear and couture continued to evolve, while newcomer Nensi Dojaka brought a raw sensuality to her delicate, deconstructed pieces. These designers represent the future of fashion—bold, diverse, and unapologetically authentic.
              </p>

              <h2 className="text-3xl tracking-tight mb-6 mt-12" style={{ fontFamily: 'var(--font-serif)' }}>
                Looking Forward
              </h2>

              <p className="text-lg leading-relaxed text-black/70 mb-6">
                As the week drew to a close, one thing became clear: fashion is entering a new era. An era where creativity and consciousness go hand in hand, where diversity is celebrated, and where the old rules are being rewritten.
              </p>

              <p className="text-lg leading-relaxed text-black/70">
                Paris Fashion Week 2026 wasn't just a showcase of beautiful clothes—it was a glimpse into the future of an industry in transformation. And what a beautiful future it promises to be.
              </p>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-4"
          >
            {/* Share */}
            <div className="mb-12 pb-12 border-b border-black/10">
              <h3
                className="text-xs tracking-[0.2em] uppercase mb-6"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Share Article
              </h3>
              <div className="flex items-center gap-4">
                <button className="w-12 h-12 flex items-center justify-center border border-black/20 hover:bg-black hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </button>
                <button className="w-12 h-12 flex items-center justify-center border border-black/20 hover:bg-black hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </button>
                <button className="w-12 h-12 flex items-center justify-center border border-black/20 hover:bg-black hover:text-white transition-colors">
                  <InstagramIcon className="w-5 h-5" />
                </button>
                <button className="w-12 h-12 flex items-center justify-center border border-black/20 hover:bg-black hover:text-white transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-neutral-50 p-8">
              <h3
                className="text-2xl mb-4 tracking-tight"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Stay Updated
              </h3>
              <p
                className="text-sm text-black/70 mb-6 leading-relaxed"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Subscribe to receive the latest articles and exclusive insights from the world of high fashion.
              </p>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 border border-black/20 focus:border-black outline-none text-sm transition-colors"
                  style={{ fontFamily: 'var(--font-sans)' }}
                />
                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 text-sm tracking-[0.2em] uppercase hover:bg-black/80 transition-colors"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Subscribe
                </button>
              </form>
            </div>
          </motion.aside>
        </div>

        {/* Related Articles */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="border-t border-black/10 pt-16 pb-24"
        >
          <h2
            className="text-3xl lg:text-4xl mb-12 tracking-tight"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {relatedPosts.map((post) => (
              <div key={post.id} className="group cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 mb-4">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div
                  className="text-xs tracking-[0.2em] uppercase mb-2 text-black/60"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {post.category}
                </div>
                <h3
                  className="text-xl lg:text-2xl tracking-tight leading-tight group-hover:text-black/70 transition-colors"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {post.title}
                </h3>
              </div>
            ))}
          </div>
        </motion.div>
      </article>
    </div>
  );
}
