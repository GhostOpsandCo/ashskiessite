import { motion } from 'motion/react';
import { Calendar, ArrowRight, Search } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

const categories = ['All', 'Fashion Week', 'Behind the Scenes', 'Sustainability', 'Style Guide', 'Interview', 'Beauty'];

const blogPosts = [
  {
    id: 1,
    category: 'Fashion Week',
    title: 'Paris Fashion Week 2026: The Future of Haute Couture',
    excerpt: 'An insider look at the most breathtaking collections and trends from this season\'s shows.',
    image: 'https://images.unsplash.com/photo-1717944105945-669b3dd77bfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwcnVud2F5fGVufDF8fHx8MTc2Nzc1MDcyNnww&ixlib=rb-4.1.0&q=80&w=1080',
    date: 'January 5, 2026',
    readTime: '8 min read',
    featured: true,
  },
  {
    id: 2,
    category: 'Behind the Scenes',
    title: 'A Day in the Life: Editorial Shoot for Vogue',
    excerpt: 'From sunrise call times to the final shot, here\'s what really happens on set.',
    image: 'https://images.unsplash.com/photo-1700150662401-9b96a5fedfbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBlZGl0b3JpYWx8ZW58MXx8fHwxNzY3NzgzNTM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    date: 'December 28, 2025',
    readTime: '6 min read',
  },
  {
    id: 3,
    category: 'Sustainability',
    title: 'Sustainable Fashion: Making Conscious Choices',
    excerpt: 'Why the industry needs to change and how we can all make a difference.',
    image: 'https://images.unsplash.com/photo-1629922949137-e236a5ab497d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZmFzaGlvbiUyMGVkaXRvcmlhbHxlbnwxfHx8fDE3Njc3NDUzNzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    date: 'December 20, 2025',
    readTime: '10 min read',
  },
  {
    id: 4,
    category: 'Style Guide',
    title: 'Timeless Elegance: Building a Capsule Wardrobe',
    excerpt: 'Essential pieces every wardrobe needs for effortless sophistication.',
    image: 'https://images.unsplash.com/photo-1760551937537-a29dbbfab30b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njc3NzAwMDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    date: 'December 15, 2025',
    readTime: '7 min read',
  },
  {
    id: 5,
    category: 'Interview',
    title: 'In Conversation with Emerging Designers',
    excerpt: 'Meet the next generation of talent shaping the future of fashion.',
    image: 'https://images.unsplash.com/photo-1742540676779-b49c3406be26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXV0ZSUyMGNvdXR1cmUlMjBtYWdhemluZXxlbnwxfHx8fDE3Njc3ODg3MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    date: 'December 10, 2025',
    readTime: '12 min read',
  },
  {
    id: 6,
    category: 'Beauty',
    title: 'Runway Beauty Trends: From Backstage to Street',
    excerpt: 'The makeup and hair looks that defined this season.',
    image: 'https://images.unsplash.com/photo-1640809201122-da5f8d1f8db4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2d1ZSUyMHN0eWxlJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzY3Nzg4NzA3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    date: 'December 5, 2025',
    readTime: '5 min read',
  },
];

export function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  const filteredPosts = regularPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white pt-24 lg:pt-32">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 lg:mb-24"
        >
          <p
            className="text-sm tracking-[0.3em] uppercase mb-4 text-black/60"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Editorial
          </p>
          <h1
            className="text-5xl lg:text-7xl tracking-tight mb-6"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Fashion & Lifestyle Journal
          </h1>
          <p
            className="text-lg text-black/60 max-w-3xl"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Insights, stories, and perspectives from the world of high fashion
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 space-y-8"
        >
          {/* Search Bar */}
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-black/40" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-4 border border-black/10 focus:border-black outline-none text-base transition-colors"
              style={{ fontFamily: 'var(--font-sans)' }}
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 text-sm tracking-[0.2em] uppercase transition-all ${
                  selectedCategory === category
                    ? 'bg-black text-white'
                    : 'border border-black/20 text-black hover:border-black'
                }`}
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Post */}
        {(selectedCategory === 'All' || selectedCategory === featuredPost.category) && !searchQuery && (
          <motion.article
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-24 lg:mb-32 group cursor-pointer"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
                <ImageWithFallback
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-6 left-6 bg-black text-white px-4 py-2 text-xs tracking-[0.2em] uppercase" style={{ fontFamily: 'var(--font-sans)' }}>
                  Featured
                </div>
              </div>

              <div>
                <div
                  className="text-xs tracking-[0.2em] uppercase mb-4 text-black/60"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {featuredPost.category}
                </div>
                <h2
                  className="text-4xl lg:text-5xl mb-6 tracking-tight leading-tight group-hover:text-black/70 transition-colors"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {featuredPost.title}
                </h2>
                <p
                  className="text-lg text-black/70 mb-6 leading-relaxed"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {featuredPost.excerpt}
                </p>
                <div
                  className="flex items-center gap-6 text-sm text-black/60 mb-8"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <button
                  className="inline-flex items-center gap-2 text-sm tracking-[0.2em] uppercase group-hover:gap-3 transition-all"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.article>
        )}

        {/* Grid of Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 pb-24 lg:pb-32">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 mb-6">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div
                  className="text-xs tracking-[0.2em] uppercase mb-3 text-black/60"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {post.category}
                </div>
                
                <h3
                  className="text-2xl lg:text-3xl mb-4 tracking-tight leading-tight group-hover:text-black/70 transition-colors"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {post.title}
                </h3>
                
                <p
                  className="text-base text-black/70 mb-4 leading-relaxed"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {post.excerpt}
                </p>
                
                <div
                  className="flex items-center gap-4 text-sm text-black/60 mb-4"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <button
                  className="inline-flex items-center gap-2 text-sm tracking-[0.2em] uppercase group-hover:gap-3 transition-all"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.article>
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <p
                className="text-lg text-black/60"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                No articles found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}