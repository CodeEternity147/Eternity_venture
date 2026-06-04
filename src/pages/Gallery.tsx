import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Image, Grid, Sparkles } from 'lucide-react';

const Gallery = () => {
  useEffect(() => {
    document.title = 'Gallery | Eternity Ventures';
  }, []);

  const galleryItems = [
    { title: 'Innovative Workspaces', description: 'Modern design thinking and collaborative energy.' },
    { title: 'Community Impact', description: 'Projects that drive growth and social value.' },
    { title: 'Creative Partnerships', description: 'Strategic alliances that expand possibility.' },
    { title: 'Digital Experiences', description: 'Immersive campaigns built for every audience.' },
    { title: 'Brand Craft', description: 'Visual stories and identity systems with purpose.' },
    { title: 'Future Ventures', description: 'Bold ideas ready for the next phase of growth.' },
  ];

  return (
    <div className="relative overflow-hidden">
      <section className="relative min-h-screen pt-28 pb-16 bg-slate-50">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-white/90 shadow-lg shadow-slate-200"
            >
              <Sparkles className="h-5 w-5 text-blue-500" />
              <span className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
                Gallery
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900"
            >
              Explore our latest ventures and curated stories.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto"
            >
              A showcase of the brands, partnerships, and digital experiences shaping the future of Eternity Ventures.
            </motion.p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-xl shadow-slate-200/30"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="rounded-3xl bg-blue-500/10 p-3 text-blue-600">
                    <Grid className="h-5 w-5" />
                  </div>
                  <div className="text-xs uppercase tracking-[0.24em] font-semibold text-slate-400">
                    {index + 1}
                  </div>
                </div>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h2>
                <p className="text-sm leading-6 text-slate-600">{item.description}</p>
                <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-gradient-to-br from-blue-400/15 to-cyan-400/15 blur-3xl" />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="rounded-[2rem] bg-slate-950 p-10 text-white shadow-2xl shadow-slate-200/10">
              <div className="inline-flex items-center gap-3 mb-6 px-4 py-3 rounded-full bg-slate-800/80">
                <Image className="h-5 w-5 text-cyan-400" />
                <span className="text-sm font-semibold text-cyan-300">Visual showcase</span>
              </div>
              <h3 className="text-3xl font-bold tracking-tight">Visual inspiration for every venture.</h3>
              <p className="mt-5 text-slate-300 leading-7">
                Discover the creative energy behind our work, from bold brand experiences to media campaigns that bring ideas to life.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-slate-900">Brand Stories</h4>
                <p className="mt-3 text-sm text-slate-600">Narratives designed to connect with audiences and partners.</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-slate-900">Project Highlights</h4>
                <p className="mt-3 text-sm text-slate-600">Highlights from our most impactful launches and collaborations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
