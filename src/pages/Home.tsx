import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const heroImages = [
  {
    src: 'https://image.qwenlm.ai/generated-images/97a34ab0-c7c8-4370-b5df-5103d2cb8fc0/_result.png',
    alt: 'Elegant restaurant interior with warm lighting',
  },
  {
    src: 'https://image.qwenlm.ai/generated-images/7dd675e9-a5b5-4b6f-a284-762b319cdbd5/_result.png',
    alt: 'Curated natural wine collection',
  },
  {
    src: 'https://image.qwenlm.ai/generated-images/d09bc25a-bcfa-4e5f-bef4-5f9311e8dc98/_result.png',
    alt: 'Chef preparing artisanal dishes',
  },
  {
    src: 'https://image.qwenlm.ai/generated-images/ebddaf5c-0f89-478b-bc4f-8894d87f631f/_result.png',
    alt: 'Beautifully plated fine dining dish',
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 1.1,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <div className="bg-stone-950">
      {/* Hero Section with Image Slider */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Background Image Slider */}
        <div className="absolute inset-0">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.8 },
                scale: { duration: 1.2 },
              }}
              className="absolute inset-0"
            >
              <img
                src={heroImages[currentSlide].src}
                alt={heroImages[currentSlide].alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
          
          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/60 via-stone-950/40 to-stone-950"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-transparent to-stone-950/80"></div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 group"
          aria-label="Previous slide"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 group"
          aria-label="Next slide"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="relative group"
              aria-label={`Go to slide ${index + 1}`}
            >
              <div className={`w-2 h-2 rounded-full transition-all duration-500 ${
                index === currentSlide
                  ? 'bg-amber-400 w-8'
                  : 'bg-white/40 hover:bg-white/60'
              }`}></div>
              {index === currentSlide && (
                <motion.div
                  className="absolute inset-0 bg-amber-400 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 5, ease: 'linear' }}
                  style={{ originX: isPaused ? 1 : 0 }}
                  key={currentSlide}
                />
              )}
            </button>
          ))}
        </div>

        {/* Slide Counter */}
        <div className="absolute top-24 md:top-28 right-4 md:right-8 z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2">
          <span className="text-white text-sm font-medium">
            <span className="text-amber-400">{String(currentSlide + 1).padStart(2, '0')}</span>
            <span className="mx-1 text-white/40">/</span>
            <span className="text-white/60">{String(heroImages.length).padStart(2, '0')}</span>
          </span>
        </div>

        {/* Content - Left Aligned */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 w-full">
          <div className="max-w-2xl text-left">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-amber-400 text-sm uppercase tracking-[0.4em] mb-6 font-medium"
              >
                at Casino Luxembourg
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 whitespace-nowrap"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Public <span className="text-gradient">House</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="text-xl md:text-2xl text-stone-300 mb-4 leading-relaxed"
              >
                A new chapter. The same philosophy.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="text-lg text-stone-400 mb-10"
              >
                Seasonal ingredients, natural wines, and the freedom to choose.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  to="/booking"
                  className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-stone-900 font-bold rounded-full transition-all shadow-2xl shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-105"
                >
                  <span className="relative z-10">Reserve a Table</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Link>
                <Link
                  to="/menu"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/20 hover:border-amber-400/50 text-white hover:text-amber-400 font-semibold rounded-full transition-all duration-300 backdrop-blur-sm hover:backdrop-blur-md"
                >
                  View Menu
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Floating Menu Card - Bottom Right */}
        <motion.div
          initial={{ opacity: 0, x: 50, y: 50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8, ease: 'easeOut' }}
          className="absolute bottom-24 md:bottom-28 right-4 md:right-8 z-20"
        >
          <Link
            to="/menu"
            className="group relative block bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 md:p-6 hover:bg-white/15 hover:border-amber-400/30 transition-all duration-300 hover:scale-105 shadow-2xl"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/30 group-hover:shadow-amber-500/50 transition-shadow">
                <svg className="w-7 h-7 md:w-8 md:h-8 text-stone-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div>
                <p className="text-white font-bold text-base md:text-lg mb-0.5">View Our Menu</p>
                <p className="text-stone-300 text-xs md:text-sm">Discover seasonal dishes</p>
              </div>
              <svg className="w-5 h-5 text-amber-400 group-hover:translate-x-1 transition-transform ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            {/* Decorative gradient line */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl"></div>
          </Link>
        </motion.div>

        {/* Scroll indicator - hidden on mobile to avoid overlap */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-amber-400 rounded-full"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-24 md:py-32 bg-stone-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-stone-900/20 to-stone-950"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-amber-400 text-sm uppercase tracking-[0.3em] mb-4 font-medium">Our Philosophy</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                Let the ingredients
                <br />
                <span className="text-gradient">speak for themselves</span>
              </h2>
              <p className="text-stone-300 text-lg leading-relaxed mb-6">
                At Public House, we are committed to sourcing our products locally and using only seasonal ingredients in every dish we create. Our philosophy is simple: let the ingredients speak for themselves.
              </p>
              <p className="text-stone-400 text-lg leading-relaxed mb-8">
                Located at the iconic Casino Luxembourg, we offer a cozy and trendy dining experience with an emphasis on natural wines, creative cocktails, and refined dishes that celebrate the best of each season.
              </p>
              <div className="flex flex-wrap gap-3">
                {['🌿 Seasonal', '🍷 Natural Wines', '🥂 Craft Cocktails', '☕ Artisan Coffee'].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-white/5 border border-white/10 text-stone-300 rounded-full text-sm font-medium hover:bg-amber-500/10 hover:border-amber-500/20 hover:text-amber-400 transition-all cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/50">
                <img
                  src="https://image.qwenlm.ai/generated-images/1da7f458-c736-4368-91cf-5db6303678fd/_result.png"
                  alt="Fresh seasonal ingredients"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 to-transparent"></div>
              </div>
              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="absolute -bottom-8 -left-8 bg-stone-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl"
              >
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold text-amber-400">4.7</div>
                  <div>
                    <div className="flex gap-0.5 mb-1">
                      {[1,2,3,4,5].map((s) => (
                        <svg key={s} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-stone-400 text-sm">338 reviews</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 md:py-32 bg-stone-900 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-amber-400 text-sm uppercase tracking-[0.3em] mb-4 font-medium">What We Offer</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
              An Experience Like No Other
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🍷',
                title: 'Natural Wine Selection',
                description: 'An exceptional collection of natural and organic wines from across Europe — featuring producers from Luxembourg, France, Italy, Germany, and beyond.',
                image: 'https://image.qwenlm.ai/generated-images/7dd675e9-a5b5-4b6f-a284-762b319cdbd5/_result.png'
              },
              {
                icon: '🍽️',
                title: 'Seasonal & Local',
                description: 'Every dish celebrates the best ingredients of the moment. We source locally and let seasonal produce guide our creative kitchen.',
                image: 'https://image.qwenlm.ai/generated-images/ebddaf5c-0f89-478b-bc4f-8894d87f631f/_result.png'
              },
              {
                icon: '🥂',
                title: 'Crafted Cocktails',
                description: 'From classic Negronis to inventive creations, our bar serves expertly crafted cocktails alongside great coffee and digestifs.',
                image: 'https://image.qwenlm.ai/generated-images/84777553-e952-4533-a664-1c7642db339b/_result.png'
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="group relative bg-stone-800/50 backdrop-blur-sm border border-white/5 rounded-3xl overflow-hidden hover-lift"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-4xl">{feature.icon}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-stone-400 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lunch Formulas */}
      <section className="py-24 md:py-32 bg-stone-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://image.qwenlm.ai/generated-images/d09bc25a-bcfa-4e5f-bef4-5f9311e8dc98/_result.png"
            alt="Chef at work"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/95 to-stone-950"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-amber-400 text-sm uppercase tracking-[0.3em] mb-4 font-medium">Midday Dining</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                Lunch
                <br />
                <span className="text-gradient">Formulas</span>
              </h2>
              <p className="text-stone-300 text-lg leading-relaxed mb-8">
                Join us for a refined midday meal. Our lunch formulas offer exceptional value for a memorable dining experience.
              </p>
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium group"
              >
                See full lunch menu
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              {[
                { label: 'Entrée + Plat', price: '€29', desc: 'Starter and main course' },
                { label: 'Plat + Dessert', price: '€29', desc: 'Main course and dessert' },
                { label: 'Entrée + Plat + Dessert', price: '€37', desc: 'Complete lunch experience', featured: true },
              ].map((formula, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className={`relative p-6 rounded-2xl border transition-all hover:scale-[1.02] ${
                    formula.featured
                      ? 'bg-gradient-to-r from-amber-500/10 to-amber-600/5 border-amber-500/30 shadow-xl shadow-amber-500/5'
                      : 'bg-white/5 border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white">{formula.label}</h3>
                      <p className="text-stone-400 text-sm mt-1">{formula.desc}</p>
                    </div>
                    <div className="text-3xl font-bold text-amber-400">{formula.price}</div>
                  </div>
                  {formula.featured && (
                    <div className="absolute top-3 right-3 px-2 py-0.5 bg-amber-500 text-stone-900 text-xs font-bold rounded-full">
                      BEST VALUE
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-stone-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://image.qwenlm.ai/generated-images/3a1c9b25-026c-40ce-a6a9-fd25c7477ee7/_result.png"
            alt="Elegant dessert"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-stone-950/80 to-stone-950"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Ready to Dine?
            </h2>
            <p className="text-stone-300 text-xl mb-10 max-w-2xl mx-auto">
              Join us for an unforgettable dining experience at Casino Luxembourg.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="group relative inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-stone-900 font-bold rounded-full transition-all shadow-2xl shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-105"
              >
                Make a Reservation
              </Link>
              <a
                href="tel:+352621573723"
                className="inline-flex items-center justify-center px-10 py-4 border-2 border-white/20 hover:border-amber-400/50 text-white hover:text-amber-400 font-semibold rounded-full transition-all duration-300"
              >
                📞 Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
